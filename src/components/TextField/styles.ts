import styled from 'styled-components';

interface InputProps {
  fullWidth?: boolean;
}

export const Input = styled.input<InputProps>`
  padding: 16px;
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  margin-bottom: 36px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  transition: border-color 0.5s;

  &:focus {
    border-color: #bbb;
  }
`;

export const Error = styled.span`
  color: #f00;
  font-size: 14px;
  margin-top: -28px;
  margin-bottom: 18px;
  align-self: flex-start;
`;
