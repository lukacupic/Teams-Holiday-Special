document.getElementById("save-button").addEventListener("click", saveImageLink);

document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.sync.get(["imageLink"]).then((result) => {
    if (result.imageLink) {
      let imageLinkInput = document.getElementById("imageLink");
      imageLinkInput.value = result.imageLink;
    }
  });
});

function saveImageLink() {
  let imageLinkInput = document.getElementById("imageLink");
  let imageLink = imageLinkInput.value;

  chrome.storage.sync.set({ imageLink: imageLink }).then(() => {
    if (imageLink) {
      alert("Success! Please reload the page for the holiday effect.");
    } else {
      alert("You've left the URL empty! Will revert to the default image after page reload.");
    }
  });
}
