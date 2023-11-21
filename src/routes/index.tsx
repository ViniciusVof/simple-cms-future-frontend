import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import * as Pages from 'pages';
import { AppProvider } from 'contexts/AppContext';

const routes = [
  { path: '/dashboard', element: <Pages.Dashboard />, private: true },
  { path: '/login', element: <Pages.Login />, private: false },
  { path: '/register', element: <Pages.Register />, private: false },
  { path: '/users', element: <Pages.Users />, private: true },
  { path: '/carousels', element: <Pages.Carousels />, private: true },
];

export function Router() {
  const isAuthenticated = localStorage.getItem('@future:token');
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
          {routes.map(route => {
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
