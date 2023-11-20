import { SEO } from 'components/SEO';
import { ReactNode } from 'react';

interface LayoutProps {
  children?: ReactNode;
  titleSEO?: string;
}

export function Layout({ children, titleSEO }: LayoutProps) {
  return (
    <>
      <SEO title={titleSEO} />
      {children}
    </>
  );
}
