(async () => {
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    const callCacheApi = async (params = {}) => {
        const defaultParams = {
            page: 0,
            maxValuesPerFacet: 1000,
            hitsPerPage: 1000,
            attributesToRetrieve: ["id", "name"].join(",")
        };
        const response = await fetch("https://proxy-algolia-prod.quixel.com/algolia/cache", {
            headers: {
                "x-api-key": "2Zg8!d2WAHIUW?pCO28cVjfOt9seOWPx@2j"
            },
            body: JSON.stringify({
                url: "https://6UJ1I5A072-2.algolianet.com/1/indexes/assets/query?x-algolia-application-id=6UJ1I5A072&x-algolia-api-key=e93907f4f65fb1d9f813957bdc344892",
                params: new URLSearchParams({ ...defaultParams, ...params }).toString()
            }),
            method: "POST",
        });
        return await response.json();
    }

    const callAcl = async ({ id, name }) => {
        try {
            const response = await fetch(`https://quixel.com/v1/acl`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            });

            if (!response.ok) {
                const errorData = await response.json();
                handleError(name, errorData);
            } else {
                console.log(`-> Successfully added item: ${name}`);
            }
        } catch (error) {
            console.error(`-> Error in callAcl for item: ${name} | ${error.message}`);
        }
    }

    const handleError = (name, errorData) => {
        if (errorData.message && errorData.message.includes("user already owns specified asset at a higher or equal resolution")) {
            console.warn(`-> UNABLE TO ADD ITEM: ${name} | ${errorData.message}`);
        } else {
            console.error(`-> Error adding item: ${name} | ${errorData.message}`);
            alert(`Error adding item: ${name}. ${errorData.message}`);
        }
    }

    console.log("-> Checking Auth API Token...");
    let authToken = "";
    try {
        const authCookie = getCookie("auth") ?? "{}";
        authToken = JSON.parse(decodeURIComponent(authCookie))?.token;
        if (!authToken) {
            alert("Error: cannot find authentication token. Please login again.");
            return;
        }
    } catch (_) {
        alert("Error: cannot find authentication token. Please login again.");
        return;
    }

    console.log("-> Getting Total Number of Pages....");
    const { nbPages: totalPages, hitsPerPage: itemsPerPage, nbHits: totalItems } = await callCacheApi();
    console.log(`-> Total Items to add: ${totalItems} | ${totalPages} total pages with ${itemsPerPage} per page`);

    if (!confirm(`Click OK to start adding ${totalItems} items in your account.`)) return;

    let startPage = window.startPage || 0;
    let autoClearConsole = window.autoClearConsole || false;

    for (let pageIdx = startPage; pageIdx < totalPages; pageIdx++) {
        console.log("-> ======================= PAGE " + pageIdx + "/" + totalPages + " START =======================");
        console.log("-> Getting Items from page " + pageIdx + " ...");

        const { hits: items } = await callCacheApi({ page: pageIdx });
        const aclPromises = items.map(callAcl);

        await Promise.all(aclPromises);
        console.log("-> ======================= PAGE " + pageIdx + " COMPLETED =======================");
        if (autoClearConsole) console.clear();
    }
})();