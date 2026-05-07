import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockUser } from '../data/mockData';

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) {
      e.name = 'Атыңызды енгізіңіз';
    } else if (form.name.trim().length < 2) {
      e.name = 'Ат кемінде 2 таңбадан тұруы керек';
    }
    if (!form.email.trim()) {
      e.email = 'Email міндетті түрде толтырылуы керек';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Дұрыс email мекенжайын енгізіңіз';
    }
    if (!form.password) {
      e.password = 'Құпиясөз міндетті түрде толтырылуы керек';
    } else if (form.password.length < 8) {
      e.password = 'Құпиясөз кемінде 8 таңбадан тұруы керек';
    }
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      login({ ...mockUser, name: form.name.trim(), email: form.email, totalPoints: 0, completedLessons: 0 });
      navigate('/profile');
    }, 900);
  };

  const handleChange = (field, value) => {
    setForm(p => ({ ...p, [field]: value }));
    if (errors[field]) setErrors(p => ({ ...p, [field]: undefined }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-amber-500 flex items-center justify-center p-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-14 left-14 text-4xl animate-bounce hidden md:block">🎉</div>
      <div className="absolute top-24 right-16 text-3xl animate-pulse hidden md:block">🌟</div>
      <div className="absolute bottom-14 left-24 text-3xl animate-bounce hidden md:block" style={{ animationDelay: '0.4s' }}>🎈</div>
      <div className="absolute bottom-20 right-10 text-4xl animate-pulse hidden md:block">🚀</div>

      <div className="w-full max-w-md relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm mb-6 transition-colors"
        >
          <ArrowLeft size={16} /> Басты бетке оралу
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
              <span className="text-white font-black text-2xl">K</span>
            </div>
            <h1 className="text-2xl font-black text-gray-800 mb-1">KIDO-ға қош келдің! 🎉</h1>
            <p className="text-gray-500 text-sm">Тегін аккаунт жасаңыз</p>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 py-3 rounded-2xl font-semibold text-gray-700 transition-all mb-5 text-sm"
          >
            <span className="text-xl">🌐</span> Google арқылы тіркелу
          </button>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-xs font-medium">немесе</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Аты (Есімің)</label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Мысалы: Айбек"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-2xl text-sm focus:outline-none transition-colors ${
                    errors.name ? 'border-red-400 bg-red-50 focus:border-red-400' : 'border-gray-200 focus:border-orange-400'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-semibold">
                  <AlertCircle size={12} /> {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Email мекенжайы</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="email@kido.kz"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-2xl text-sm focus:outline-none transition-colors ${
                    errors.email ? 'border-red-400 bg-red-50 focus:border-red-400' : 'border-gray-200 focus:border-orange-400'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-semibold">
                  <AlertCircle size={12} /> {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Құпиясөз</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={e => handleChange('password', e.target.value)}
                  className={`w-full pl-10 pr-12 py-3 border-2 rounded-2xl text-sm focus:outline-none transition-colors ${
                    errors.password ? 'border-red-400 bg-red-50 focus:border-red-400' : 'border-gray-200 focus:border-orange-400'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-semibold">
                  <AlertCircle size={12} /> {errors.password}
                </p>
              )}
              {!errors.password && (
                <p className="text-xs text-gray-400 mt-1">Кемінде 8 таңба болуы керек</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
            >
              {loading ? '⏳ Тіркелуде...' : '🎉 Тіркелу'}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Аккаунт бар ма?{' '}
            <Link to="/login" className="text-orange-500 font-bold hover:underline">
              Кіру
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
