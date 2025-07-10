import React from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const categories = [
    {
      title: 'FÚTBOL',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=500',
      className: 'col-span-1 row-span-1'
    },
    {
      title: 'NATACIÓN',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=500',
      className: 'col-span-1 row-span-1'
    },
    {
      title: 'FITNESS',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=500',
      className: 'col-span-1 row-span-1'
    },
    {
      title: 'YOGA',
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=500',
      className: 'col-span-1 row-span-1'
    },
    {
      title: 'CICLISMO',
      image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=500',
      className: 'col-span-1 row-span-1'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ENCUENTRA UNA GRAN VARIEDAD DE PRODUCTOS CON
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-12">
          NUESTRAS CATEGORÍAS DESTACADAS
        </h2>

        {/* Categories Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg hover:transform hover:scale-105 transition-all duration-300"
                onClick={() => onNavigate('DEPORTE')}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold tracking-wide">
                    {category.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mayorista Section */}
      <section className="py-16 bg-cover bg-center relative" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">¿QUIERES SER MAYORISTA?</h2>
              <p className="text-lg mb-6 text-gray-200">
                En Deportes Regal encontrarás los productos deportivos en Medellín y otras 
                ciudades como Bogotá, Cali, Barranquilla, Bucaramanga o Cartagena. Conoce 
                todo lo que tenemos para nuestros distribuidores mayoristas como tú.
              </p>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-800 transition-colors">
                Regístrate ahora
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 bg-opacity-80 p-6 rounded-lg text-center">
                <span className="text-sm text-gray-300">desde</span>
                <div className="text-2xl font-bold">$400.000</div>
                <div className="text-sm">de inversión</div>
              </div>
              <div className="bg-gray-700 bg-opacity-80 p-6 rounded-lg text-center">
                <span className="text-sm text-gray-300">Registro</span>
                <div className="text-xl font-bold">fácil y rápido</div>
              </div>
              <div className="bg-orange-500 p-6 rounded-lg text-center col-span-2">
                <span className="text-sm">Grandes</span>
                <div className="text-xl font-bold">Descuentos</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;