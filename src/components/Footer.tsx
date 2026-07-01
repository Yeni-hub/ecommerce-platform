const footerLinks = [
  {
    title: 'Información',
    links: [
      { label: 'Sobre Nosotros', href: '#' },
      { label: 'Términos y Condiciones', href: '#' },
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Envíos y Devoluciones', href: '#' },
    ],
  },
  {
    title: 'Atención al Cliente',
    links: [
      { label: 'Preguntas Frecuentes', href: '#' },
      { label: 'Contáctanos', href: '#' },
      { label: 'Soporte Técnico', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 border-t-4 border-orange-500">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-bold text-white">PRIZO</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Tu tienda deportiva de confianza. Encuentra todo para tu entrenamiento
              y estilo de vida activo.
            </p>
            <div className="flex gap-3">
              {['📘', '📸', '🐦', '🎥'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all hover:-translate-y-0.5"
                  aria-label="Red social"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-orange-500 font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-orange-500 rounded-full" />
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-orange-500 transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PRIZO Deportes. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 items-center">
            {['VISA', 'MC', 'PayPal', 'Amex'].map((method) => (
              <span
                key={method}
                className="px-3 py-1.5 bg-white rounded text-xs font-bold text-gray-700 hover:scale-105 transition-transform"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
