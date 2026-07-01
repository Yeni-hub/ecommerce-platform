import { useStore } from '../context/StoreContext';

export function useFavorites() {
  const { favorites, toggleFavorite } = useStore();
  return { favorites, toggleFavorite };
}
