import styled from 'styled-components';

export const SidebarMenuContainer = styled.div`
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #e4e4e4;
  height: 100vh;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 40px 0;
`;

export const SidebarMenuItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e4e4e4;
  }
`;

export const SidebarMenuLink = styled.a`
  color: #000;
  text-decoration: none;
  display: block;
  padding: 10px 0;
`;

export const SidebarMenuIcon = styled.span`
  margin-right: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`;
