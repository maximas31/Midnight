class GlobalAlert {
  rootNode
  closeButtonNode

  constructor(rootSelector) {
    this.rootNode = document.querySelector(rootSelector);
  }

  get hiddenClass() {
    return 'global-alert--hidden';
  }

  get closeButtonClass() {
    return 'global-alert__close';
  }

  init() {
    this.closeButtonNode = this.rootNode.querySelector(`.${this.closeButtonClass}`);
    this.closeButtonNode.addEventListener('click', () => this.hide());
  }

  hide() {
    this.rootNode.classList.add(this.hiddenClass);
  }

  render() {
    const html = `
      <div class="global-alert__container">
        <div class="global-alert__title">NEW</div>
        
        <div class="global-alert__text">Use this space to display important messages.</div>
        
        <div class="global-alert__close">x</div>
      </div>`;

    this.rootNode.innerHTML = html;
  }
}

export default GlobalAlert;