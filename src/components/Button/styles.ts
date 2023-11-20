import styled, { keyframes } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const animateLoading = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button<ButtonProps>`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  height: 48px;
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.variant === 'primary' ? '#2f80ed' : '#f2f2f2'};
  color: ${props => (props.variant === 'primary' ? '#ffffff' : '#4f4f4f')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;

  svg {
    animation: ${animateLoading} 2s infinite;
  }

  &:hover {
    background-color: ${props =>
      props.variant === 'primary' ? '#2aa4ff' : '#e4e4e4'};
  }

  &:disabled {
    opacity: 0.6;
  }
`;
