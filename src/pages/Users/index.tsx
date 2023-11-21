import * as Components from 'components';
import { Table } from 'components/Table';
import useUsers from 'hooks/useUsers';
import { useNavigate } from 'react-router-dom';

export function Users() {
  const { users, getUser, deleteUser } = useUsers();
  const navigate = useNavigate();

  async function handleEdit(id: string) {
    getUser(id, user => navigate(`/user`, { state: { id, user } }));
  }

  async function handleDelete(id: string) {
    deleteUser(id);
  }

  return (
    <Components.Layout
      titleSEO="Usuários"
      button={{
        children: 'Novo Usuário',
        onClick: () => navigate('/users/add'),
        variant: 'primary',
      }}
    >
      <Table
        columns={[
          { id: 'id', label: 'ID' },
          { id: 'fullName', label: 'Nome' },
          { id: 'email', label: 'E-mail' },
          { id: 'created_at', label: 'Criado Em' },
        ]}
        rows={users}
        actionData={[
          {
            action: id => handleEdit(id),
            type: 'edit',
          },
          {
            action: id => handleDelete(id),
            type: 'delete',
          },
        ]}
      />
    </Components.Layout>
  );
}
