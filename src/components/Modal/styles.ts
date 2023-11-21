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
  width: 600px;
  min-height: 400px;
  background-color: #fff;
  border-radius: 4px;
  padding: 32px;
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

/// Select

export const Select = styled.div`
  position: relative;
  width: 100%;
  user-select: none;
  appearance: none;
  outline: none;
  border: 5px solid #ccc;
  padding: 0 0 0 8px;
  border-radius: 8px;
`;

export const SelectButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  cursor: pointer;
`;

interface SelectOptionsProps {
  isOpen: boolean;
}
export const SelectOptions = styled.div<SelectOptionsProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 5px solid #ccc;
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #fff;
`;

export const SelectOption = styled.div`
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-size: 16px;

  &:hover {
    background-color: #ccc;
  }
`;

export const SelectOptionEmpty = styled.div`
  padding: 8px;
  font-size: 16px;
  color: #ccc;
`;

export const SelectOptionEmptyIcon = styled.span`
  font-size: 24px;
  margin-right: 8px;
`;
