import { SEO } from 'components/SEO';
import { ReactNode } from 'react';
import { SidebarMenu } from './SidebarMenu';

import { Container, Content, Title } from './styles';

interface LayoutProps {
  children?: ReactNode;
  titleSEO?: string;
}

export function Layout({ children, titleSEO }: LayoutProps) {
  return (
    <>
      <SEO title={titleSEO} />
      <Container>
        <SidebarMenu />
        <Content>
          <Title>{titleSEO}</Title>
          {children}
        </Content>
      </Container>
    </>
  );
}
