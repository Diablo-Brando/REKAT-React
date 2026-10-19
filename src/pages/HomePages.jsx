import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SignatureBakes from '../components/SignatureBakes';
import FindUs from '../components/FindUs';
import OrderCTA from '../components/OrderCTA';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SignatureBakes />
        <FindUs />
        <OrderCTA />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;