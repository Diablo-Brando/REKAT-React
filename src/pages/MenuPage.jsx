import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveals';
import { useProducts } from '../hooks/useProducts';

const categories = ['All Items', 'Tiramisu', 'Cheesecake', 'Other'];

function MenuPage() {
  const { products, loading, error } = useProducts();
  const [activeCategory, setActiveCategory] = useState('All Items');

  const filteredProducts = activeCategory === 'All Items'
    ? products
    : products.filter((product) => product.category === activeCategory);

  return (
    <>
      <Navbar />
      <main>
        <section className="menu-hero">
          <div className="container">
            <h1>Our Menu</h1>
            <p>
              Discover our handcrafted selection of premium tiramisu and
              cheesecakes, baked fresh daily with love and the finest
              ingredients.
            </p>
          </div>
        </section>

        <section className="menu-list">
          <div className="container">
            <CategoryFilter
              categories={categories}
              active={activeCategory}
              onSelect={setActiveCategory}
            />

            {loading && <p className="status">Memuat menu...</p>}
            {error && <p className="status">Gagal memuat menu ({error}). Coba lagi nanti.</p>}

            {!loading && !error && (
              <div className="bakes__grid" key={activeCategory}>
                {filteredProducts.map((product, index) => (
                  <Reveal key={product.id} delay={(index % 3) * 100}>
                    <ProductCard {...product} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="menu-banner">
          <p>Baked with Love</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default MenuPage;