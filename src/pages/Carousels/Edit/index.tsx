import * as Components from 'components';
import { Button } from 'components/Button';
import { TextField } from 'components/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLocation } from 'react-router-dom';
import useCarousels from 'hooks/useCarousels';

type CarouselRequest = {
  title: string;
};

export function EditCarousel() {
  const { state } = useLocation();
  const { updateCarousel } = useCarousels();
  const { id, carousel } = state as { id: string; carousel: CarouselRequest };

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
  } = useForm<CarouselRequest>({
    defaultValues: {
      title: carousel?.title,
    },
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: CarouselRequest) {
    await updateCarousel(id, data);
  }

  return (
    <Components.Layout titleSEO="Adicionar Usuário">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="text"
          placeholder="Digite o título"
          fullWidth={true}
          error={errors.title?.message}
          {...register('title', { value: carousel?.title })}
        />

        <Button type="submit" loading={isLoading} fullWidth={true}>
          Adicionar
        </Button>
      </form>
    </Components.Layout>
  );
}
