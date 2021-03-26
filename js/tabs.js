document.addEventListener("DOMContentLoaded", () => {
  const tabNodes = document.querySelectorAll('.tab');
  const imageNodes = document.querySelectorAll('.tab-image');

  setupTabListeners();
  showImageForActiveTab();

  function setupTabListeners() {
    tabNodes.forEach((tabNode, index) => {
      tabNode.addEventListener('click', () => onTabClicked(tabNode, index));
    });
  }

  function onTabClicked(tabNode, tabIndex) {
    if (tabNode.classList.contains('active')) {
      return;
    }

    resetTabs();
    activateTab(tabNode, tabIndex);
  }

  function resetTabs() {
    deactivateTabs(tabNodes);
    hideImages(imageNodes);
  }

  function activateTab(tabNode, tabIndex) {
    tabNode.classList.add('active');
    setTimeout(() => showImageForActiveTab(tabIndex), 150);
  }

  function deactivateTabs() {
    tabNodes.forEach(tabNode => {
      tabNode.classList.remove('active');
    });
  }

  function hideImages() {
    imageNodes.forEach(item => {
      item.classList.add('tab-image-hidden');
      setTimeout(() => {
        item.classList.add('tab-image-none');
      }, 150);
    });
  }

  function showImageForActiveTab(index = 0) {
    imageNodes[index].classList.remove('tab-image-none');
    setTimeout(() => {
      imageNodes[index].classList.remove('tab-image-hidden');
    }, 150);
  }
});