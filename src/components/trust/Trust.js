class Trust {
  rootNode

  constructor(rootSelector) {
    this.rootNode = document.querySelector(rootSelector);
  }

  render() {
    const html = `
    <div class="container">
      <div class="trust__text">The world's best companies trust Midnight</div>

      <div class="trust__logos">
        <img src="img/logo1.png" alt="logo-1" class="trust__logo">

        <img src="img/logo2.png" alt="logo-2" class="trust__logo">

        <img src="img/logo3.png" alt="logo-3" class="trust__logo">

        <img src="img/logo4.png" alt="logo-4" class="trust__logo">

        <img src="img/logo5.png" alt="logo-5" class="trust__logo">

        <img src="img/logo6.png" alt="logo-6" class="trust__logo">
      </div>
    </div>`

    this.rootNode.innerHTML = html;
  }
}

export default Trust;
