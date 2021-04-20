import Navigation from "./navigation/Navigation";


class Header {
  rootNode

  constructor(rootSelector) {
    this.rootNode = document.querySelector(rootSelector)
  }

  render() {
    const html = `
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <a href="#"><img src="img/logo-white.jpg" alt="logo-white"></a>
        </div>
        
        <nav class="navigation header__navigation"></nav>

        <button class="button button--small header__button">
          BUY NOW
        </button>
      </div>
    </div> `;

    this.rootNode.innerHTML = html;

    this.initChild();
  }

  initChild() {
    const navigation = new Navigation('.navigation');

    navigation.render();
  }
}

export default Header;