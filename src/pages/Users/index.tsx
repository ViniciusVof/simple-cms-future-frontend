import * as Components from 'components';
import { ModalCRUD } from 'components/Modal';
import { Table } from 'components/Table';
import useUsers from 'hooks/useUsers';
import { useState } from 'react';
import * as yup from 'yup';

export function Users() {
  const [modalOpen, setModalOpen] = useState(false);
  const { users, getUser, deleteUser, addUser, editUser } = useUsers();
  const [editData, setEditData] = useState<any>(null);

  async function handleEdit(id: string) {
    getUser(id, user => {
      setEditData(user);
      setModalOpen(true);
    });
  }

  async function handleDelete(id: string) {
    deleteUser(id);
  }

  const UserRegisterSchema = yup
    .object()
    .shape({
      fullName: yup.string().required('Campo obrigatório'),
      email: yup
        .string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      password: yup.string().required('Campo obrigatório'),
    })
    .required();

  return (
    <>
      <ModalCRUD
        title="Usuário"
        isOpen={modalOpen}
        onSubmit={data => (editData ? editUser(data.id, data) : addUser(data))}
        onClose={() => {
          setModalOpen(false);
          setEditData(null);
        }}
        schema={UserRegisterSchema}
        editData={editData}
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
        ]}
      />
      <Components.Layout
        titleSEO="Usuários"
        button={{
          children: 'Novo Usuário',
          onClick: () => {
            setEditData(null);
            setModalOpen(true);
          },
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
