/**
 * Copyright (c) 2018 Eric H. Goldman
 * 
 * This file is part of Add URL To Window Title.
 * 
 * Add URL To Window Title is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Declare the base library for browser extensions in an opportunistic way to increase cross-browser compatibility
 * @see {@https://developer.chrome.com/docs/extensions/reference/api/runtime}
 * @see {@https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled}
 */
let platform = chrome;

if (!(typeof browser === "undefined" || browser === null)) {
  platform = browser;
}

/**
 * Run install/update checks or needed work
 * @see {@https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onInstalled} documentation for more information
 */
platform.runtime.onInstalled.addListener(function(details){
  
  if(details.reason == "install"){
    console.log("Installed, version: " + platform.runtime.getManifest().version);   
  }else if(details.reason == "update"){
    console.log("Updated from " + details.previousVersion + " to " + platform.runtime.getManifest().version + "!"); 
  }
  
});  


