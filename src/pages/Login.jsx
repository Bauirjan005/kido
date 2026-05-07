import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowLeft, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.email.trim()) {
      e.email = 'Email міндетті түрде толтырылуы керек';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Дұрыс email мекенжайын енгізіңіз';
    }
    if (!form.password) {
      e.password = 'Құпиясөз міндетті түрде толтырылуы керек';
    } else if (form.password.length < 6) {
      e.password = 'Құпиясөз кемінде 6 таңбадан тұруы керек';
    }
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      login({
        id: Date.now(),
        name: form.email.split('@')[0],
        email: form.email,
        avatar: '🦁',
        totalPoints: 0,
        completedLessons: 0,
        courseProgress: 0,
        currentCourse: 'Animals Vocabulary',
        joinDate: new Date().toLocaleDateString('kk-KZ', { month: 'long', year: 'numeric' }),
      });
      navigate('/home');
    }, 900);
  };

  const handleChange = (field, value) => {
    setForm(p => ({ ...p, [field]: value }));
    if (errors[field]) setErrors(p => ({ ...p, [field]: undefined }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-12 text-4xl animate-bounce hidden md:block select-none">🚀</div>
      <div className="absolute top-20 right-16 text-3xl animate-pulse hidden md:block select-none">⭐</div>
      <div className="absolute bottom-16 left-20 text-3xl animate-bounce hidden md:block select-none" style={{ animationDelay: '0.4s' }}>🎨</div>
      <div className="absolute bottom-20 right-12 text-4xl animate-pulse hidden md:block select-none">📚</div>

      <div className="w-full max-w-md relative z-10">
        <div className="flex items-center justify-center mb-6 gap-2">
          <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
            <span className="text-white font-black text-lg">K</span>
          </div>
          <span className="text-2xl font-black text-white tracking-tight">KIDO</span>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-black text-gray-800 mb-1">Қайта оралдың! 👋</h1>
            <p className="text-gray-500 text-sm">KIDO аккаунтына кіріңіз</p>
          </div>

          <button type="button" className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 py-3 rounded-2xl font-semibold text-gray-700 transition-all mb-5 text-sm">
            <span className="text-xl">🌐</span> Google арқылы кіру
          </button>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-xs font-medium">немесе</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Email мекенжайы</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="email@kido.kz"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-2xl text-sm focus:outline-none transition-colors ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-blue-400'}`}
                />
              </div>
              {errors.email && <p className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-semibold"><AlertCircle size={12} /> {errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Құпиясөз</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={e => handleChange('password', e.target.value)}
                  className={`w-full pl-10 pr-12 py-3 border-2 rounded-2xl text-sm focus:outline-none transition-colors ${errors.password ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-blue-400'}`}
                />
                <button type="button" onClick={() => setShowPass(v => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-semibold"><AlertCircle size={12} /> {errors.password}</p>}
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-blue-500 hover:text-blue-700 font-semibold">Құпиясөзді ұмыттыңыз ба?</a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
            >
              {loading ? '⏳ Кіруде...' : '🚀 Кіру'}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Аккаунт жоқ па?{' '}
            <Link to="/register" className="text-blue-600 font-bold hover:underline">Тіркелу</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
