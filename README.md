# 🏪 PRIZO - Tienda Deportiva Online

E-commerce moderno desarrollado con **React 18**, **TypeScript**, **Vite** y **TailwindCSS**. Catálogo de productos deportivos con carrito de compras, favoritos, búsqueda en tiempo real y checkout totalmente funcional para portafolio.

## ✨ Funcionalidades

- **Catálogo**: Navegación por categorías (Hombre, Mujer, Deporte, Ofertas) con grid responsivo
- **Carrito de Compras**: Persistencia en localStorage, modificación de cantidades, eliminación por item
- **Favoritos**: Marcado de productos favoritos con persistencia
- **Búsqueda en Tiempo Real**: Filtrado instantáneo por nombre y descripción
- **Checkout**: Formulario de envío con validación, calendario de fechas y resumen de compra
- **Diseño Responsive**: Adaptado a móvil, tablet y escritorio con menú hamburguesa
- **Footer Completo**: Redes sociales, métodos de pago, datos de contacto y enlaces legales

## 🛠 Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| React | ^18.3.1 | UI basada en componentes |
| TypeScript | ^5.5.3 | Tipado estático |
| Vite | ^5.4.2 | Bundler y dev server |
| TailwindCSS | ^3.4.1 | Estilos utilitarios |
| Lucide React | ^0.344.0 | Iconografía SVG |
| ESLint | ^9.9.1 | Linting |

## 🏗 Arquitectura

```
src/
├── components/         # Componentes reutilizables (Header, Footer, ProductCard)
│   └── ui/             # Componentes de UI genéricos
├── context/            # StoreContext (estado global cart + favorites + search)
├── data/               # Catálogo de productos hardcodeado
├── hooks/              # Custom hooks (useProducts, useFilteredProducts)
├── pages/              # Páginas (HomePage, ProductsPage, CheckoutPage, ContactPage)
├── types/              # Interfaces compartidas (Product, CartItem, Page)
├── App.tsx             # Router condicional con StoreProvider
└── main.tsx            # Entry point
```

## 🚀 Instalación y Uso

```bash
# Clonar repositorio
git clone <repo-url>
cd prizo-ecommerce

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview

# Linting
npm run lint
```

## 📁 Variables de Entorno

No requiere variables de entorno. El catálogo de productos está hardcodeado en `src/data/products.ts`.

## 🔧 Mejoras Realizadas

- **Separación de responsabilidades**: Estado global extraído de App.tsx a StoreContext + custom hooks
- **Componentes reutilizables**: ProductCard soporta props `columns` para grid de 3 o 4 columnas
- **Tipado estricto**: Interfaces compartidas en `src/types/index.ts`
- **Rendimiento**: Lazy loading en imágenes (`loading="lazy"`), hover zoom con CSS transitions
- **Accesibilidad**: ARIA labels en botones, navegación por teclado
- **Estado vacío**: Mensajes informativos cuando el carrito o resultados de búsqueda están vacíos
- **Código legacy preservado**: Archivos estáticos originales en `legacy/`

## 👤 Autor

**Yennifer Padilla** — [@anomalyco](https://github.com/anomalyco)

---

_Proyecto de portafolio — Junio 2026_
