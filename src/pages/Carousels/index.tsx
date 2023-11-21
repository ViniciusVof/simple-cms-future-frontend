import * as Components from 'components';
import { Table } from 'components/Table';
import useCarousels from 'hooks/useCarousels';
import { useNavigate } from 'react-router-dom';

export function Carousels() {
  const { carousels, getCarousel, deleteCarousel } = useCarousels();
  const navigate = useNavigate();

  async function handleEdit(id: string) {
    getCarousel(id, carousel =>
      navigate(`/carousel`, { state: { id, carousel } })
    );
  }

  async function handleDelete(id: string) {
    deleteCarousel(id);
  }

  return (
    <Components.Layout
      titleSEO="Carrosséis"
      button={{
        children: 'Novo Carrossel',
        onClick: () => navigate('/carousels/add'),
        variant: 'primary',
      }}
    >
      <Table
        columns={[
          { id: 'id', label: 'ID' },
          { id: 'title', label: 'Título' },
          { id: 'created_at', label: 'Criado Em' },
        ]}
        rows={carousels}
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
