import React from 'react';
import ReactSelect from 'react-select';
import { Controller } from 'react-hook-form';
import * as S from './styles';

interface OptionProps {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  fullWidth: boolean;
  options: OptionProps[];
  error?: string;
  control: any;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, fullWidth, options, error, control, ...rest }: SelectProps) => {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <S.Container fullWidth={fullWidth}>
              <ReactSelect
                // styles={{
                //   control: (baseStyles, state) => ({
                //     ...baseStyles,
                //     width: fullWidth ? '100%' : 'auto',
                //     padding: '8px',
                //     height: 'auto',
                //     border: state.isFocused
                //       ? '1px solid #bbb'
                //       : '1px solid #e4e4e4',
                //     outline: 'none',
                //   }),
                // }}
                className="react-select-container"
                classNamePrefix="react-select"
                options={options}
                onChange={field.onChange}
                value={field.value}
                {...rest}
              />
              <S.Error error={!!error}>{error}</S.Error>
            </S.Container>
          );
        }}
      />
    );
  }
);
