import { AppContext } from 'contexts/AppContext';
import { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import userService from 'services/user.service';
import formatDate from 'utils/formatDate';

type UserResponse = {
  id: string;
  fullName: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
};

type AddUserRequest = {
  fullName: string;
  email: string;
  password: string;
};

const useUsers = () => {
  const { setLoading } = useContext(AppContext);
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [user, setUser] = useState<UserResponse>();

  function addUser({ fullName, email, password }: AddUserRequest) {
    userService
      .CreateUser({ fullName, email, password })
      .then(() => {
        toast.success('Usuário cadastrado com sucesso!');
        loadUsers();
      })
      .catch(error => {
        console.log(error.response.data.message);
        toast.error(
          error?.response?.data?.message || 'Erro ao cadastrar usuário'
        );
      });
  }

  async function loadUsers() {
    setLoading(true);
    userService
      .GetUsers()
      .then(response => {
        const adaptUser = (response.data as UserResponse[]).map(user => {
          user.created_at = formatDate(user.created_at);
          return user;
        });
        setUsers(adaptUser);
      })
      .catch(error => {
        toast.error(
          error.response?.data?.message || 'Erro ao carregar usuários'
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function deleteUser(id: string) {
    userService
      .DeleteUser(id)
      .then(() => {
        toast.success('Usuário deletado com sucesso!');
        loadUsers();
      })
      .catch(error => {
        toast.error(error.response?.data?.message || 'Erro ao deletar usuário');
      });
  }

  async function editUser(id: string, data: AddUserRequest) {
    userService
      .UpdateUser(id, data)
      .then(() => {
        toast.success('Usuário atualizado com sucesso!');
        loadUsers();
      })
      .catch(error => {
        toast.error(
          error.response?.data?.message || 'Erro ao atualizar usuário'
        );
      });
  }

  function getUser(id: string, callback: (user: UserResponse) => void) {
    userService
      .GetUser(id)
      .then(response => {
        setUser(response.data as UserResponse);
        callback && callback(response.data as UserResponse);
        return { user: response.data };
      })
      .catch(error => {
        toast.error(
          error.response?.data?.message || 'Erro ao carregar usuário'
        );
      });
  }
  useEffect(() => {
    loadUsers();
  }, []);

  return { users, addUser, deleteUser, editUser, getUser, user };
};

export default useUsers;
