import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as Pages from 'pages';
import { AppProvider } from 'contexts/AppContext';

const routes = [
  { path: '/', element: <Pages.Home /> },
  { path: '/login', element: <Pages.Login /> },
  { path: '/about', element: <Pages.About /> },
  { path: '/register', element: <Pages.Register /> },
];

export function Router() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
