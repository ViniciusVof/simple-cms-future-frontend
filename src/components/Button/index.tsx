import { ReactNode } from 'react';
import * as S from './styles';
import { FaSpinner } from 'react-icons/fa';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  variant?: 'primary' | 'secondary';
};
export function Button({
  children,
  disabled = false,
  fullWidth = false,
  type = 'button',
  loading = false,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <S.Button
      type={type}
      disabled={loading ? true : disabled}
      fullWidth={fullWidth}
      variant={variant}
      {...rest}
    >
      {loading ? <FaSpinner color="#FFF" size={24} /> : children}
    </S.Button>
  );
}
