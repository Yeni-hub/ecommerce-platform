import { useMemo } from 'react';
import { products } from '../data/products';
import { useSearch } from './useSearch';
import type { Product } from '../types';

export function useFilteredProducts(): Product[] {
  const { searchTerm } = useSearch();

  return useMemo(() => {
    if (!searchTerm.trim()) return products;
    const term = searchTerm.toLowerCase();
    return products.filter(
      (p) => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)
    );
  }, [searchTerm]);
}

export function useProductsByCategory(category: string): Product[] {
  const filtered = useFilteredProducts();
  return useMemo(() => filtered.filter((p) => p.category === category), [filtered, category]);
}

export function useFeaturedProducts(): Product[] {
  return useProductsByCategory('featured');
}
