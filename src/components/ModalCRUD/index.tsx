import { useEffect } from 'react';
import * as S from './styles';

import { CgClose } from 'react-icons/cg';
import { TextField } from 'components/TextField';
import { Select } from 'components/Select';
import { FieldError, useForm } from 'react-hook-form';
import { Button } from 'components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { capitalize } from 'utils';

type OptionProps = {
  value: string;
  label: string;
};

type FieldsProps = {
  name: string;
  type: 'text' | 'password' | 'email' | 'select';
  placeholder: string;
  fullWidth: boolean;
  options?: OptionProps[];
};

type ModalCRUDProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  fields: FieldsProps[];
  schema: any;
  editData: any;
  title: string;
  pluralTitle: string;
};

type SelectFieldError = {
  value: FieldError;
  label: FieldError;
};
export function ModalCRUD({
  children,
  isOpen,
  onClose,
  onSubmit,
  fields,
  schema,
  editData,
  title,
  pluralTitle,
}: ModalCRUDProps) {
  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function loadValuesData(cleanValues: boolean = false) {
    if (!editData) return;
    if (cleanValues) {
      Object.keys(editData).forEach(key => {
        setValue(key, '');
      });
    } else {
      Object.keys(editData).forEach(key => {
        setValue(key, editData[key]);
      });
    }
  }

  function handleCloseModal() {
    loadValuesData(true);
    onClose();
  }

  function getTitles() {
    const isEdit = !!editData;

    const formattedTitle = capitalize(title);

    const formattedPluralTitle = capitalize(pluralTitle);

    const listTypesTitles = {
      addTitle: `Adicionar ${formattedPluralTitle}`,
      editTitle: `Editar ${formattedTitle}`,
      addButton: `Adicionar ${formattedTitle}`,
      editButton: `Editar ${formattedTitle}`,
    };

    return {
      title: isEdit ? listTypesTitles.editTitle : listTypesTitles.addTitle,
      button: isEdit ? listTypesTitles.editButton : listTypesTitles.addButton,
    };
  }

  function handleSubmited(data: any) {
    onSubmit(data);
    handleCloseModal();
  }

  useEffect(() => {
    loadValuesData();
  }, [editData]);

  return (
    isOpen && (
      <S.Container>
        <S.Modal>
          <S.Title>{getTitles().title}</S.Title>
          <S.CloseButton onClick={handleCloseModal}>
            <CgClose size={20} />
          </S.CloseButton>
          <S.Form onSubmit={handleSubmit(handleSubmited)}>
            {fields.map(field => {
              if (field.type === 'select') {
                return (
                  <Select
                    name={field.name}
                    key={field.name}
                    fullWidth={field.fullWidth}
                    error={
                      (errors[field.name] as SelectFieldError)?.value
                        .message as string
                    }
                    control={control}
                    options={field.options || []}
                  />
                );
              }
              return (
                <TextField
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  fullWidth={field.fullWidth}
                  error={errors[field.name]?.message as string}
                  {...register(field.name, { required: true })}
                />
              );
            })}
            <Button type="submit" loading={isLoading} fullWidth={true}>
              {getTitles().button}
            </Button>
          </S.Form>
          {children && children}
        </S.Modal>
      </S.Container>
    )
  );
}
