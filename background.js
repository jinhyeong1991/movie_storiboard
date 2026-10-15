// 확장 아이콘을 누르면 넓은 작업 화면(app.html)을 새 탭으로 엽니다.
chrome.action.onClicked.addListener(() => {
  const url = chrome.runtime.getURL("app.html");
  chrome.tabs.query({ url }, (tabs) => {
    if (tabs && tabs.length) {
      chrome.tabs.update(tabs[0].id, { active: true });
      chrome.windows.update(tabs[0].windowId, { focused: true });
    } else {
      chrome.tabs.create({ url });
    }
  });
});
