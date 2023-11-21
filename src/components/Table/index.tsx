import * as S from './styles';
import { FaPen, FaTrash } from 'react-icons/fa';

interface Columns {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

interface Rows {
  id: string;
  [key: string]: string | number;
}

interface ActionData {
  action: (id: string) => void;
  type: 'edit' | 'delete';
}

interface TableProps {
  columns: Columns[];
  rows: Rows[];
  actionData?: ActionData[];
}

export function Table({ columns, rows, actionData }: TableProps) {
  return (
    <S.Table>
      <S.TableHead>
        <S.TableHeadRow>
          {columns.map(column => (
            <S.TableHeadCell key={column.id}>{column.label}</S.TableHeadCell>
          ))}
          {actionData && <S.TableHeadActionsCell>Ações</S.TableHeadActionsCell>}
        </S.TableHeadRow>
      </S.TableHead>
      <S.TableBody>
        {rows.map(row => (
          <S.TableBodyRow key={row.id}>
            {columns.map(column => (
              <S.TableBodyCell key={column.id}>
                {row[column.id]}
              </S.TableBodyCell>
            ))}
            {actionData && (
              <S.TableBodyActions>
                {actionData.map(action => (
                  <S.TableBodyAction
                    key={action.type}
                    onClick={() => action.action(row.id)}
                  >
                    {action.type === 'edit' && <FaPen />}
                    {action.type === 'delete' && <FaTrash />}
                  </S.TableBodyAction>
                ))}
              </S.TableBodyActions>
            )}
          </S.TableBodyRow>
        ))}
      </S.TableBody>
    </S.Table>
  );
}
