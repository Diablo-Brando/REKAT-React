import { useEffect, useState } from 'react';
import { menuProducts } from '../data/menuProducts';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      
      const localData = localStorage.getItem('products');
      const dataToUse = localData ? JSON.parse(localData) : menuProducts;

      setProducts(dataToUse);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { products, loading, error };
}