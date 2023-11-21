import * as Components from 'components';
import { Button } from 'components/Button';
import { TextField } from 'components/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useUsers from 'hooks/useUsers';
import { useLocation } from 'react-router-dom';

type UserRequest = {
  fullName: string;
  email: string;
  password: string;
};

export function EditUser() {
  const { state } = useLocation();
  const { editUser } = useUsers();
  const { id, user } = state as { id: string; user: UserRequest };

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
  } = useForm<UserRequest>({
    defaultValues: {
      fullName: user?.fullName,
      email: user?.email,
      password: user?.password,
    },
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: UserRequest) {
    await editUser(id, data);
  }

  return (
    <Components.Layout titleSEO="Editar Usuário">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="text"
          placeholder="Digite o nome completo"
          fullWidth={true}
          error={errors.fullName?.message}
          {...register('fullName', { value: user?.fullName })}
        />
        <TextField
          type="text"
          placeholder="Digite o e-mail"
          fullWidth={true}
          error={errors.email?.message}
          {...register('email', { value: user?.email })}
        />
        <TextField
          type="password"
          placeholder="Digite a senha"
          fullWidth={true}
          error={errors.password?.message}
          {...register('password', { value: user?.password })}
        />
        <Button type="submit" loading={isLoading} fullWidth={true}>
          Editar
        </Button>
      </form>
    </Components.Layout>
  );
}
