export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  // Featured Products
  {
    id: '1',
    name: 'Adaptación Polea Recta SportFitness 071126',
    description: 'Adaptación de polea recta para ejercicios de entrenamiento funcional',
    price: 119900,
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'featured'
  },
  {
    id: '2',
    name: 'Balaca Everlast',
    description: 'Balaca deportiva Everlast para entrenamientos intensos',
    price: 15000,
    image: 'https://images.pexels.com/photos/6740819/pexels-photo-6740819.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'featured'
  },
  {
    id: '3',
    name: 'Balón Baloncesto Golty Super Team N7',
    description: 'Balón oficial de baloncesto Golty Super Team número 7',
    price: 71900,
    image: 'https://images.pexels.com/photos/1544775/pexels-photo-1544775.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'featured'
  },
  {
    id: '4',
    name: 'Adaptación Lazo Triceps Tipo SportFitness 071631',
    description: 'Adaptación de lazo para triceps, ideal para ejercicios de brazo',
    price: 22800,
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'featured'
  },

  // Women's Products
  {
    id: '5',
    name: 'Guantes Deportivos GripFit',
    description: 'Guantes sin dedos para entrenamiento funcional, con diseño ergonómico y acolchado antideslizante',
    price: 33000,
    image: 'https://images.pexels.com/photos/4162552/pexels-photo-4162552.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'mujer'
  },
  {
    id: '6',
    name: 'Top Deportivo Essential Black',
    description: 'Top deportivo de alto soporte en color negro con tirantes delgados, ideal para entrenamientos de alta intensidad',
    price: 119900,
    image: 'https://images.pexels.com/photos/6740819/pexels-photo-6740819.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'mujer'
  },
  {
    id: '7',
    name: 'Bolso de Gimnasio UrbanStyle',
    description: 'Bolso deportivo negro con detalles blancos y bolsillos exteriores con cremallera, espacioso y con un diseño moderno',
    price: 150900,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'mujer'
  },
  {
    id: '8',
    name: 'Falda Deportiva Tennis Chic',
    description: 'Outfit tipo uniforme deportivo blanco con transparencias y falda plisada a rayas, compuesta por blusa con transparencias y falda-short',
    price: 89900,
    image: 'https://images.pexels.com/photos/6740747/pexels-photo-6740747.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'mujer'
  },
  {
    id: '9',
    name: 'Medias de Yoga BareFlex',
    description: 'Medias tipo calcetín con diseño antideslizante y abertura lateral y alemana para yoga, pilates o danza',
    price: 85900,
    image: 'https://images.pexels.com/photos/6740726/pexels-photo-6740726.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'mujer'
  },
  {
    id: '10',
    name: 'Conjunto Deportivo WhiteMotion',
    description: 'Conjunto deportivo color blanco con falda-short y top y falda-short. Combinación de estilo y funcionalidad para entrenar',
    price: 145900,
    image: 'https://images.pexels.com/photos/6740812/pexels-photo-6740812.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'mujer'
  },

  // Men's Products
  {
    id: '11',
    name: 'Camiseta Sin Mangas Performance White',
    description: 'Camiseta deportiva sin mangas en color blanco con logo frontal',
    price: 129900,
    image: 'https://images.pexels.com/photos/6740758/pexels-photo-6740758.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'hombre'
  },
  {
    id: '12',
    name: 'Banda Elástica de Resistencia ProBand',
    description: 'Banda elástica ajustable para piernas con diseño de rayas negras y amarillas para ejercicios de fuerza',
    price: 83000,
    image: 'https://images.pexels.com/photos/4162552/pexels-photo-4162552.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'hombre'
  },
  {
    id: '13',
    name: 'Leggings Compresivos PowerFit Gris',
    description: 'Leggings deportivos ajustados con tecnología de compresión para un mejor rendimiento y recuperación',
    price: 79900,
    image: 'https://images.pexels.com/photos/6740774/pexels-photo-6740774.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'hombre'
  },
  {
    id: '14',
    name: 'Camiseta Sin Mangas Urban Hoodie',
    description: 'Camiseta sin mangas tipo hoodie con capucha integrada',
    price: 119900,
    image: 'https://images.pexels.com/photos/6740819/pexels-photo-6740819.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'hombre'
  },
  {
    id: '15',
    name: 'Bolso Deportivo CoreGear Gris/Amarillo',
    description: 'Maletín de gimnasio con diseño robusto en tonos gris oscuro y amarillo',
    price: 190900,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'hombre'
  }
];