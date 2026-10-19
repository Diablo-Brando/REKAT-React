import { MessageCircle } from 'lucide-react';
import Reveal from './Reveals';
import { createRipple } from '../lib/ripple';
import { burstConfetti } from '../lib/confetti';

const PHONE_NUMBER = '6285720712498';
const MESSAGE = 'Halo Ovelia, saya mau pesan kue.';

function OrderCTA() {
  const waLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <section id="order" className="cta">
      <Reveal className="container cta__inner">
        <MessageCircle size={32} />
        <h2>Let's Get Your Order Started!</h2>
        <p>Skip the wait, just order directly via WhatsApp or visit our store for walk-in orders.</p>
        <a 
          href={waLink} 
          target="_blank"
          rel="noreferrer"
          className="btn btn--whatsapp"
          onMouseDown={createRipple}
          onClick={burstConfetti}>
          Order via WhatsApp
        </a>
      </Reveal>
    </section>
  );
}

export default OrderCTA;