import * as React from 'react';
import { TableRow } from './row';
import { CellFiller } from './cell-filler';

interface Props {
  rows?: number,
  columns: number,
}



const TableFiller: React.FunctionComponent<Props> = (props: Props) => {
  const { rows, columns } = props;
  const kek = 100 / columns;
  const fillerRender = [...Array(rows)].map(() => (
    <TableRow>
      {[...Array(columns)].map(() => <CellFiller width={`${kek}%`} />)}
    </TableRow>
  ));
  return (
    <React.Fragment>
      { fillerRender }
    </React.Fragment>
  );
}

TableFiller.defaultProps = {
  columns: 5,
};


export { TableFiller };
