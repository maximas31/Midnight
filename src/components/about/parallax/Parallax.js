class Parallax {
  parallaxContainer
  parallaxImages = []

  constructor(containerSelector) {
    this.parallaxContainer = document.querySelector(containerSelector);
  }

  init() {
    this.getAllParallaxImages();
    this.observeElementOnViewport();
  }

  observeElementOnViewport() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => this.toggleScrollEvent(entry.isIntersecting));
    }, {
      threshold: 0
    });

    observer.observe(this.parallaxContainer);
  }

  toggleScrollEvent(shouldScroll) {
    if (shouldScroll) {
      window.addEventListener('scroll', this.changeImagePosition);
    } else {
      window.removeEventListener('scroll', this.changeImagePosition);
    }
  }

  changeImagePosition = () => {
    this.parallaxImages.forEach(image => {
      let imgPos = (window.pageYOffset / image[1]) + 'px';
      image[0].style.cssText = `transform: translateY(${imgPos});`;
    });
  }

  getAllParallaxImages() {
    this.parallaxContainer.querySelectorAll('[data-parallax]').forEach(parallaxNode => {
      this.parallaxImages.push([
        document.querySelector(`.${parallaxNode.className}`),
        Number(parallaxNode.getAttribute('data-parallax'))
      ]);
    })
  }
}

export default Parallax;