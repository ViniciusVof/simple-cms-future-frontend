import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import carouselsService from 'services/carousels.service';

type CarouselRequest = {
  title: string;
};
type CarouselResponse = {
  id: string;
  title: string;
};

export default function useCarousels() {
  const navigate = useNavigate();
  const [carousels, setCarousels] = useState<CarouselResponse[]>([]);

  function addCarousel({ title }: CarouselRequest) {
    carouselsService
      .CreateCarousel({ title })
      .then(() => {
        toast.success('Carousel cadastrado com sucesso!');
        navigate('/carousels');
      })
      .catch(error => {
        console.log(error.response.data.message);
        toast.error(
          error?.response?.data?.message || 'Erro ao cadastrar carousel'
        );
      });
  }

  function updateCarousel(id: string, { title }: CarouselRequest) {
    carouselsService
      .UpdateCarousel(id, { title })
      .then(() => {
        toast.success('Carousel atualizado com sucesso!');
        navigate('/carousels');
      })
      .catch(error => {
        console.log(error.response.data.message);
        toast.error(
          error?.response?.data?.message || 'Erro ao atualizar carousel'
        );
      });
  }

  async function deleteCarousel(id: string) {
    carouselsService
      .DeleteCarousel(id)
      .then(() => {
        toast.success('Carousel deletado com sucesso!');
        navigate('/carousels');
      })
      .catch(error => {
        console.log(error.response.data.message);
        toast.error(
          error?.response?.data?.message || 'Erro ao deletar carousel'
        );
      });
  }

  async function getCarousel(
    id: string,
    callback: (user: CarouselResponse) => void
  ) {
    carouselsService
      .GetCarousel(id)
      .then(response => {
        const adaptCarousel = response.data as CarouselResponse;
        callback(adaptCarousel);
      })
      .catch(error => {
        console.log(error.response.data.message);
        toast.error(
          error?.response?.data?.message || 'Erro ao carregar carousel'
        );
      });
  }

  useEffect(() => {
    carouselsService.GetCarousels().then(response => {
      const adaptCarousel = (response.data as CarouselResponse[]).map(
        carousel => {
          return carousel;
        }
      );
      setCarousels(adaptCarousel);
    });
  }, []);

  return {
    carousels,
    addCarousel,
    deleteCarousel,
    getCarousel,
    updateCarousel,
  };
}
