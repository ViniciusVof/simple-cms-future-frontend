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
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  transition: border-color 0.5s;

  &:focus {
    border-color: #bbb;
  }
`;

interface ErrorProps {
  error: boolean;
}

export const Error = styled.span<ErrorProps>`
  visibility: ${({ error }) => (error ? 'block' : 'hidden')};
  color: #f00;
  font-size: 14px;
  padding-top: 8px;
  height: 36px;
  align-self: flex-start;
`;
