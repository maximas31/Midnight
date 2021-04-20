class GetStarted {
  rootNode

  constructor(rootSelector) {
    this.rootNode = document.querySelector(rootSelector);
  }

  render() {
    const html = `
    <div class="container">
      <div class="get-started__wrapper">
        <div class="get-started__content">
          <h2 class="get-started__title">Get Started</h2>
          <div class="get-started__text">Kickstart your next project and grow your revenue with this high-converting,
            beautifully crafted template.</div>
          <button class="button">BUY THIS TEMPLATE</button>
        </div>
        <div class="get-started__image">
          <img src="img/cta-image-p-800.png" alt="cta-image">
        </div>
      </div>
    </div>`;

    this.rootNode.innerHTML = html;
  }
}

export default GetStarted;
