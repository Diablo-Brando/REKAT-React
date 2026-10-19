import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '../hooks/useScrolled';
import { createRipple } from '../lib/ripple';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled();
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>Ovelia</Link>

        <nav className={`navbar__links ${isOpen ? 'is-open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/menu" onClick={closeMenu}>Explore Menu</NavLink>
          <Link to="/#order" onClick={closeMenu}>Special Events</Link>
          <Link to="/#find-us" onClick={closeMenu}>Find Us</Link>
          <Link to="/#order" className="btn btn--small navbar__cta-mobile" onClick={closeMenu} onMouseDown={createRipple}>Order Now</Link>
        </nav>

        <Link to="/#order" className="btn btn--small navbar__cta-desktop" onMouseDown={createRipple}>Order Now</Link>

        <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;