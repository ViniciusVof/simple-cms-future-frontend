import userService from 'services/user.service';
import { toast } from 'react-toastify';

import { createContext, ReactNode, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

type UserProps = {
  id: string;
  fullName: string;
  email: string;
};

type SignInProps = {
  email: string;
  password: string;
};

type SignUpProps = {
  fullName: string;
  email: string;
  password: string;
};

type AuthContextData = {
  user: UserProps | null;
  signIn: (data: SignInProps) => void;
  signUp: (data: SignUpProps) => void;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProps | null>(null);
  const token = localStorage.getItem('@future:token');

  function saveToken(token: string) {
    localStorage.setItem('@future:token', token);
  }

  async function signIn({ email, password }: SignInProps) {
    userService
      .AuthUser({ email, password })
      .then(response => {
        if (!response.data) {
          toast.error('Usuário não encontrado');
          return;
        }
        const { token, user } = response.data as {
          token: string;
          user: UserProps;
        };
        saveToken(token);
        setUser(user);
        toast.success('Login realizado com sucesso!');
        navigate('/dashboard');
      })
      .catch(error => {
        console.log(error.response.data.message);
        toast.error(error?.response?.data?.message || 'Erro ao realizar login');
      });
  }

  function signUp({ fullName, email, password }: SignUpProps) {
    userService
      .CreateUser({ fullName, email, password })
      .then(() => {
        toast.success('Usuário cadastrado com sucesso!');
        navigate('/login');
      })
      .catch(error => {
        console.log(error.response.data.message);
        toast.error(
          error?.response?.data?.message || 'Erro ao cadastrar usuário'
        );
      });
  }

  function signOut() {
    localStorage.removeItem('@future:token');
    setUser(null);
  }

  useEffect(() => {
    if (token && !user) {
      const userDecoded = jwtDecode(token) as UserProps;
      setUser(userDecoded);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
