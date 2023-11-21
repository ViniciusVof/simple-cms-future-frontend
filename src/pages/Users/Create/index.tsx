import * as Components from 'components';
import { Button } from 'components/Button';
import { TextField } from 'components/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useUsers from 'hooks/useUsers';

export function CreateUser() {
  const { addUser } = useUsers();
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
  return (
    <Components.Layout titleSEO="Adicionar Usuário">
      <form onSubmit={handleSubmit(addUser)}>
        <TextField
          type="text"
          placeholder="Digite o nome completo"
          fullWidth={true}
          error={errors.fullName?.message}
          {...register('fullName')}
        />
        <TextField
          type="text"
          placeholder="Digite o e-mail"
          fullWidth={true}
          error={errors.email?.message}
          {...register('email')}
        />
        <TextField
          type="password"
          placeholder="Digite a senha"
          fullWidth={true}
          error={errors.password?.message}
          {...register('password')}
        />
        <Button type="submit" loading={isLoading} fullWidth={true}>
          Adicionar
        </Button>
      </form>
    </Components.Layout>
  );
}
