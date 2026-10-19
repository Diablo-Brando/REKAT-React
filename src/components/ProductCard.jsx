import { useTilt } from "../hooks/useTilt";

function ProductCard({ name, desc, price, badge, image }) {
  const tilt = useTilt();

  return (
    <article className="card" ref={tilt.ref} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}>
      <div className="card__media">
        {badge && <span className="card__badge">{badge}</span>}
        <img src={image} alt={name} />
      </div>

      <div className="card__body">
        <div className="card__row">
          <h3>{name}</h3>
          <span className="card__price">{price / 1000}k</span>
        </div>
        <p>{desc}</p>
      </div>
    </article>
  );
}

export default ProductCard;