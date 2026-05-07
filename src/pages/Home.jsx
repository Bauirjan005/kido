import { useNavigate } from 'react-router-dom';
import { Star, ArrowRight, Play, Sparkles } from 'lucide-react';
import { reviews, courses } from '../data/mockData';

const BENTO = [
  { icon: '🎧', title: 'Listening skills жақсартады', desc: 'Балалар ағылшын тіліндегі аудио, диалог және short stories тыңдайды.', span: 'md:col-span-2', gradient: 'from-blue-500 to-blue-700', delay: '0ms' },
  { icon: '🗣️', title: 'Speaking confidence дамытады', desc: 'Сөздерді қайталап, қысқа сөйлемдер құру.', span: 'md:col-span-1', gradient: 'from-orange-400 to-rose-500', delay: '80ms' },
  { icon: '📚', title: 'Vocabulary қорын көбейтеді', desc: 'Жаңа сөздер сурет, ойын арқылы есте сақталады.', span: 'md:col-span-1', gradient: 'from-sky-400 to-blue-600', delay: '160ms' },
  { icon: '🎮', title: 'Ойын арқылы оқытады', desc: 'Gamification: Ұпай, деңгей, badges және mini-games.', span: 'md:col-span-2', gradient: 'from-amber-400 to-orange-600', delay: '240ms' },
];

const FLOATERS = [
  { emoji: '🚀', top: 'top-14', right: 'right-10', cls: 'animate-float text-5xl', delay: '0s' },
  { emoji: '⭐', top: 'top-28', left: 'left-8', cls: 'animate-float-slow text-4xl', delay: '0.6s' },
  { emoji: '🎨', bottom: 'bottom-20', left: 'left-16', cls: 'animate-float-fast text-4xl', delay: '0.3s' },
  { emoji: '📖', bottom: 'bottom-14', right: 'right-24', cls: 'animate-float text-5xl', delay: '1s' },
  { emoji: '🌟', top: 'top-20', right: 'right-1/3', cls: 'animate-wiggle text-3xl opacity-60', delay: '0.8s' },
  { emoji: '🎵', bottom: 'bottom-32', right: 'right-12', cls: 'animate-float-slow text-3xl opacity-70', delay: '0.4s' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden animate-fade-in">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 md:py-28 overflow-hidden min-h-[92vh] flex items-center">
        {/* Background blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl pointer-events-none" />

        {/* Floating elements */}
        {FLOATERS.map((f, i) => (
          <div
            key={i}
            className={`absolute ${f.top ?? ''} ${f.bottom ?? ''} ${f.left ?? ''} ${f.right ?? ''} ${f.cls} hidden lg:block select-none`}
            style={{ animationDelay: f.delay }}
          >
            {f.emoji}
          </div>
        ))}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 w-full">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur text-blue-700 font-bold text-sm px-5 py-2.5 rounded-full mb-8 border border-blue-200 shadow-sm animate-fade-in-up hover:scale-105 transition-transform duration-300">
            <span className="animate-wiggle inline-block">🏫</span>
            Бастауыш сынып оқушыларына арналған
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-800 leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '80ms' }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">KIDO</span>
            <br />
            <span className="text-gray-700">— ағылшын тілін </span>
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">қызығушылықпен</span>
              <svg className="absolute -bottom-2 left-0 w-full opacity-60" viewBox="0 0 300 8" fill="none">
                <path d="M0 6 Q75 0 150 4 Q225 8 300 4" stroke="url(#gr)" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <defs>
                  <linearGradient id="gr" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f97316"/><stop offset="1" stopColor="#ec4899"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {' '}үйрен.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '160ms' }}>
            Балалардың <strong className="text-blue-600">listening</strong>,{' '}
            <strong className="text-blue-600">vocabulary</strong> және{' '}
            <strong className="text-blue-600">speaking skills</strong> дамытуға арналған заманауи білім беру платформасы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '240ms' }}>
            <button
              onClick={() => navigate('/courses')}
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-pink-500 text-white font-black py-4 px-9 rounded-2xl shadow-lg hover:shadow-orange-500/50 hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span className="group-hover:animate-wiggle inline-block">👉</span> Сабақты бастау
            </button>
            <button
              onClick={() => navigate('/courses')}
              className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 font-bold py-4 px-9 rounded-2xl shadow-sm hover:shadow-blue-200 hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Play size={16} className="group-hover:scale-125 transition-transform" /> Тегін көру
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto animate-fade-in-up" style={{ animationDelay: '320ms' }}>
            {[['500+', 'Оқушы', '🎓'], ['50+', 'Сабақ', '📚'], ['⭐ 5.0', 'Рейтинг', '🌟']].map(([val, label, icon]) => (
              <div key={label} className="glass rounded-2xl py-5 px-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default">
                <div className="text-xl group-hover:animate-wiggle inline-block mb-1">{icon}</div>
                <div className="text-xl font-black text-blue-600">{val}</div>
                <div className="text-xs text-gray-500 font-semibold mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENTO ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 font-bold text-sm px-4 py-1.5 rounded-full mb-4 border border-orange-200">
              <Sparkles size={14} className="animate-pulse" /> Артықшылықтар
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">Неліктен KIDO тиімді?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Біздің платформа балалардың табиғи қызығушылығын ынталандырады</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BENTO.map(item => (
              <div
                key={item.title}
                className={`${item.span} group bg-gradient-to-br ${item.gradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-default overflow-hidden relative`}
                style={{ animationDelay: item.delay }}
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="text-5xl mb-5 inline-block group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{item.icon}</div>
                  <h3 className="text-xl font-extrabold mb-2 text-white drop-shadow-sm">{item.title}</h3>
                  <p className="text-white/85 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COURSES ── */}
      <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 font-bold text-sm px-4 py-1.5 rounded-full mb-4 border border-blue-200">
              📚 Сабақтар
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">Балаларға арналған қызықты ағылшын сабақтары</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.slice(0, 4).map((course, i) => (
              <div
                key={course.id}
                className="group bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
                onClick={() => navigate(`/courses/${course.id}`)}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className={`h-36 flex items-center justify-center text-6xl ${course.bg} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
                  <span className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block relative z-10">{course.emoji}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-black px-3 py-1 rounded-full text-white bg-gradient-to-r ${course.color}`}>{course.tag}</span>
                    <div className="flex items-center gap-0.5">
                      <Star size={12} className="text-amber-400 fill-amber-400" />
                      <span className="text-xs font-bold text-gray-600">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-extrabold text-gray-800 text-base mb-1.5 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">{course.description}</p>
                  <button
                    onClick={e => { e.stopPropagation(); navigate(`/courses/${course.id}`); }}
                    className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-purple-500 text-white font-bold text-sm rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
                  >
                    👉 Сабақты бастау
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/courses')}
              className="group inline-flex items-center gap-2 bg-white border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 text-blue-600 font-bold px-8 py-3.5 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Барлық сабақтарды көру
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 font-bold text-sm px-4 py-1.5 rounded-full mb-4 border border-amber-200">
              💬 Пікірлер
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800">Ата-аналардың пікірлері</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl shadow-md p-7 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-100"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-amber-400 fill-amber-400 group-hover:scale-110 transition-transform" style={{ transitionDelay: `${j * 40}ms` }} />
                  ))}
                </div>
                <p className="text-gray-700 text-base leading-relaxed italic flex-1">"{r.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-8 right-24 text-6xl opacity-25 animate-float select-none">🎉</div>
          <div className="absolute bottom-8 left-24 text-6xl opacity-25 animate-float-slow select-none">⭐</div>
          <div className="absolute top-1/2 left-8 text-5xl opacity-20 animate-float-fast select-none">🚀</div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight drop-shadow-sm">
            Балалардың ағылшын тілін сенімді үйренуіне көмектесеміз
          </h2>
          <p className="text-white/90 text-lg mb-10">
            KIDO — ойын, тыңдау және сөйлеу практикасын біріктіретін заманауи платформа.
          </p>
          <button
            onClick={() => navigate('/courses')}
            className="group inline-flex items-center gap-2 bg-white text-orange-500 hover:bg-orange-50 font-black text-lg py-4 px-12 rounded-2xl shadow-2xl hover:shadow-white/30 hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="group-hover:animate-wiggle inline-block">👉</span> Қазір бастау
          </button>
        </div>
      </section>
    </div>
  );
}
