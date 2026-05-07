import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, BookOpen, Search, Users } from 'lucide-react';
import { courses } from '../data/mockData';

const TAGS = ['Барлық сабақтар', 'Beginner level', 'Listening', 'Vocabulary', 'Speaking', 'Games', 'Songs & Stories'];
const TAG_MAP = {
  'Барлық сабақтар': null,
  'Beginner level': 'Beginner',
  'Listening': 'Listening',
  'Vocabulary': 'Vocabulary',
  'Speaking': 'Speaking',
  'Games': 'Games',
  'Songs & Stories': 'Songs & Stories',
};

export default function Courses() {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState('Барлық сабақтар');
  const [search, setSearch] = useState('');

  const filtered = courses.filter(c => {
    const tagMatch = !TAG_MAP[activeTag] || c.tag === TAG_MAP[activeTag];
    const searchMatch = !search || c.title.toLowerCase().includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase());
    return tagMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-orange-50/30 animate-fade-in">

      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl" />
        <div className="absolute top-6 right-20 text-4xl opacity-30 animate-float hidden lg:block select-none">📚</div>
        <div className="absolute bottom-6 left-16 text-3xl opacity-30 animate-float-slow hidden lg:block select-none">🎓</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white font-bold text-sm px-4 py-1.5 rounded-full mb-4 border border-white/30">
              📚 Сабақтар каталогы
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">Балаларға арналған қызықты ағылшын сабақтары</h1>
            <p className="text-blue-200 text-sm">Сізге ыңғайлы санатты таңдап, оқуды бастаңыз!</p>
          </div>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Сабақ іздеу..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-white/95 backdrop-blur border-2 border-white/60 rounded-2xl text-sm focus:outline-none focus:border-blue-300 shadow-lg transition-all placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full font-bold text-sm border-2 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
                activeTag === tag
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-md'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-500 text-sm">
            <span className="font-black text-gray-700 text-lg">{filtered.length}</span> сабақ табылды
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((course, i) => (
              <div
                key={course.id}
                className="group bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col cursor-pointer border border-transparent hover:border-blue-100"
                onClick={() => navigate(`/courses/${course.id}`)}
                style={{ animationDelay: `${(i % 4) * 60}ms` }}
              >
                {/* Card top */}
                <div className={`h-36 flex items-center justify-center text-6xl ${course.bg} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10" />
                  {/* Shine effect */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                  <span className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block relative z-10 drop-shadow-md">{course.emoji}</span>
                  {/* Rating */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Star size={11} className="text-amber-500 fill-amber-500" />
                    <span className="text-xs font-black text-gray-700">{course.rating}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-black px-3 py-1 rounded-full text-white bg-gradient-to-r ${course.color} shadow-sm`}>
                      {course.tag}
                    </span>
                    <span className="text-xs text-gray-400 font-semibold">{course.level}</span>
                  </div>

                  <h3 className="font-extrabold text-gray-800 text-base mb-1.5 group-hover:text-blue-600 transition-colors duration-200">{course.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{course.description}</p>

                  <div className="flex items-center justify-between mt-4 mb-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                      <BookOpen size={12} /> {course.lessons} сабақ
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} /> {course.students}
                    </span>
                  </div>

                  <button
                    onClick={e => { e.stopPropagation(); navigate(`/courses/${course.id}`); }}
                    className={`w-full py-2.5 text-center rounded-2xl font-bold text-sm text-white bg-gradient-to-r ${course.color} hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 transition-all duration-300`}
                  >
                    👉 Сабақты бастау
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 animate-fade-in-up">
            <div className="text-7xl mb-5 animate-float inline-block">🔍</div>
            <p className="text-gray-500 font-semibold text-lg">Ештеңе табылмады.</p>
            <p className="text-gray-400 text-sm mt-1">Басқа сөз немесе санат таңдаңыз.</p>
            <button
              onClick={() => { setSearch(''); setActiveTag('Барлық сабақтар'); }}
              className="mt-5 px-6 py-2.5 bg-blue-500 text-white rounded-2xl font-bold text-sm hover:bg-blue-600 hover:-translate-y-0.5 transition-all"
            >
              Бастапқы қалпына келтіру
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
