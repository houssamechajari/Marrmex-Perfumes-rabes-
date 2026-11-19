import React from 'react';
import { MapPin, Truck, CreditCard, MessageSquare, Sparkles, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/products';

export const RegionalSections: React.FC = () => {
  const whatsappHref = (city: string) =>
    `https://wa.me/${BUSINESS_CONFIG.phone}?text=${encodeURIComponent(
      `Hola MARRMEX Perfumes Árabes, deseo información para pedido en ${city}.`
    )}`;

  return (
    <div id="cobertura-regional" className="py-12 sm:py-16 bg-[#070907] border-b border-[#1b261e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sección 1: Oaxaca */}
          <section
            id="perfumes-arabes-oaxaca"
            aria-labelledby="heading-oaxaca"
            className="p-6 rounded-2xl bg-[#0e1410] border border-[#1b261e] hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#064e3b]/50 border border-emerald-500/40 flex items-center justify-center text-[#fceda7]">
                  <MapPin className="w-4 h-4" />
                </div>
                <h2 id="heading-oaxaca" className="font-display font-bold text-lg text-white">
                  Oaxaca
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#cbd5e1] mb-5">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>Perfumes árabes originales de larga duración</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Envíos rápidos 24 hrs en Oaxaca de Juárez</span>
                </li>
                <li className="flex items-start gap-2">
                  <Truck className="w-4 h-4 text-[#fceda7] flex-shrink-0 mt-0.5" />
                  <span>Envío gratis a todo México desde $1,500 MXN</span>
                </li>
              </ul>
            </div>

            <a
              href={whatsappHref('Oaxaca')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#064e3b]/40 hover:bg-[#064e3b]/70 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current text-emerald-400" />
              <span>Via WhatsApp</span>
            </a>
          </section>

          {/* Sección 2: Huajuapan de León */}
          <section
            id="perfumes-arabes-huajuapan"
            aria-labelledby="heading-huajuapan"
            className="p-6 rounded-2xl bg-[#0e1410] border border-[#d4af37]/40 hover:border-[#d4af37] transition-all flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#064e3b]/50 border border-emerald-500/40 flex items-center justify-center text-[#fceda7]">
                  <MapPin className="w-4 h-4" />
                </div>
                <h2 id="heading-huajuapan" className="font-display font-bold text-lg text-white">
                  Huajuapan de León
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#cbd5e1] mb-5">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>Perfumes árabes originales de larga duración</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Entrega local en Huajuapan de León</span>
                </li>
                <li className="flex items-start gap-2">
                  <CreditCard className="w-4 h-4 text-[#fceda7] flex-shrink-0 mt-0.5" />
                  <span>Pago con tarjeta o efectivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Truck className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>Envío gratis a todo México desde $1,500 MXN</span>
                </li>
              </ul>
            </div>

            <a
              href={whatsappHref('Huajuapan de León')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#064e3b]/40 hover:bg-[#064e3b]/70 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current text-emerald-400" />
              <span>Via WhatsApp</span>
            </a>
          </section>

          {/* Sección 3: Puebla */}
          <section
            id="perfumes-arabes-puebla"
            aria-labelledby="heading-puebla"
            className="p-6 rounded-2xl bg-[#0e1410] border border-[#1b261e] hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#064e3b]/50 border border-emerald-500/40 flex items-center justify-center text-[#fceda7]">
                  <MapPin className="w-4 h-4" />
                </div>
                <h2 id="heading-puebla" className="font-display font-bold text-lg text-white">
                  Puebla
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#cbd5e1] mb-5">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>Perfumes árabes originales de larga duración</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Envíos rápidos 24 hrs en Puebla y Entrega Local</span>
                </li>
                <li className="flex items-start gap-2">
                  <Truck className="w-4 h-4 text-[#fceda7] flex-shrink-0 mt-0.5" />
                  <span>Envío gratis a todo México desde $1,500 MXN</span>
                </li>
              </ul>
            </div>

            <a
              href={whatsappHref('Puebla')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#064e3b]/40 hover:bg-[#064e3b]/70 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current text-emerald-400" />
              <span>Via WhatsApp</span>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};
