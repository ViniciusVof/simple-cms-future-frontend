import { SEO } from 'components/SEO';
import { ReactNode } from 'react';
import { SidebarMenu } from './SidebarMenu';

import { Container, Content, Title, Header } from './styles';
import { Button } from 'components/Button';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}
interface LayoutProps {
  children?: ReactNode;
  titleSEO?: string;
  button?: ButtonProps;
}

export function Layout({ children, titleSEO, button }: LayoutProps) {
  return (
    <>
      <SEO title={titleSEO} />
      <Container>
        <SidebarMenu />
        <Content>
          <Header>
            <Title>{titleSEO}</Title>
            {button && (
              <Button
                type="button"
                onClick={button.onClick}
                variant={button.variant}
              >
                {button.children}
              </Button>
            )}
          </Header>
          {children}
        </Content>
      </Container>
    </>
  );
}
