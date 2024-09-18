Script to add all items from quixel
As quixel is being removed, all items are free to aquire. This script is to automate the process to add items to your account (As of writing, a total of 18874 items)

Note: This script only tested in the latest version of Chrome.

How to use
Copy the script from below (run.js)
Login into https://quixel.com
Go to https://quixel.com/megascans/collections
Open devtools (F12) -> Go to "Console" tab
Paste in the script and press Enter.
A dialog should popup confirming the execution, click "OK"
Sit back and wait
Common issues
Getting "Forbidden" error. (Even after refresh, the whole page just shows "Forbidden")
There is a chance that the API adding too fast and you hit the rate limit of the API. (My testing is around after 10 pages, so ~10k items).
Wait after ~10-20 minutes and continue. See Common Fixes -> Restart script to continue the execution after you can load https://quixel.com.
The script seems to be paused/hang
It could be too much logging going it. Try monitor the script, if it says "END PAGE X", note the page number down (in case need restart) and clear the console by clicking the "🚫" icon in devtools.
See Common Fixes -> Restart script for fixing.
Getting the error **UNABLE TO ADD ITEM**
There should have the error message shown in ( ). If it is user already owns specified asset at a higher or equal resolution, then its already in your account.
Getting the error cannot find authentication token. Please login again
Clear browser cookies and re-login quixel again. Try just simply add 1 item manully. If it success, then see Common Fixes -> Restart script for continue the execution.
Common Fixes
Restart Script
If it hang too long, note what page is had going (Search for log like PAGE 10 START)
Copy the run.js script
Update the startPage = 0 on the first line to startPage = 10 (assuming page 10 was hanged)