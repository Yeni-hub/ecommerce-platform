import React, { useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CheckoutPageProps {
  cartItems: CartItem[];
  onCompletePurchase: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, onCompletePurchase }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    department: '',
    zip: '',
    address: '',
    notes: ''
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const handleDateClick = (day: number) => {
    if (day) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      setSelectedDate(date);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const days = generateCalendar();
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  return (
    <div className="min-h-screen bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gray-200 rounded-lg p-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Forms */}
            <div className="space-y-8">
              {/* Shipping Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Información de envío</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-300 rounded-md text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Número de teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-300 rounded-md text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-300 rounded-md text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Ciudad</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-300 rounded-md text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Departamento</label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-300 rounded-md text-gray-800"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">ZIP</label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-300 rounded-md text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">ZIP</label>
                      <input
                        type="text"
                        className="w-full p-3 bg-gray-300 rounded-md text-gray-800"
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm text-gray-600 mb-1">Dirección</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-300 rounded-md text-gray-800"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Date */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Escoger fecha de entrega</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Datos</label>
                    <input
                      type="text"
                      value={selectedDate ? formatDate(selectedDate) : ''}
                      readOnly
                      className="w-full p-3 bg-gray-300 rounded-md text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Nota</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-300 rounded-md text-gray-800 h-20"
                    />
                  </div>
                </div>

                {/* Calendar */}
                <div className="mt-6 bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      ←
                    </button>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h3>
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      →
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
                      <div key={day} className="text-sm text-gray-500 p-2 font-medium">
                        {day}
                      </div>
                    ))}
                    {days.map((day, index) => (
                      <button
                        key={index}
                        onClick={() => handleDateClick(day)}
                        className={`p-2 text-sm rounded-md hover:bg-gray-100 ${
                          day && selectedDate && 
                          selectedDate.getDate() === day && 
                          selectedDate.getMonth() === currentMonth.getMonth() &&
                          selectedDate.getFullYear() === currentMonth.getFullYear()
                            ? 'bg-orange-500 text-white'
                            : 'text-gray-800'
                        }`}
                        disabled={!day}
                      >
                        {day || ''}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Cart Summary */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                  </div>
                </div>
              ))}
              
              <div className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-center text-xl font-bold text-gray-800">
                  <span>Total:</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={onCompletePurchase}
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
};

export default CheckoutPage;