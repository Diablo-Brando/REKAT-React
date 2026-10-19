import ProductCard from './ProductCard';
import Reveal from './Reveals';
import { products } from '../data/products';

function SignatureBakes() {
  return (
    <section id="catalog" className="bakes section-screen">
      <div className="container">
        <h2>Our Signature Bakes</h2>
        <p className="bakes__sub">Handcrafted daily. Discover your new favorite treat.</p>
          <div className="bakes__grid">
            {products.map((product, index) => (
              <Reveal key={product.id} delay={index * 120}>
                <ProductCard {...product} />
              </Reveal>
            ))}
          </div>
      </div>
    </section>
  );
}

export default SignatureBakes;