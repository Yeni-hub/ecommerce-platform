import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import FeaturedProducts from './components/FeaturedProducts';
import CheckoutPage from './components/CheckoutPage';
import { products, Product } from './data/products';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState('INICIO');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load cart and favorites from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedFavorites = localStorage.getItem('favorites');
    
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save cart and favorites to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image
        }];
      }
    });
  };

  const handleToggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleCompletePurchase = () => {
    alert('¡Compra realizada con éxito! Gracias por tu compra.');
    setCart([]);
    setCurrentPage('INICIO');
  };

  const handleCartClick = () => {
    setCurrentPage('CHECKOUT');
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getProductsByCategory = (category: string) => {
    return filteredProducts.filter(product => product.category === category);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const renderPage = () => {
    switch (currentPage) {
      case 'INICIO':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'HOMBRE':
        return (
          <ProductsPage 
            title="HOMBRE"
            products={getProductsByCategory('hombre')}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
          />
        );
      case 'MUJER':
        return (
          <ProductsPage 
            title="MUJER"
            products={getProductsByCategory('mujer')}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
          />
        );
      case 'DEPORTE':
        return (
          <FeaturedProducts 
            products={getProductsByCategory('featured')}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
          />
        );
      case 'OFERTAS':
        return (
          <FeaturedProducts 
            products={filteredProducts.slice(0, 8)}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
          />
        );
      case 'CONTACTO':
        return (
          <div className="min-h-screen bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold mb-8">CONTACTO</h1>
              <p className="text-xl mb-4">¿Necesitas ayuda? Contáctanos</p>
              <div className="space-y-4">
                <p>Email: info@prizo.com</p>
                <p>Teléfono: +57 300 123 4567</p>
                <p>Dirección: Calle 123 #45-67, Medellín, Colombia</p>
              </div>
            </div>
          </div>
        );
      case 'CHECKOUT':
        return (
          <CheckoutPage 
            cartItems={cart}
            onCompletePurchase={handleCompletePurchase}
          />
        );
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Header 
        cartCount={cartCount}
        onCartClick={handleCartClick}
        onSearchChange={setSearchTerm}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      {renderPage()}
    </div>
  );
}

export default App;