document.addEventListener("DOMContentLoaded", () => {
  const topbar = document.querySelector('.topbar');
  const topbarCloseButton = document.querySelector('.topbar-close');

  setupTopbarListener();
  
  function setupTopbarListener() {
    topbarCloseButton.addEventListener('click', hideTopbar);
  }

  function hideTopbar() {
    topbar.classList.add('topbar-hide');
  }
});