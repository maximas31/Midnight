class GetEmail {
  rootNode

  constructor(rootSelector) {
    this.rootNode = document.querySelector(rootSelector);
  }

  render() {
    const html = `
    <div class="get-email__subheading">WE CAN HELP YOU GROW YOUR BUSINESS</div>

    <h2 class="get-email__heading">Stay updated on our weekly sales and marketing guides.</h2>

    <form>
      <div class="get-email__text">EMAIL ADDRESS:</div>

      <div class="get-email__input-wrapper">
        <input type="email" class="get-email__input">
        <input type="submit" class="get-email__submit" value="">
      </div>
    </form>`;

    this.rootNode.innerHTML = html;
  }
}

export default GetEmail;