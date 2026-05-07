import { Phone, MapPin, Mail, Users, Target, Shield, Gamepad2, Zap, GraduationCap } from 'lucide-react';

const TEAM = [
  { name: 'Мақсат Әсел', role: 'Жоба жетекшісі', avatar: '👩‍💼', color: 'from-blue-400 to-blue-600' },
  { name: 'Мекеева Аққу', role: 'Frontend-әзірлеуші', avatar: '👩‍💻', color: 'from-purple-400 to-purple-600' },
  { name: 'Даулет Нұрсая', role: 'UI/UX Дизайнер', avatar: '🎨', color: 'from-orange-400 to-orange-600' },
  { name: 'Тузелбаева Аселя', role: 'Контент-менеджер', avatar: '📝', color: 'from-green-400 to-green-600' },
];

const ADVANTAGES = [
  { icon: <Shield size={24} />, title: 'Қауіпсіз контент', desc: 'Балаларға арналған тексерілген, зиянсыз материалдар ғана.', color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
  { icon: <Gamepad2 size={24} />, title: 'Геймификация', desc: 'Ұпайлар мен бейдждер арқылы балаларды оқуға ынталандыру.', color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' },
  { icon: <Zap size={24} />, title: 'Интерактивті сабақтар', desc: 'Тыңдау, сөйлеу және ойын тапсырмаларының бірлігі.', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100' },
];

const CONTACTS = [
  { icon: <Phone size={16} />, label: '+7 702 726 9580', href: 'tel:+77027269580' },
  { icon: <Mail size={16} />, label: 'info@kido.kz', href: 'mailto:info@kido.kz' },
  { icon: <MapPin size={16} />, label: 'Ақтау қаласы', href: '#' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/40 to-white">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-16 text-5xl opacity-20 animate-pulse hidden lg:block">🌟</div>
        <div className="absolute bottom-10 left-16 text-5xl opacity-20 animate-bounce hidden lg:block">🎓</div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white font-bold text-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            🏫 Yessenov University
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            KIDO — балаларға арналған<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-amber-300">
              қауіпсіз білім беру платформасы
            </span>
          </h1>
          <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Балаларға ағылшын тілін ойын, визуал және интерактивті тапсырмалар арқылы жеңіл әрі қызықты үйрету. Платформа <strong className="text-white">listening</strong>, <strong className="text-white">vocabulary</strong> және <strong className="text-white">speaking skills</strong> дамытуға арналған.
          </p>
        </div>
      </section>

      {/* ── МАҚСАТ ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center text-7xl shadow-lg shrink-0">
              <Target size={60} className="text-blue-500" />
            </div>
            <div>
              <span className="inline-block bg-blue-100 text-blue-600 font-bold text-sm px-4 py-1.5 rounded-full mb-3">🎯 Мақсат</span>
              <h2 className="text-3xl font-black text-gray-800 mb-4">Біздің мақсатымыз</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Балаларға ағылшын тілін <strong className="text-blue-600">ойын</strong>, <strong className="text-blue-600">визуал</strong> және <strong className="text-blue-600">интерактивті тапсырмалар</strong> арқылы жеңіл әрі қызықты үйрету. Платформа listening, vocabulary және speaking skills дамытуға арналған. Біз сенеміз: бала қызыққан кезде ғана тиімді үйренеді.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── АРТЫҚШЫЛЫҚТАР ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 font-bold text-sm px-4 py-1.5 rounded-full mb-3">✨ Артықшылықтар</span>
            <h2 className="text-3xl font-black text-gray-800">KIDO неге ерекше?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ADVANTAGES.map(adv => (
              <div
                key={adv.title}
                className={`${adv.bg} border-2 ${adv.border} rounded-3xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-sm ${adv.color}`}>
                  {adv.icon}
                </div>
                <h3 className="font-extrabold text-gray-800 text-lg mb-2">{adv.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── КОМАНДА ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-purple-100 text-purple-600 font-bold text-sm px-4 py-1.5 rounded-full mb-3">
              <Users size={13} className="inline mr-1" />Команда
            </span>
            <h2 className="text-3xl font-black text-gray-800 mb-2">Жоба авторлары</h2>
            <p className="text-gray-500">Yessenov University студенттері</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {TEAM.map(member => (
              <div
                key={member.name}
                className="group bg-white border-2 border-gray-100 hover:border-blue-200 rounded-3xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-default"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-3xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                  {member.avatar}
                </div>
                <h3 className="font-black text-gray-800 text-sm leading-tight mb-1">{member.name}</h3>
                <p className="text-gray-400 text-xs font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── УНИВЕРСИТЕТ + БАЙЛАНЫС ── */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* University */}
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                  <GraduationCap size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">Оқу орны</p>
                  <h3 className="text-white font-black text-2xl">Yessenov University</h3>
                </div>
              </div>
              <p className="text-blue-200 text-base leading-relaxed">
                Жоба Yessenov University студенттері тарапынан Ақтау қаласында жасалды. Платформаның мақсаты — қазақстандық балаларға заманауи технологиялар арқылы ағылшын тілін үйретуді жеңілдету.
              </p>
            </div>

            {/* Contacts */}
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20">
              <h3 className="text-white font-black text-2xl mb-6">Байланыс</h3>
              <ul className="space-y-4">
                {CONTACTS.map(c => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors duration-200 group"
                    >
                      <div className="w-10 h-10 bg-white/15 group-hover:bg-white/25 rounded-xl flex items-center justify-center transition-colors">
                        {c.icon}
                      </div>
                      <span className="font-semibold text-base">{c.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
