import GetEmail from "./get-email/GetEmail";

class Footer {
  rootNode

  constructor(rootSelector) {
    this.rootNode = document.querySelector(rootSelector);
  }

  get menuSections() {
    return [
      ["PRODUCT", ["Home", "How it works", "Pricing & FAQs"]],
      ["RESOURCES", ["Blog", "Contact", "Licensing"]],
      ["COMPANY", ["About us", "Privacy Policy", "Terms of Service"]]
    ]
  }

  render() {
    const html = `
      <div class="container">
        <section class="get-email"></section>

        <hr noshade class="footer__divider">

        <section class="footer__bottom">
          <div>
            <img src="img/logo-footer.jpg" alt="logo-footer" class="footer__logo">

            <div class="footer__credits">Designed and developed by <a href="">Flowyak</a> |<br>Powered by <a
                href="">Webflow</a></div>
            <div class="footer__social-icons">
              <a href="#"><img src="img/facebook.png" alt="facebook" class="footer__social-icon"></a>

              <a href="#"><img src="img/instagram.png" alt="instagram" class="footer__social-icon"></a>

              <a href="#"><img src="img/twitter.png" alt="twitter" class="footer__social-icon"></a>
            </div>
          </div>

          ${this.renderSections()}
        </section>
      </div>`;

    this.rootNode.innerHTML = html;

    this.initChild();
  }

  renderSections() {
    return this.menuSections.map(item => this.renderMenuSection(item[0], item[1])).join('');
  }

  renderMenuSection(title, items) {
    return `
      <div>
        <div class="footer__title">${title}</div>

        ${items.map(item => `<a class="footer__link" href="#">${item}</a>`).join('')}
      </div>
      `;
  }

  initChild() {
    new GetEmail('.get-email').render();
  }
}

export default Footer;