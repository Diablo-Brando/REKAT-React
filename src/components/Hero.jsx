import { createRipple } from '../lib/ripple';

function Hero() {
  return (
    <section id="home" className="hero section-screen">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">OVELIA BAKES</p>
          <h1>Baked with Love, Perfect for Every Vibe.</h1>
          <p className="hero__desc">
            Premium cafe-quality taste, affordable price. Indulge in our
            signature Tiramisu and Basque Burnt Cheesecake.
          </p>
          <a href="#catalog" className="btn" onMouseDown={createRipple}>Explore Our Catalog</a>
        </div>

        <div className="hero__gallery">
          <img className="hero__img--main" src="/images/tiramisu hero.jpg" alt="Tiramisu" />
          <img src="/images/basqueburnt.jpg" alt="Basque burnt cheesecake" />
          <img src="/images/lotuff.jpg" alt="Tiramisu cup" />
        </div>
      </div>
    </section>
  );
}

export default Hero;