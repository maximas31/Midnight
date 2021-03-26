document.addEventListener("DOMContentLoaded", () => {
  const menuNodes = document.querySelectorAll('.nav-elem');
  const dropdownNodes = document.querySelectorAll('.dropdown-menu');

  setupDropdownListeners();

  function setupDropdownListeners() {
    menuNodes.forEach((menuNode, menuIndex) => {
      menuNode.addEventListener('mouseenter', () => {showDropdownMenu(menuIndex);});
      menuNode.addEventListener('mouseleave', () => {hideDropdownMenu(menuIndex);});
    });
  }
  
  function showDropdownMenu(menuIndex) {
    if (dropdownNodes[menuIndex]) {
      dropdownNodes[menuIndex].classList.remove('dropdown-display-none');
      setTimeout(() => dropdownNodes[menuIndex].classList.remove('dropdown-animation'), 10);
    }
  }

  function hideDropdownMenu(menuIndex) {
    if (dropdownNodes[menuIndex]) {
      dropdownNodes[menuIndex].classList.add('dropdown-animation');
      dropdownNodes[menuIndex].classList.add('dropdown-display-none');
    }
  }
});