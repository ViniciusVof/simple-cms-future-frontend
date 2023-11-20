import { AppContext } from 'contexts/AppContext';
import { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import userService from 'services/user.service';

type UserResponse = {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};

const useUsers = () => {
  const { setLoading } = useContext(AppContext);
  const [users, setUsers] = useState<UserResponse[]>([]);

  async function loadUsers() {
    setLoading(true);
    userService
      .GetUsers()
      .then(response => {
        const adaptUser = (response.data as UserResponse[]).map(user => {
          user.created_at = new Date(user.created_at).toLocaleDateString(
            'pt-br'
          );
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
  useEffect(() => {
    loadUsers();
  }, []);

  return { users };
};

export default useUsers;
