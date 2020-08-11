import React, { createContext, useContext, useState, useCallback } from 'react';
import api from '../services/api';

interface User {
  id: string;
  nome: string;
  email: string;
  is_agent: boolean;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
}

interface AuthState {
  user: User;
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('auth/signin', {
      email,
      password,
    });

    const { tokenAcesso, user } = response.data;
    localStorage.setItem('@GoBarber:token', tokenAcesso);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));
    api.defaults.headers.authorization = `Bearer ${tokenAcesso}`;

    setData({ token: tokenAcesso, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
