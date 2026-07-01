export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">CONTACTO</h1>
        <p className="text-xl text-gray-300 mb-8">¿Necesitas ayuda? Estamos aquí para ti</p>

        <div className="max-w-lg mx-auto space-y-4 text-lg">
          <div className="bg-white/5 rounded-lg p-5">
            <p className="font-semibold text-orange-400">Email</p>
            <p>info@prizo.com</p>
          </div>
          <div className="bg-white/5 rounded-lg p-5">
            <p className="font-semibold text-orange-400">Teléfono</p>
            <p>+57 300 123 4567</p>
          </div>
          <div className="bg-white/5 rounded-lg p-5">
            <p className="font-semibold text-orange-400">Dirección</p>
            <p>Calle 123 #45-67, Medellín, Colombia</p>
          </div>
        </div>
      </div>
    </main>
  );
}
