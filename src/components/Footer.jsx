import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow">
                <span className="text-white font-black text-base">K</span>
              </div>
              <span className="text-xl font-black text-white">KIDO</span>
            </div>
            <p className="text-sm leading-relaxed">KIDO — Learn English with Fun</p>
            <p className="text-sm mt-1">Балаларға арналған қауіпсіз білім беру платформасы.</p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base">Байланыс</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Phone size={14} className="text-blue-400" /> +7 700 000 00 00
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Mail size={14} className="text-blue-400" /> info@kido.kz
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <MapPin size={14} className="text-blue-400" /> Ақтау қаласы
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base">Сілтемелер</h4>
            <ul className="space-y-2.5 text-sm">
              {['Басты бет', 'Сабақтар', 'Профиль', 'Жиі қойылатын сұрақтар'].map(l => (
                <li key={l}>
                  <Link to="/" className="hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2025 KIDO. Барлық құқықтар қорғалған.</p>
          <div className="flex gap-5">
            {['Қолдану ережелері', 'Құпиялылық саясаты'].map(l => (
              <Link key={l} to="/" className="hover:text-white transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
