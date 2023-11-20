import * as S from './styles';
import { TextField } from 'components/TextField';
import { Button } from 'components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { useContext } from 'react';
import { AuthContext } from 'contexts/UserContext';

export function Register() {
  const schema = yup
    .object()
    .shape({
      fullName: yup.string().required('Campo obrigatório'),
      email: yup
        .string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      password: yup.string().required('Campo obrigatório'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { signUp } = useContext(AuthContext);

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(signUp)}>
        <TextField
          type="text"
          placeholder="Digite seu nome completo"
          fullWidth={true}
          error={errors.fullName?.message}
          {...register('fullName')}
        />
        <TextField
          type="text"
          placeholder="Digite seu e-mail"
          fullWidth={true}
          error={errors.email?.message}
          {...register('email')}
        />
        <TextField
          type="password"
          placeholder="Digite sua senha"
          fullWidth={true}
          error={errors.password?.message}
          {...register('password')}
        />
        <Button
          type="submit"
          fullWidth={true}
          variant="primary"
          loading={isLoading}
        >
          Cadastrar
        </Button>
      </S.Form>
    </S.Container>
  );
}
