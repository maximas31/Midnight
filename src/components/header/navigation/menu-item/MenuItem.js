export class MenuItem {
  item

  constructor(item) {
    this.item = item;
  }

  get children() {
    return this.item.items || [];
  }

  render(children) {
    return `
      <div class="navigation__item item-${this.item.id}">
        <div>${this.item.name}</div>

        ${this.renderIcon()}

        ${children}
      </div>
    `;
  }

  renderIcon() {
    if (!this.children.length) {
      return '';
    }

    return `
      <div class="navigation__icon">
        <img src="img/dropdown-arrow.png" alt="nav-icon">
      </div>
    `;
  }
}
