import * as React from 'react';
import { TableRow } from './row';
import { CellFiller } from './cell-filler';

interface Props {
  rows?: number;
  columns: number;
}

const TableFiller: React.FunctionComponent<Props> = (props: Props) => {
  const { rows, columns } = props;
  const width = 100 / columns;
  const fillerRender = [...Array(rows)].map(() => (
    <TableRow key="key">
      {[...Array(columns)].map(() => (
        <CellFiller key="filler-key" width={`${width}%`} />
      ))}
    </TableRow>
  ));
  return <>{fillerRender}</>;
};

TableFiller.defaultProps = {
  columns: 5,
};

export { TableFiller };
