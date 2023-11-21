import * as Components from 'components';
import { ModalCRUD } from 'components/ModalCRUD';
import { Table } from 'components/Table';
import useCarousels from 'hooks/useCarousels';
import { useState } from 'react';
import * as yup from 'yup';

export function Carousels() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);
  const {
    carousels,
    getCarousel,
    updateCarousel,
    addCarousel,
    deleteCarousel,
  } = useCarousels();
  const schema = yup
    .object()
    .shape({
      title: yup.string().required('Campo obrigatório'),
    })
    .required();

  async function handleEdit(id: string) {
    getCarousel(id, carousel => {
      setEditData(carousel);
      setModalOpen(true);
    });
  }

  async function handleDelete(id: string) {
    deleteCarousel(id);
  }

  return (
    <>
      <ModalCRUD
        pluralTitle="Carrosséis"
        title="Carrossel"
        isOpen={modalOpen}
        onSubmit={data =>
          editData ? updateCarousel(data.id, data) : addCarousel(data)
        }
        onClose={() => {
          setModalOpen(false);
          setEditData(null);
        }}
        editData={editData}
        fields={[
          {
            name: 'title',
            type: 'text',
            placeholder: 'Digite o título',
            fullWidth: true,
          },
        ]}
        schema={schema}
      />
      <Components.Layout
        titleSEO="Carrosséis"
        button={{
          children: 'Novo Carrossel',
          onClick: () => setModalOpen(true),
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
    </>
  );
}
