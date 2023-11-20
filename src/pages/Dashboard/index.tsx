import * as Components from 'components';
import { Table } from 'components/Table';

export function Dashboard() {
  return (
    <Components.Layout titleSEO="Dashboard">
      <h1>Dashboard</h1>
      <Table
        columns={[
          { id: 'id', label: 'ID' },
          { id: 'title', label: 'Título' },
          { id: 'content', label: 'Conteúdo' },
        ]}
        rows={[
          {
            id: '1',
            title: 'Leanne Graham',
            content: 'Bret',
          },
          {
            id: '1',
            title: 'Leanne Graham',
            content: 'Bret',
          },
          {
            id: '1',
            title: 'Leanne Graham',
            content: 'Bret',
          },
        ]}
      />
    </Components.Layout>
  );
}
