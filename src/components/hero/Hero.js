class Hero {
  rootNode

  constructor(rootSelector) {
    this.rootNode = document.querySelector(rootSelector);
  }

  render() {
    const html = `
    <div class="container">
      <h1 class="hero__title">Midnight is a high-converting template for startups.</h1>

      <div class="hero__subtitle">
        Kickstart your next project and grow your revenue with this high-performing, 
        beautifully crafted template.
      </div>

      <div class="hero__buttons">

      <button class="button">BUY THIS TEMPLATE</button>

      <button class="button button--secondary">LEARN MORE</button>
      </div>
    </div>`;

    this.rootNode.innerHTML = html;
  }
}

export default Hero;