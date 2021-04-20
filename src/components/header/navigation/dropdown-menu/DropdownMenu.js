export class DropdownMenu {
  item

  menuNode
  dropdownNode
  timer

  constructor(item) {
    this.item = item;
  }

  get id() {
    return this.item.id;
  }

  get children() {
    return this.item.items || [];
  }

  get links() {
    return this.item.links || [];
  }

  get hiddenClass() {
    return "display-none";
  }

  get animationClass() {
    return "dropdown-menu__animation";
  }

  init() {
    this.menuNode = document.querySelector(`.navigation__item.item-${this.id}`);
    this.dropdownNode = document.querySelector(`.dropdown-menu.item-${this.id}`);

    if (!this.menuNode) {
      throw new Error(`Could not find the navigation item with id "${this.id}"`);
    }

    if (!this.dropdownNode) {
      throw new Error(`Could not find the dropdown item with id "${this.id}"`);
    }

    this.menuNode.addEventListener('mouseenter', () => this.showDropdownMenu());
    this.menuNode.addEventListener('mouseleave', () => this.hideDropdownMenu());
  }

  render() {
    return `
      <div class="dropdown-menu item-${this.id} ${this.hiddenClass} ${this.animationClass}">
        <div class="dropdown-menu__square"></div>

        <div class="dropdown-menu__content">
          ${this.renderChildren()}

          ${this.renderLinks()}
        </div>
      </div>
    `;
  }

  renderChildren() {
    return this.children.map((item, index) => this.renderDropdownChild(item.title, item.subtitle, item.icon, index)).join('');
  }

  renderDropdownChild(title, subtitle, icon, index) {
    return `
    <div class="dropdown-menu__item dropdown-menu__item-${index + 1}">
      <div class="dropdown-menu__icon">
        <img src="icons/${icon}" alt="${title}">
      </div>

      <div class="dropdown-menu__text">
        <div class="dropdown-menu__title">${title}</div>
        
        <div class="dropdown-menu__subtitle">${subtitle}</div>
      </div>
    </div>
    `;
  }

  renderLinks() {
    if (!this.links.length) {
      return '';
    }

    return `
      <div class="dropdown-menu__links-container">
        ${this.links.map(link => this.renderLink(link)).join('')}
      </div>
    `;
  }

  renderLink(link) {
    return `<a href="${link.to}">${link.text}</a>`;
  }

  showDropdownMenu() {
    clearTimeout(this.timer);

    this.dropdownNode.classList.remove(this.hiddenClass);
    this.timer = setTimeout(() => this.dropdownNode.classList.remove(this.animationClass), 10);
  }

  hideDropdownMenu() {
    this.dropdownNode.classList.add(this.animationClass);
    this.dropdownNode.classList.add(this.hiddenClass);
  }
}
