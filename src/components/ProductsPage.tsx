import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductsPageProps {
  title: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (productId: string) => void;
  favorites: string[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ 
  title, 
  products, 
  onAddToCart, 
  onToggleFavorite, 
  favorites 
}) => {
  return (
    <div className="min-h-screen bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            PRODUCTOS DEPORTIVOS
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favorites.includes(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;