import { Award, UtensilsCrossed, Tag } from 'lucide-react';
import Reveal from './Reveals';

const features = [
  { id: 1, Icon: Award, title: 'Premium Ingredients', text: 'Crafted with the finest imported mascarpone and artisanal cocoa.' },
  { id: 2, Icon: UtensilsCrossed, title: 'Cafe Quality Taste', text: 'Authentic recipes that bring the cafe experience to your home.' },
  { id: 3, Icon: Tag, title: 'Real Good Price', text: 'Affordable prices without compromising on flavor or quality.' },
];

function Features() {
  return (
    <section className="features">
      <div className="container features__grid">
        {features.map(({ id, Icon, title, text }, index) => (
          <Reveal key={id} className="feature" delay={index * 120}>
            <Icon size={28} />
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Features;