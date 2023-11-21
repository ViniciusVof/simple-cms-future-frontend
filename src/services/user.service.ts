import { get, post, put, remove } from './api_methods';

async function AuthUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await post('users/authenticate', { email, password });

  return response;
}

async function CreateUser({
  email,
  fullName,
  password,
}: {
  email: string;
  password: string;
  fullName: string;
}) {
  const response = await post('/users/create', { email, password, fullName });

  return response;
}

async function GetUsers() {
  const response = await get('/users/listAll');

  return response;
}

async function GetUser(id: string) {
  const response = await get(`/users/find/${id}`);

  return response;
}

async function UpdateUser(
  id: string,
  {
    fullName,
    password,
  }: {
    fullName: string;
    password: string;
  }
) {
  const response = await put(`/users/update/${id}`, { fullName, password });

  return response;
}

async function DeleteUser(id: string) {
  const response = await remove(`/users/delete/${id}`);

  return response;
}

export default {
  AuthUser,
  CreateUser,
  GetUsers,
  GetUser,
  UpdateUser,
  DeleteUser,
};
