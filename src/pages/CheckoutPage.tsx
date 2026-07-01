import { useState, useCallback } from 'react';
import { Trash2 } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import type { CartItem } from '../types';

interface CheckoutPageProps {
  cartItems: CartItem[];
  onCompletePurchase: () => void;
}

const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

const DAY_HEADERS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

export default function CheckoutPage({ cartItems, onCompletePurchase }: CheckoutPageProps) {
  const { removeFromCart } = useCart();
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', city: '', department: '', address: '', notes: '',
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: false }));
  };

  const handleSubmit = () => {
    const required = ['name', 'phone', 'email', 'city', 'department', 'address'];
    const newErrors: Record<string, boolean> = {};
    let valid = true;

    required.forEach((field) => {
      if (!formData[field as keyof typeof formData].trim()) {
        newErrors[field] = true;
        valid = false;
      }
    });

    setErrors(newErrors);

    if (!valid) return;
    if (!selectedDate) return;

    onCompletePurchase();
  };

  const generateCalendar = useCallback(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days: (number | null)[] = Array(firstDay).fill(null);

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  }, [currentMonth]);

  const isSelectedDate = (day: number) =>
    selectedDate &&
    selectedDate.getDate() === day &&
    selectedDate.getMonth() === currentMonth.getMonth() &&
    selectedDate.getFullYear() === currentMonth.getFullYear();

  const formatDate = (date: Date) =>
    date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });

  const days = generateCalendar();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-400">Agrega productos desde nuestras categorías.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gray-200 rounded-lg p-4 md:p-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Información de envío</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'name', label: 'Nombre', type: 'text' },
                    { name: 'phone', label: 'Teléfono', type: 'tel' },
                    { name: 'email', label: 'Email', type: 'email' },
                    { name: 'city', label: 'Ciudad', type: 'text' },
                    { name: 'department', label: 'Departamento', type: 'text' },
                  ].map(({ name, label, type }) => (
                    <div key={name}>
                      <label className="block text-sm text-gray-600 mb-1">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={formData[name as keyof typeof formData]}
                        onChange={handleInputChange}
                        className={`w-full p-3 rounded-md text-gray-800 transition-colors ${
                          errors[name] ? 'bg-red-200 ring-2 ring-red-400' : 'bg-gray-300'
                        }`}
                      />
                    </div>
                  ))}
                  <div className="col-span-2">
                    <label className="block text-sm text-gray-600 mb-1">Dirección</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-md text-gray-800 transition-colors ${
                        errors.address ? 'bg-red-200 ring-2 ring-red-400' : 'bg-gray-300'
                      }`}
                    />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Escoger fecha de entrega</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Fecha seleccionada</label>
                    <input
                      type="text"
                      value={selectedDate ? formatDate(selectedDate) : ''}
                      readOnly
                      className="w-full p-3 bg-gray-300 rounded-md text-gray-800"
                      placeholder="Selecciona un día"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Nota</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-300 rounded-md text-gray-800 h-[42px] resize-none"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                      className="text-gray-600 hover:text-gray-800 p-2"
                      aria-label="Mes anterior"
                    >
                      &larr;
                    </button>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h3>
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                      className="text-gray-600 hover:text-gray-800 p-2"
                      aria-label="Mes siguiente"
                    >
                      &rarr;
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {DAY_HEADERS.map((day) => (
                      <div key={day} className="text-xs text-gray-500 p-2 font-medium">
                        {day}
                      </div>
                    ))}
                    {days.map((day, index) => (
                      <button
                        key={index}
                        onClick={() => day && setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
                        className={`p-2 text-sm rounded-md transition-colors ${
                          day && isSelectedDate(day)
                            ? 'bg-orange-500 text-white'
                            : day
                            ? 'text-gray-800 hover:bg-gray-100'
                            : ''
                        }`}
                        disabled={!day}
                        aria-label={day ? `Seleccionar día ${day}` : undefined}
                      >
                        {day || ''}
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 text-sm truncate">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    aria-label={`Eliminar ${item.name}`}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}

              <div className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-center text-xl font-bold text-gray-800">
                  <span>Total:</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors"
              >
                COMPRAR AHORA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
