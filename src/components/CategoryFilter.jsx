import { useEffect, useRef, useState } from 'react';

function CategoryFilter({ categories, active, onSelect }) {
  const containerRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, top: 0, width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeButton = container.querySelector('.chip--active');
    if (activeButton) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setIndicator({
        left: buttonRect.left - containerRect.left,
        top: buttonRect.top - containerRect.top,
        width: buttonRect.width,
        height: buttonRect.height,
      });
    }
  }, [active]);

  return (
    <div className="category-filter" ref={containerRef}>
      <span
        className="category-filter__indicator"
        style={{
          transform: `translate(${indicator.left}px, ${indicator.top}px)`,
          width: `${indicator.width}px`,
          height: `${indicator.height}px`,
        }}
      />
      {categories.map((category) => (
        <button
          key={category}
          className={`chip ${active === category ? 'chip--active' : ''}`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;