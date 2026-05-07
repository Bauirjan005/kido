import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Star, Menu, X, BookOpen, Home, Info, LogOut, User, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { to: '/home', label: 'Басты бет', icon: <Home size={15} /> },
    { to: '/courses', label: 'Сабақтар', icon: <BookOpen size={15} /> },
    { to: '/about', label: 'Біз туралы', icon: <Info size={15} /> },
  ];

  const isActive = (to) => location.pathname === to;

  const handleLogout = () => {
    logout();
    setDropOpen(false);
    setOpen(false);
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2 group shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <span className="text-white font-black text-lg leading-none">K</span>
          </div>
          <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            KIDO
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 group ${
                isActive(to)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-blue-50/70 hover:text-blue-600'
              }`}
            >
              {label}
              {isActive(to) && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3 relative">

              {/* Points badge — animated */}
              <div className="relative flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 px-4 py-2 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-default">
                <Zap size={14} className="text-orange-500 fill-orange-400 animate-pulse" />
                <span className="shimmer-text font-black text-sm">
                  {user.totalPoints ?? 0}
                </span>
                <span className="text-amber-600 text-xs font-bold">ұпай</span>
                {/* Glow ring when points > 0 */}
                {(user.totalPoints ?? 0) > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-orange-400 rounded-full animate-ping opacity-75" />
                )}
              </div>

              {/* Avatar dropdown */}
              <button
                onClick={() => setDropOpen(v => !v)}
                className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-3 py-1.5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-2xl leading-none hover:animate-wiggle">{user.avatar ?? '🦁'}</span>
                <span className="font-bold text-sm text-gray-700">{(user.name || 'Оқушы').split(' ')[0]}</span>
                <span className={`text-gray-400 text-xs transition-transform duration-200 ${dropOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>

              {/* Dropdown */}
              {dropOpen && (
                <div className="absolute right-0 top-14 w-56 glass rounded-2xl shadow-2xl border border-white/60 py-2 z-50 animate-scale-in">
                  <div className="px-4 py-2.5 border-b border-gray-100 mb-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xl">{user.avatar ?? '🦁'}</span>
                      <p className="text-sm font-black text-gray-800 truncate">{user.name || 'Оқушы'}</p>
                    </div>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>
                  <Link to="/profile" onClick={() => setDropOpen(false)} className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-xl mx-1">
                    <User size={15} /> Менің кабинетім
                  </Link>
                  <Link to="/courses" onClick={() => setDropOpen(false)} className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-xl mx-1">
                    <BookOpen size={15} /> Сабақтар
                  </Link>
                  <hr className="my-1.5 border-gray-100 mx-3" />
                  <button onClick={handleLogout} className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors rounded-xl mx-1">
                    <LogOut size={15} /> Шығу
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 rounded-xl font-bold text-sm text-blue-600 border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200">
                Кіру
              </Link>
              <Link to="/register" className="px-4 py-2 rounded-xl font-bold text-sm bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-pink-500 text-white shadow-md hover:shadow-orange-500/50 hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-200">
                Тіркелу
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-200"
          onClick={() => setOpen(v => !v)}
        >
          <div className={`transition-transform duration-300 ${open ? 'rotate-90' : ''}`}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/90 backdrop-blur border-t border-gray-100 px-4 py-4 flex flex-col gap-2">
          {user && (
            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl mb-2 border border-amber-100">
              <span className="text-2xl">{user.avatar ?? '🦁'}</span>
              <div>
                <p className="font-black text-gray-800 text-sm">{user.name || 'Оқушы'}</p>
                <p className="text-xs font-bold flex items-center gap-1">
                  <Zap size={11} className="text-orange-500" />
                  <span className="shimmer-text">{user.totalPoints ?? 0} ұпай</span>
                </p>
              </div>
            </div>
          )}
          {links.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                isActive(to) ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {icon} {label}
            </Link>
          ))}
          <hr className="border-gray-100 my-1" />
          {user ? (
            <>
              <Link to="/profile" onClick={() => setOpen(false)} className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-blue-50 font-semibold">
                <User size={15} /> Менің кабинетім
              </Link>
              <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm text-red-500 hover:bg-red-50 font-semibold">
                <LogOut size={15} /> Шығу
              </button>
            </>
          ) : (
            <div className="flex gap-2 mt-1">
              <Link to="/login" onClick={() => setOpen(false)} className="flex-1 text-center py-2.5 rounded-xl font-bold text-sm text-blue-600 border-2 border-blue-200 hover:bg-blue-50 transition">Кіру</Link>
              <Link to="/register" onClick={() => setOpen(false)} className="flex-1 text-center py-2.5 rounded-xl font-bold text-sm bg-orange-500 text-white hover:bg-orange-600 transition">Тіркелу</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
