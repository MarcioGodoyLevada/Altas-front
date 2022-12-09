import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';

import { api } from '../services/api';
import { AuthService } from '../services/auth';
import { User, UserService } from '../services/user';

type Token = {
  sub: string;
  id: string;
  exp: string;
  iat: string;
};

export type SessionContextType = {
  signin: (email: string, password: string) => Promise<void>;
  user?: User | null;
};

export const SessionContext = createContext<SessionContextType | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>();

  const navigate = useNavigate();

  const getUser = useCallback(
    async (token: string) => {
      if (token) {
        const decode: Token = jwt(token!);

        if (decode.id) {
          try {
            const data = await UserService.getOwner();
            if (data) {
              setUser(data);
            }
          } catch (error) {
            console.error(error);
          }
        }
      } else {
        setTimeout(() => {
          navigate('/');
        }, 240);
        return;
      }
    },
    [navigate]
  );

  async function signin(email: string, password: string) {
    await AuthService.signIn(email, password).then((data) => {
      localStorage.setItem('token', data.token);
      api.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;

      getUser(data.token);
    });

    navigate('/friends');
  }

  useLayoutEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.common['Authorization'] = 'Bearer ' + token;

      getUser(token);
    }
  }, [getUser]);

  useEffect(() => {
    api.interceptors.response.use(
      (response) => response,

      (error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token');

          delete api.defaults.headers.common['Authorization'];

          navigate('/');

          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
    );
  }, [navigate]);

  return (
    <SessionContext.Provider value={{ signin, user }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionContextType {
  const data = useContext(SessionContext);

  if (!data) {
    throw new Error('Contexto de sessão não encontrado!');
  }

  return data;
}
