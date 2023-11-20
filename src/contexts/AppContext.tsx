import { ReactNode, createContext, useState } from 'react';

import { Loading } from 'components/Loading';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './UserContext';

type AppContextData = {
  setLoading: (loading: boolean) => void;
};

type AppProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{ setLoading }}>
      <AuthProvider>{loading ? <Loading /> : children}</AuthProvider>
      <ToastContainer />
    </AppContext.Provider>
  );
}
