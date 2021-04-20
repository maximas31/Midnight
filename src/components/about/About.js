import Tabs from "./tabs/Tabs";
import Parallax from "./parallax/Parallax";

class About {
  rootNode

  constructor(rootSelector) {
    this.rootNode = document.querySelector(rootSelector);
  }

  render() {
    const html = `
    <div class="container">
      <div class="about__one">
        <div class="about__content">
          <div class="about__headings">
            <h3 class="about__heading">Midnight can help you</h3>

            <div class="about__subheading">Midnight cuts the time and cost it takes to build an
              effective and beautiful website.</div>
          </div>

          <div class="tabs about__tabs">
          
          </div>

          <button class="button about__button">BUY THIS TEMPLATE</button>
        </div>

        <div class="about__image">
          <img src="img/Iphone_1-p-500.png" alt="phone-1" class="tabs__image display-none tabs__image--hidden">

          <img src="img/Iphone_2-p-500.png" alt="phone-2" class="tabs__image display-none tabs__image--hidden">

          <img src="img/Iphone_3-p-500.png" alt="phone-3" class="tabs__image display-none tabs__image--hidden">

          <img src="img/Iphone_4-p-500.png" alt="phone-4" class="tabs__image display-none tabs__image--hidden">
        </div>
      </div>

      <div class="about__parallax-container">
        <div class="about__two">
          <div class="about__image">
            <img src="icons/gray-background.svg" alt="gray-background" class="about__background-img-1"
              data-parallax="1.9">

            <img src="icons/blue-background.svg" alt="blue-background" class="about__background-img-2"
              data-parallax="2.5">

            <img src="icons/Image_1.svg" alt="image-1" class="about__primary-img-1" data-parallax="-4">
          </div>

          <div class="about__content">
            <h3>High-converting, high-performing.</h3>

            <ul>
              <li><img src="img/checkmark.png" alt="checkmark">
                <div>Convert traffic into quality leads and sales</div>
              </li>

              <li>
                <img src="img/checkmark.png" alt="checkmark">
                <div>The fastest loading speed</div>
              </li>

              <li>
                <img src="img/checkmark.png" alt="checkmark">
                <div>Integrates with all your favorite tools</div>
              </li>

              <li>
                <img src="img/checkmark.png" alt="checkmark">
                <div>100% money back guarantee</div>
              </li>
            </ul>

            <button class="button about__button">BUY NOW</button>

            <hr>

            <div class="about__testimonial-small">
              <img src="img/small_logo3.png" alt="small-logo3" class="about__testimonial-small-logo">

              <div class="about__testimonial-small-text">“Midnight was our first template. It was without doubt
                the
                main factor to our success."
                <br><br><span>Philip Wink,</span> CEO & Founder</div>
            </div>
          </div>
        </div>

        <div class="about__three">
          <div class="about__content">
            <h3>Impress your visitors with a clean interface.</h3>

            <ul>
              <li><img src="img/checkmark.png" alt="checkmark">
                <div>Modern and polished layouts</div>
              </li>

              <li>
                <img src="img/checkmark.png" alt="checkmark">
                <div>Carefully selected, open source fonts</div>
              </li>

              <li>
                <img src="img/checkmark.png" alt="checkmark">
                <div>Mobile responsive</div>
              </li>

              <li>
                <img src="img/checkmark.png" alt="checkmark">
                <div>Done-for-you setup and custom assets</div>
              </li>
            </ul>

            <button class="button about__button">BUY NOW</button>

            <hr>

            <div class="about__testimonial-small">
              <img src="img/small_logo2.png" alt="small-logo2" class="about__testimonial-small-logo">

              <div class="about__testimonial-small-text">“Midnight is the template all startups need.
                High-converting, fast, and beautiful”.
                <br><br><span>Eric Tunner,</span> CEO & Founder</div>
            </div>
          </div>

          <div class="about__image">
            <img src="icons/Image_2.svg" alt="image-2" class="about__primary-img-2" data-parallax="-4">

            <img src="icons/gray-background.svg" alt="gray-background" class="about__background-img-3"
              data-parallax="3">

            <img src="icons/blue-background.svg" alt="blue-background" class="about__background-img-4"
              data-parallax="2">
          </div>
        </div>
      </div>
    </div>`;

    this.rootNode.innerHTML = html;

    this.initChild();
  }

  initChild() {
      const tabs = new Tabs('.tabs');
      const parallax = new Parallax('.about__parallax-container');

      tabs.render();
      tabs.init();
      parallax.init();
  }
}

export default About;