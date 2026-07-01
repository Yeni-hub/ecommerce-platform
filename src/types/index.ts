export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export type Page = 'INICIO' | 'HOMBRE' | 'MUJER' | 'DEPORTE' | 'OFERTAS' | 'CONTACTO' | 'CHECKOUT';
