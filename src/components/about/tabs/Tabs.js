class Tabs {
  rootNode
  tabNodes
  imageNodes

  get tabClass() {
    return "tabs__item";
  }

  get imageClass() {
    return "tabs__image";
  }

  get baseClass() {
    return "tabs__image--base";
  }

  get activationClass() {
    return "tabs--active";
  }

  get hiddenClass() {
    return "display-none";
  }

  constructor(rootSelector) {
    this.rootNode = document.querySelector(rootSelector);
  }

  init() {
    this.tabNodes = document.querySelectorAll(`.${this.tabClass}`);
    this.imageNodes = document.querySelectorAll(`.${this.imageClass}`);

    this.setupTabListeners();
    this.showImageForActiveTab();
  }

  render() {
    const html = `
            <div class="tabs__item tabs--active">
              <div class="tabs__title">Get your project running. Fast.</div>

              <div class="tabs__text">Just add your content to our professionally designed templates and
                you are ready to go.</div>
            </div>

            <div class="tabs__item">
              <div class="tabs__title">Professional design, affordable price.</div>

              <div class="tabs__text">We have been designing high-converting websites and helping
                startups grow since 2015. Get all the benefits for a tiny cost.</div>
            </div>

            <div class="tabs__item">
              <div class="tabs__title">All-around amazing performance.</div>

              <div class="tabs__text">Great design is your first impression, the foundation of your
                brand. See the results in your bottom line.</div>
            </div>

            <div class="tabs__item">
              <div class="tabs__title">Easy to use and customize.</div>

              <div class="tabs__text">Webflow's no-code editor is as easy as a doc and offers great
                tutorials for all your needs.</div>
            </div>`;

    this.rootNode.innerHTML = html;
  }

  setupTabListeners() {
    this.tabNodes.forEach((tabNode, index) => {
      tabNode.addEventListener('click', () => this.onTabClicked(tabNode, index));
    });
  }

  onTabClicked(tabNode, tabIndex) {
    if (tabNode.classList.contains(this.activationClass)) {
      return;
    }

    this.resetTabs();
    this.activateTab(tabNode, tabIndex);
  }

  resetTabs() {
    this.deactivateTabs(this.tabNodes);
    this.hideImages(this.imageNodes);
  }

  activateTab(tabNode, tabIndex) {
    tabNode.classList.add(this.activationClass);
    setTimeout(() => this.showImageForActiveTab(tabIndex), 150);
  }

  deactivateTabs() {
    this.tabNodes.forEach(tabNode => {
      tabNode.classList.remove(this.activationClass);
    });
  }

  hideImages() {
    this.imageNodes.forEach(item => {
      item.classList.add(this.baseClass);
      setTimeout(() => {
        item.classList.add(this.hiddenClass);
      }, 150);
    });
  }

  showImageForActiveTab(index = 0) {
    this.imageNodes[index].classList.remove(this.hiddenClass);
    setTimeout(() => {
      this.imageNodes[index].classList.remove(this.baseClass);
    }, 150);
  }
}

export default Tabs;