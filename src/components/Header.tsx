import { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearchChange: (term: string) => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const NAV_ITEMS = ['INICIO', 'HOMBRE', 'MUJER', 'DEPORTE', 'OFERTAS', 'CONTACTO'];

export default function Header({ cartCount, onCartClick, onSearchChange, currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-orange-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            className="md:hidden p-2 hover:bg-orange-600 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-orange-500 font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold">PRIZO</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/20 ${
                  currentPage === item ? 'bg-white/25 font-bold' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-white/20 text-white placeholder-white/70 pl-4 pr-10 py-2 rounded-lg text-sm w-40 lg:w-56 focus:outline-none focus:ring-2 focus:ring-white/30"
                onChange={(e) => onSearchChange(e.target.value)}
                aria-label="Buscar productos"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-white/70" />
            </div>

            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-orange-600 rounded-lg transition-colors"
              aria-label="Carrito de compras"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-orange-600 border-t border-orange-400">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <div className="sm:hidden mb-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full bg-white/20 text-white placeholder-white/70 pl-4 pr-10 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                  onChange={(e) => onSearchChange(e.target.value)}
                  aria-label="Buscar productos"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-white/70" />
              </div>
            </div>
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/20 ${
                  currentPage === item ? 'bg-white/25 font-bold' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
