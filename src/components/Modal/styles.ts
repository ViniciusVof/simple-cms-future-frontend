import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 400px;
  min-height: 400px;
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  border: none;
  background-color: transparent;
  font-size: 24px;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
