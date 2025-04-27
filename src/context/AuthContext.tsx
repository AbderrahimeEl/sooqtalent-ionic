import { createContext, useContext, useState, ReactNode } from 'react';
import { users } from '../data/users';

export interface User {
  id: number;
  email: string;
  password: string;
  role: 'ADMIN' | 'CLIENT' | 'FREELANCER';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const json = localStorage.getItem('user');
      return json ? (JSON.parse(json) as User) : null;
    } catch {
      return null;
    }
  });

  function login(email: string, password: string): boolean {
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      setUser(found);
      localStorage.setItem('user', JSON.stringify(found));
    }
    return !!found;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be within AuthProvider');
  return ctx;
}
