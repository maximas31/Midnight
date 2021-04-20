import { MenuItem } from "./menu-item";
import { DropdownMenu } from "./dropdown-menu";

class Navigation {
  rootNode

  dropdownMenus = []

  constructor(rootSelector) {
    this.rootNode = document.querySelector(rootSelector)
  }

  get navigationItems() {
    return [
      {
        id: "product",
        name: "Product",
        items: [
          {
            icon: "home.svg",
            title: "Homepage",
            subtitle: "Get to know Midnight Theme"
          }, 
          {
            icon: "faq.svg",
            title: "How It Works",
            subtitle: "Learn how Midnight can help"
          },
          {
            icon: "price.svg",
            title: "Pricing & FAQ",
            subtitle: "Find the right plan for you"
          },
          {
            icon: "contact.svg",
            title: "Contact",
            subtitle: "Get in touch with our team"
          },
        ]
      },
      {
        id: "company",
        name: "Company",
        items: [
          {
            icon: "group.svg",
            title: "About us",
            subtitle: "Get to know our team and mission"
          }, 
          {
            icon: "blog.svg",
            title: "Blog",
            subtitle: "Read our amazing articles"
          }
        ],
        links: [
          {
            text: "Privacy Policy",
            to: "https://google.com"
          },
          {
            text: "Terms of Service",
            to: "https://google.com"
          }
        ]
      },
      {
        id: "blog",
        name: "Blog",
        items: []
      },
      {
        id: "contact",
        name: "Contact",
        items: []
      }
    ]
  }
  
  render() {
    this.rootNode.innerHTML = this.renderNavigationItems();

    this.initChild();
  }

  renderNavigationItems() {
    return this.navigationItems.map(item => new MenuItem(item).render(
      this.renderDropdown(item)
    )).join("");
  }

  renderDropdown(menuItem) {
    if (!this.hasChildren(menuItem)) {
      return '';
    }

    const item = new DropdownMenu(menuItem);

    this.dropdownMenus.push(item);

    return item.render();
  }

  hasChildren(item) {
    return item.items.length;
  }

  initChild() {
    this.dropdownMenus.forEach(item => item.init());
  }
}

export default Navigation;