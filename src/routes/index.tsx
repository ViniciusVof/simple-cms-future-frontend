import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as Pages from 'pages';
import { AppProvider } from 'contexts/AppContext';

const routes = [
  { path: '/dashboard', element: <Pages.Dashboard />, private: true },
  { path: '/login', element: <Pages.Login />, private: false },
  { path: '/register', element: <Pages.Register />, private: false },
  { path: '*', element: <Pages.Login />, private: false },
];

export function Router() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          {routes.map(route => {
            const isAuthenticated = localStorage.getItem('@future:token');
            return route.private && !isAuthenticated ? (
              <Route
                key={route.path}
                path={route.path}
                element={<Pages.Login />}
              />
            ) : (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
