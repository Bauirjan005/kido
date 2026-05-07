import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);
const STORAGE_KEY = 'kido_user';

function loadUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveUser(user) {
  if (user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => loadUser());

  const login = useCallback((userData) => {
    const enriched = {
      totalPoints: 0,
      completedLessons: 0,
      courseProgress: 0,
      currentCourse: 'Animals Vocabulary',
      joinDate: new Date().toLocaleDateString('kk-KZ', { month: 'long', year: 'numeric' }),
      avatar: '🦁',
      ...userData,
    };
    saveUser(enriched);
    setUser(enriched);
  }, []);

  const logout = useCallback(() => {
    saveUser(null);
    setUser(null);
  }, []);

  const addPoints = useCallback((amount) => {
    setUser(prev => {
      if (!prev) return prev;
      const updated = {
        ...prev,
        totalPoints: (prev.totalPoints || 0) + amount,
        completedLessons: (prev.completedLessons || 0) + 1,
      };
      saveUser(updated);
      return updated;
    });
  }, []);

  const updateProfile = useCallback((fields) => {
    setUser(prev => {
      if (!prev) return prev;
      const updated = { ...prev, ...fields };
      saveUser(updated);
      return updated;
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, addPoints, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
