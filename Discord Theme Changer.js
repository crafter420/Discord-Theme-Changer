// ==UserScript==
// @name         Discord Theme Changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change the theme of Discord on a web browser
// @author       Crafter
// @match        *://*.discord.com/*
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
