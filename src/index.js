import GlobalAlert from "./components/global-alert/GlobalAlert";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Trust from "./components/trust/Trust";
import About from "./components/about/About";
import Testimonial from "./components/testimonial/Testimonial";
import GetStarted from "./components/get-started/GetStarted";
import Footer from "./components/footer/Footer";

document.addEventListener("DOMContentLoaded", () => {
  const alert = new GlobalAlert('.global-alert');
  const header = new Header('.header');
  const hero = new Hero('.hero');
  const trust = new Trust('.trust');
  const about = new About('.about');
  const testimonial = new Testimonial('.testimonial');
  const getStarted = new GetStarted('.get-started');
  const footer = new Footer('.footer');

  alert.render();
  alert.init();
  header.render();
  hero.render();
  trust.render();
  about.render();
  testimonial.render();
  getStarted.render();
  footer.render();
});