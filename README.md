# Discord-Theme-Changer
Change the theme of Discord on a web browser by using an userscript manager.
This is a custom theme for Discord that changes the look and feel of the app.

Installation

    Install a script manager like Violentmonkey for your browser.

    Create a new script and paste the following code:

// ==UserScript==
// @name         Discord Theme Changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change the theme of Discord on a web browser
// @author       Crafter
// @match        https://discord.com/channels/@me
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your CSS code for the theme goes here
    var css = `
        /* Put your theme CSS here */
    `;

    // Create a new style element
    var style = document.createElement("style");

    // Add the CSS code to the style element
    style.innerHTML = css;

    // Append the style element to the head of the document
    document.head.appendChild(style);
})();

    Replace /* Put your theme CSS here */ with your CSS code for the theme.

    Save the script and reload Discord in your browser. The theme should now be applied.

Usage

Once the theme is installed, it will change the look and feel of Discord on your browser.
Notes

    Keep in mind that this is a third-party theme and there's no guarantee that it will work or that it won't cause any issues. Use it at your own risk.
    The theme will only affect the way Discord looks on your browser and will not affect the way it looks for other users.
    The changes will be lost when you close the browser.
    If you want to apply the theme permanently you have to host the css file and change the link of the css file in the script.

License

This theme is released under the MIT License or any other open source license you prefer.

It's important to note that the theme used in this example is not an official theme and there's no guarantee that it will work, or that it won't cause any issues. Always be careful when installing third-party scripts, and make sure to read the instructions and documentation carefully.
