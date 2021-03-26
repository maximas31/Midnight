document.addEventListener("DOMContentLoaded", () => {
  const parallaxContainer = document.querySelector('.about-parallax-container');
  const parallaxImgArr = [
    ['.primary-img-1', -4],
    ['.primary-img-2', -4],
    ['.background-img-1', 1.9],
    ['.background-img-2', 2.5],
    ['.background-img-3', 3],
    ['.background-img-4', 2],
  ];

  observeElementOnViewport(parallaxContainer);

  function observeElementOnViewport(target) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setupParallaxListeners(entry);
      });
    }, {
      threshold: 0
    });

    observer.observe(target);
  }

  function setupParallaxListeners(entry) {
    if (entry.isIntersecting) {
      window.addEventListener('scroll', changeImagePosition);
    } else {
      window.removeEventListener('scroll', changeImagePosition);
    }
  }

  function changeImagePosition() {
    parallaxImgArr.forEach(image => {
      let imgPos = (window.pageYOffset / image[1]) + 'px';
      document.querySelector(image[0]).style.cssText = `transform: translateY(${imgPos});`;
    });
  }
});