/*
/ created by Aravind Singh Bisht
*/
function updateIcon(e){"dsc"==e?chrome.browserAction.setIcon({path:"desc.png"}):chrome.browserAction.setIcon({path:"asc.png"})}chrome.tabs.onUpdated.addListener(function(e,t,o){"complete"==o.status&&o.active&&chrome.tabs.executeScript(o.id,{file:"content_file.js"},function(){chrome.tabs.sendRequest(o.id,{},function(e){e&&updateIcon(e)}),chrome.runtime.lastError})}),chrome.browserAction.onClicked.addListener(function(e){chrome.tabs.sendMessage(e.id,{text:"sortFlowDockChat"},{},function(e){return e&&updateIcon(e),!0})});
