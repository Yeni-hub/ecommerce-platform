import ProductCard from '../components/ProductCard';
import type { Product } from '../types';

interface ProductsPageProps {
  title: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (productId: string) => void;
  favorites: string[];
  columns?: 3 | 4;
  emptyMessage?: string;
}

export default function ProductsPage({
  title,
  products,
  onAddToCart,
  onToggleFavorite,
  favorites,
  columns = 3,
  emptyMessage = 'No se encontraron productos.',
}: ProductsPageProps) {
  return (
    <div className="min-h-screen bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            PRODUCTOS DEPORTIVOS
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500">
            {title}
          </h2>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">{emptyMessage}</p>
          </div>
        ) : (
          <div
            className={`grid gap-8 ${
              columns === 4
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
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
        )}
      </div>
    </div>
  );
}
