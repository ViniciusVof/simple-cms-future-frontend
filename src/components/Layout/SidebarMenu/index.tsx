import * as S from './styles';

import { FaHome, FaList, FaUser, FaImages, FaFileImage } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

export function SidebarMenu() {
  const pages = [
    {
      title: 'Home',
      url: '/',
      icon: <FaHome />,
    },
    {
      title: 'Páginas',
      url: '/pages',
      icon: <FaList />,
    },
    {
      title: 'Carrosséis',
      url: '/carousels',
      icon: <FaImages />,
    },
    { title: 'Imagens', url: '/images', icon: <FaFileImage /> },
    { title: 'Usuários', url: '/users', icon: <FaUser /> },
    { title: 'Sair', url: '/logout', icon: <MdLogout /> },
  ];
  return (
    <S.SidebarMenuContainer>
      <S.SidebarMenu>
        {pages.map(page => (
          <S.SidebarMenuItem key={page.title}>
            <S.SidebarMenuIcon>{page.icon}</S.SidebarMenuIcon>
            <S.SidebarMenuLink href={page.url}>{page.title}</S.SidebarMenuLink>
          </S.SidebarMenuItem>
        ))}
      </S.SidebarMenu>
    </S.SidebarMenuContainer>
  );
}
