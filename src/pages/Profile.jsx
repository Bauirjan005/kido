import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Award, Star, TrendingUp, Clock, Target } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { badges, courses } from '../data/mockData';

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const recentCourses = courses.slice(0, 3);
  const pts = user.totalPoints ?? 0;
  const completed = user.completedLessons ?? 0;
  const progress = user.courseProgress ?? Math.min(Math.round((completed / 8) * 100), 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/60 to-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── HEADER CARD ── */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-3xl flex items-center justify-center text-5xl shadow-lg border border-white/30">
              {user.avatar ?? '🦁'}
            </div>
            <div className="flex-1">
              <p className="text-blue-200 text-sm font-semibold mb-1">Оқушы профилі</p>
              <h1 className="text-3xl font-black text-white mb-1">{user.name || 'Оқушы'}</h1>
              <p className="text-blue-300 text-sm">{user.email} • KIDO-ға қосылды: {user.joinDate || '—'}</p>
            </div>
            <div className="flex items-center gap-2 bg-amber-400 px-5 py-2.5 rounded-2xl shadow-md">
              <Star size={18} className="text-amber-800 fill-amber-800" />
              <span className="text-amber-900 font-black text-lg">{pts}</span>
              <span className="text-amber-800 text-sm font-semibold">ұпай</span>
            </div>
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: <BookOpen size={22} className="text-blue-500" />, label: 'Өтілген сабақтар', value: completed, bg: 'bg-blue-50', border: 'border-blue-100' },
            { icon: <Star size={22} className="text-amber-500" />, label: 'Жалпы ұпай', value: pts, bg: 'bg-amber-50', border: 'border-amber-100' },
            { icon: <Target size={22} className="text-green-500" />, label: 'Аяқталған курс', value: Math.floor(completed / 8), bg: 'bg-green-50', border: 'border-green-100' },
            { icon: <Clock size={22} className="text-purple-500" />, label: 'Оқу күндері', value: Math.max(1, Math.floor(completed / 3)), bg: 'bg-purple-50', border: 'border-purple-100' },
          ].map(stat => (
            <div key={stat.label} className={`${stat.bg} border ${stat.border} rounded-3xl p-5 flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow`}>
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm">{stat.icon}</div>
              <div className="text-3xl font-black text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-500 font-semibold leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="md:col-span-2 flex flex-col gap-6">

            {/* Progress */}
            <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-black text-gray-800 text-lg flex items-center gap-2">
                  <TrendingUp size={20} className="text-blue-500" /> Ағымдағы курс
                </h2>
                <button
                  onClick={() => navigate('/courses/1')}
                  className="text-blue-500 hover:text-blue-700 text-sm font-bold transition-colors"
                >
                  Жалғастыру →
                </button>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">🐘</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800 text-sm">{user.currentCourse || 'Animals Vocabulary'}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{progress}% аяқталды</p>
                </div>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">0%</span>
                <span className="text-xs font-bold text-blue-600">{progress}%</span>
                <span className="text-xs text-gray-400">100%</span>
              </div>
            </div>

            {/* Recent lessons */}
            <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100">
              <h2 className="font-black text-gray-800 text-lg mb-5 flex items-center gap-2">
                <BookOpen size={20} className="text-orange-500" /> Соңғы сабақтар
              </h2>
              <div className="flex flex-col gap-3">
                {recentCourses.map(course => (
                  <button
                    key={course.id}
                    onClick={() => navigate(`/courses/${course.id}`)}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group text-left w-full"
                  >
                    <div className={`w-11 h-11 ${course.bg} rounded-2xl flex items-center justify-center text-xl`}>{course.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-800 text-sm">{course.title}</p>
                      <p className="text-gray-400 text-xs">{course.lessons} сабақ • {course.duration}</p>
                    </div>
                    <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            {/* Badges */}
            <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100">
              <h2 className="font-black text-gray-800 text-lg mb-5 flex items-center gap-2">
                <Award size={20} className="text-amber-500" /> Жетістіктер
              </h2>
              <div className="flex flex-col gap-3">
                {badges.map(badge => (
                  <div
                    key={badge.id}
                    className={`rounded-2xl p-4 transition-all hover:scale-[1.02] ${badge.earned ? `bg-gradient-to-br ${badge.color}` : 'bg-gray-100'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl ${badge.earned ? 'bg-white/20' : 'bg-white/60'}`}>
                        {badge.icon}
                      </div>
                      <div>
                        <p className={`font-bold text-sm ${badge.earned ? 'text-white' : 'text-gray-400'}`}>{badge.title}</p>
                        <p className={`text-xs mt-0.5 ${badge.earned ? 'text-white/80' : 'text-gray-400'}`}>{badge.desc}</p>
                      </div>
                    </div>
                    {!badge.earned && (
                      <div className="mt-2 flex items-center gap-1">
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full">
                          <div className="h-full w-1/3 bg-gray-300 rounded-full" />
                        </div>
                        <span className="text-xs text-gray-400">33%</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Streak */}
            <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl p-6 text-white shadow-md">
              <div className="text-3xl mb-2">🔥</div>
              <p className="font-black text-2xl">{Math.max(1, Math.floor(completed / 2))} күн</p>
              <p className="text-white/80 text-sm font-semibold mt-1">Үздіксіз оқу жолы</p>
              <div className="flex gap-1.5 mt-4">
                {['Дс', 'Сс', 'Ср', 'Чт', 'Жм', 'Сб', 'Жк'].map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 flex-1">
                    <div className={`w-full h-7 rounded-xl flex items-center justify-center text-xs font-bold ${i < Math.min(5, completed + 1) ? 'bg-white text-orange-500' : 'bg-white/30 text-white/60'}`}>
                      {i < Math.min(5, completed + 1) ? '✓' : day}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
