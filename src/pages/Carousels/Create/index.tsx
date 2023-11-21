import * as Components from 'components';
import { Button } from 'components/Button';
import { TextField } from 'components/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useCarousels from 'hooks/useCarousels';

export function CreateCarousel() {
  const { addCarousel } = useCarousels();
  const schema = yup
    .object()
    .shape({
      title: yup.string().required('Campo obrigatório'),
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
    <Components.Layout titleSEO="Adicionar Carrossel">
      <form onSubmit={handleSubmit(addCarousel)}>
        <TextField
          type="text"
          placeholder="Digite o título"
          fullWidth={true}
          error={errors.title?.message}
          {...register('title')}
        />

        <Button type="submit" loading={isLoading} fullWidth={true}>
          Adicionar
        </Button>
      </form>
    </Components.Layout>
  );
}
