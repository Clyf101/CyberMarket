const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;
const showInstallButton = () => {
  butInstall.style.display = 'block';
};

// Event handler for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallButton();
});

// Click event handler for the Install button
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('PWA installation accepted');
    } else {
      console.log('PWA installation rejected');
    }
    deferredPrompt = null;
  }
  butInstall.style.display = 'none';
});

// Event handler for appinstalled event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed');
});
