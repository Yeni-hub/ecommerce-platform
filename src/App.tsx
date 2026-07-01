import { useState, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import { StoreProvider, useStore } from './context/StoreContext';
import { useFilteredProducts, useProductsByCategory } from './hooks';
import type { Page } from './types';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('INICIO');
  const { cart, cartCount, addToCart, toggleFavorite, favorites, clearCart, setSearchTerm } = useStore();
  const filteredProducts = useFilteredProducts();
  const menProducts = useProductsByCategory('hombre');
  const womenProducts = useProductsByCategory('mujer');

  const handleCompletePurchase = () => {
    clearCart();
    setCurrentPage('INICIO');
  };

  const pageProps = useMemo(
    () => ({
      onAddToCart: addToCart,
      onToggleFavorite: toggleFavorite,
      favorites,
    }),
    [addToCart, toggleFavorite, favorites]
  );

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <Header
        cartCount={cartCount}
        onCartClick={() => setCurrentPage('CHECKOUT')}
        onSearchChange={setSearchTerm}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      <main className="flex-1">
        {currentPage === 'INICIO' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'HOMBRE' && (
          <ProductsPage title="HOMBRE" products={menProducts} {...pageProps} emptyMessage="No hay productos de hombre disponibles." />
        )}
        {currentPage === 'MUJER' && (
          <ProductsPage title="MUJER" products={womenProducts} {...pageProps} emptyMessage="No hay productos de mujer disponibles." />
        )}
        {currentPage === 'DEPORTE' && (
          <ProductsPage title="PRODUCTOS DESTACADOS" products={filteredProducts.slice(0, 8)} {...pageProps} columns={4} />
        )}
        {currentPage === 'OFERTAS' && (
          <ProductsPage title="OFERTAS" products={filteredProducts.slice(0, 8)} {...pageProps} columns={4} />
        )}
        {currentPage === 'CONTACTO' && <ContactPage />}
        {currentPage === 'CHECKOUT' && (
          <CheckoutPage cartItems={cart} onCompletePurchase={handleCompletePurchase} />
        )}
      </main>
      {currentPage !== 'CHECKOUT' && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}
