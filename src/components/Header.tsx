import React from 'react';
import { ShoppingCart, Search, Heart } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearchChange: (term: string) => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartCount, 
  onCartClick, 
  onSearchChange, 
  currentPage, 
  onNavigate 
}) => {
  return (
    <header className="bg-orange-500 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-orange-500 font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold">PRIZO</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['INICIO', 'HOMBRE', 'MUJER', 'DEPORTE', 'OFERTAS', 'CONTACTO'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`hover:text-orange-200 transition-colors ${
                  currentPage === item ? 'border-b-2 border-white' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar Producto"
                className="bg-white text-gray-800 px-4 py-2 rounded-md pr-10 w-64"
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button
              onClick={onCartClick}
              className="relative hover:text-orange-200 transition-colors"
            >
              <ShoppingCart className="h-8 w-8" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;