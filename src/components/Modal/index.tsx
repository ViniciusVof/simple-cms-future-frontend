import { useState } from 'react';
import * as S from './styles';

import { CgClose } from 'react-icons/cg';
import { TextField } from 'components/TextField';

type OptionProps = {
  value: string;
  label: string;
};

type FieldsProps = {
  name: string;
  type: 'text' | 'password' | 'email' | 'select';
  placeholder: string;
  fullWidth: boolean;
  error?: string;
  options?: OptionProps[];
};

type ModalCRUDProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  fields: FieldsProps[];
};

export function ModalCRUD({
  title,
  children,
  isOpen,
  onClose,
  fields,
}: ModalCRUDProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  function handleCloseModal() {
    setIsModalOpen(false);
    onClose();
  }

  return (
    isModalOpen && (
      <S.Container>
        <S.Modal>
          <S.Title>{title}</S.Title>
          <S.CloseButton onClick={handleCloseModal}>
            <CgClose size={20} />
          </S.CloseButton>
          <h1>Modal</h1>
          <S.Form>
            {fields.map(field => {
              return (
                <TextField
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  fullWidth={field.fullWidth}
                  error={field.error}
                />
              );
            })}
          </S.Form>
          {children}
        </S.Modal>
      </S.Container>
    )
  );
}
