import { useStore } from '../context/StoreContext';

export function useCart() {
  const { cart, cartCount, addToCart, removeFromCart, clearCart } = useStore();
  return { cart, cartCount, addToCart, removeFromCart, clearCart };
}
