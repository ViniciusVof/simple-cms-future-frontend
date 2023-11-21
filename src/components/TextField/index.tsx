import { Error, Input } from './styles';
import React from 'react';

type TextFieldProps = {
  placeholder: string;
  fullWidth?: boolean;
  type: string;
  error?: string;
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      placeholder = '',
      fullWidth = false,
      type = 'text',
      error,
      ...rest
    }: TextFieldProps,
    ref
  ) => {
    return (
      <>
        <Input
          type={type}
          placeholder={placeholder}
          fullWidth={fullWidth}
          ref={ref}
          {...rest}
        />
        <Error error={!!error}>{error}</Error>
      </>
    );
  }
);
