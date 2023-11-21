import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f9f9f9;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: #274060;
  margin-bottom: 20px;
`;
