import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextField = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  padding: 0 16px;
  margin-bottom: 16px;
`;
