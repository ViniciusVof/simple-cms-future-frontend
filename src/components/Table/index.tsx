import * as S from './styles';

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

interface TableProps {
  columns: Columns[];
  rows: Rows[];
}

export function Table({ columns, rows }: TableProps) {
  return (
    <S.Table>
      <S.TableHead>
        <S.TableHeadRow>
          {columns.map(column => (
            <S.TableHeadCell key={column.id}>{column.label}</S.TableHeadCell>
          ))}
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
          </S.TableBodyRow>
        ))}
      </S.TableBody>
    </S.Table>
  );
}
