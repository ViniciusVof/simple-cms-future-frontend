import styled from 'styled-components';

interface SelectProps {
  fullWidth: boolean;
}

export const Container = styled.div<SelectProps>`
  .react-select__control {
    padding: 8px;
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
  }
  .react-select__control--is-focused {
    border: 1px solid;
    border-color: #bbb !important;
    box-shadow: none;
  }

  .react-select__value-container {
    padding: 0;
  }
`;

interface ErrorProps {
  error: boolean;
}
export const Error = styled.span<ErrorProps>`
  display: block;
  visibility: ${({ error }) => (error ? 'block' : 'hidden')};
  color: #f00;
  font-size: 14px;
  padding-top: 8px;
  height: 36px;
  align-self: flex-start;
`;
