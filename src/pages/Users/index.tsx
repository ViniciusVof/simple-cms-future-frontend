import * as Components from 'components';
import { Table } from 'components/Table';
import useUsers from 'hooks/useUsers';

export function Users() {
  const { users } = useUsers();

  return (
    <Components.Layout titleSEO="Usuários">
      <Table
        columns={[
          { id: 'id', label: 'ID' },
          { id: 'fullName', label: 'Nome' },
          { id: 'email', label: 'E-mail' },
          { id: 'created_at', label: 'Criado Em' },
        ]}
        rows={users}
      />
    </Components.Layout>
  );
}
