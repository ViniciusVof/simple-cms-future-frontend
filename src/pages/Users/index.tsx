import * as Components from 'components';
import { ModalCRUD } from 'components/Modal';
import { Table } from 'components/Table';
import useUsers from 'hooks/useUsers';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Users() {
  const [modalOpen, setModalOpen] = useState(true);
  const { users, getUser, deleteUser } = useUsers();
  const navigate = useNavigate();

  async function handleEdit(id: string) {
    getUser(id, user => navigate(`/user`, { state: { id, user } }));
  }

  async function handleDelete(id: string) {
    deleteUser(id);
  }

  return (
    <>
      <ModalCRUD
        title="Adicionar usuários"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        fields={[
          {
            name: 'fullName',
            type: 'text',
            placeholder: 'Digite o nome completo',
            fullWidth: true,
          },
          {
            name: 'email',
            type: 'email',
            placeholder: 'Digite o e-mail',
            fullWidth: true,
          },
          {
            name: 'password',
            type: 'password',
            placeholder: 'Digite a senha',
            fullWidth: true,
          },
          // {
          //   name: 'type',
          //   type: 'select',
          //   placeholder: 'Selecione o tipo de usuário',
          //   fullWidth: true,
          //   options: [
          //     { value: 'admin', label: 'Administrador' },
          //     { value: 'user', label: 'Usuário' },
          //   ],
          // },
        ]}
      >
        teste
      </ModalCRUD>
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
    </>
  );
}
