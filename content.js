// Function to remove the blocker elements
function removeBlockers() {
  // Remove modals with the specific class name
  document
    .querySelectorAll('.nf-modal.interstitial-full-screen')
    .forEach((el) => el.remove());

  // Additionally, remove any element that contains the blocker text
  const blockerXpath =
    "//*[contains(text(), 'Your device is not part of the Netflix Household')]";
  const blockerElem = document.evaluate(
    blockerXpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
  if (blockerElem) {
    blockerElem.remove();
  }
}

// Function to enable the video controls
function enableVideoControls() {
  const video = document.querySelector('video');
  if (video) {
    video.controls = true;
  }
}

// Run the functions once the page fully loads
window.addEventListener('load', () => {
  removeBlockers();
  enableVideoControls();
});

// Also observe DOM changes in case blockers are injected later
const observer = new MutationObserver(() => {
  removeBlockers();
  enableVideoControls();
});
observer.observe(document.body, { childList: true, subtree: true });
