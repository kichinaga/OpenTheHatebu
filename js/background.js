const hatebu = 'https://b.hatena.ne.jp/entry/s/';

chrome.browserAction.onClicked.addListener(function(tab) {
    let link = tab.url.replace(/https?:\/\//g, '');
    chrome.tabs.create({ "url": hatebu + link });
});