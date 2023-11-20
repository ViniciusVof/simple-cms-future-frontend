import { TextField } from 'components/TextField';
import * as S from './styles';
import { Button } from 'components/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import { AuthContext } from 'contexts/UserContext';

export function Login() {
  const schema = yup
    .object()
    .shape({
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

  const { signIn } = useContext(AuthContext);

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(signIn)}>
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
          loading={isLoading}
          fullWidth={true}
          variant="primary"
        >
          Entrar
        </Button>
      </S.Form>
    </S.Container>
  );
}
