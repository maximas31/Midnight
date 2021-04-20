class Testimonial {
  rootNode

  constructor(rootSelector) {
    this.rootNode = document.querySelector(rootSelector);
  }

  render() {
    const html = `
    <div class="container">
      <div class="testimonial__wrapper">
        <div class="testimonial__video">
          <a href="#">
            <img src="icons/play-icon.svg" alt="play-icon" class="testimonial__play-button">
          </a>
          <img src="img/Testimonial_image-p-1080.jpeg" alt="testimonial-cover" class="testimonial__video-image">
        </div>
        <div class="testimonial__content">
          <div class="testimonial__text">
            "The best money I have spent in my life. I saw a 1200% increase in my conversion rates and
            doubled my revenue in just three hours”.
          </div>
          <div class="testimonial__author-wrapper">
            <div class="testimonial__author">
              <span>No One Ever</span><br>CEO & Founder
            </div>
            <div class="testimonial__logo">
              <img src="img/small_logo1.png" alt="small-logo1">
            </div>
          </div>
        </div>
      </div>
    </div>`

    this.rootNode.innerHTML = html;
  }
}

export default Testimonial;
