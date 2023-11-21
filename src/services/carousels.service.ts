import { get, post, put, remove } from './api_methods';

async function GetCarousels() {
  const response = await get('/carousels/listAll');

  return response;
}

async function GetCarousel(id: string) {
  const response = await get(`/carousels/find/${id}`);

  return response;
}

async function CreateCarousel({ title }: { title: string }) {
  const response = await post('/carousels/create', {
    title,
  });

  return response;
}

async function UpdateCarousel(
  id: string,
  {
    title,
  }: {
    title: string;
  }
) {
  const response = await put(`/carousels/update/${id}`, {
    title,
  });

  return response;
}

async function DeleteCarousel(id: string) {
  const response = await remove(`/carousels/delete/${id}`);

  return response;
}

export default {
  GetCarousels,
  GetCarousel,
  CreateCarousel,
  UpdateCarousel,
  DeleteCarousel,
};
