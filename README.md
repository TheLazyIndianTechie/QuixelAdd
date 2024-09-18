# Quixel Item Adder

## Overview
This Chrome extension automates the process of adding items from Quixel to your account. As Quixel is being removed, all items are free to acquire. This script helps you add items efficiently.

## Features
- Specify the starting page for adding items.
- Option to automatically clear the console during the process.
- Error handling for already owned assets and other issues.

## Prerequisites
- Google Chrome installed on your computer.
- A Quixel account to log in and access items.

## How to Load the Extension Unpacked

1. **Download the Extension Files**
   - Clone or download the repository containing the extension files.
   - Ensure you have the following files in your directory:
     - `manifest.json`
     - `background.js`
     - `popup.html`
     - `popup.js`
     - `run.js`

2. **Open Chrome Extensions Page**
   - Open Google Chrome.
   - In the address bar, type `chrome://extensions/` and press Enter.

3. **Enable Developer Mode**
   - In the top right corner of the Extensions page, toggle the "Developer mode" switch to ON.

4. **Load Unpacked Extension**
   - Click on the "Load unpacked" button.
   - In the file dialog, navigate to the directory where you saved the extension files and select it.
   - The extension should now appear in your list of extensions.

## How to Use the Extension

1. **Log in to Quixel**
   - Open a new tab and go to [Quixel](https://quixel.com).
   - Log in to your account.

2. **Navigate to the Megascans Collections**
   - Go to [Megascans Collections](https://quixel.com/megascans/collections).

3. **Open Developer Tools**
   - Press `F12` or right-click on the page and select "Inspect" to open Developer Tools.
   - Go to the "Console" tab.

4. **Open the Extension Popup**
   - Click on the extension icon in the Chrome toolbar to open the popup.

5. **Set Parameters**
   - Enter the starting page number in the "Start Page" input field.
   - Check or uncheck the "Auto Clear Console" option based on your preference.

6. **Start Adding Items**
   - Click the "Start Adding Items" button.
   - A confirmation dialog will appear showing the total number of items to be added. Click "OK" to proceed.

7. **Monitor the Process**
   - The console will display logs for each page processed, including any errors or warnings for items that cannot be added.

## Common Issues
- **Authentication Token Error**: If you see an error about the authentication token, ensure you are logged in to Quixel and refresh the page.
- **Rate Limiting**: If you encounter a "Forbidden" error, you may have hit the API rate limit. Wait for a while before trying again.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Thanks to the Quixel team for providing the assets.
