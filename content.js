function changeBackgroundImage(messagePane) {
  chrome.storage.sync.get(["imageLink"]).then((result) => {
    if (result.imageLink) {
      messagePane.style.backgroundImage = "url('" + result.imageLink + "')";
    } else {
      messagePane.style.backgroundImage =
        "url('https://www.wallpapers13.com/wp-content/uploads/2020/12/Christmas-night-village-in-snowy-Christmas-Wallpaper-HD-1366x768.jpg')";
    }
  });
}

function startWhenReady() {
  let observer = new MutationObserver(function (mutations, observer) {
    let messagePane = document.querySelector('[data-tid="message-pane-layout"]');

    if (messagePane != null) {
      changeBackgroundImage(messagePane);
      // observer.disconnect();
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}

startWhenReady();
