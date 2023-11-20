import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'routes';

export function Loader() {
  return (
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  );
}
