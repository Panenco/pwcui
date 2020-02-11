import * as React from 'react';
import { Cell } from './cell';
import s from './styles.scss';

interface Props {
  width?: number;
  marginLeft?: boolean;
  className?: string,
}

const CellFiller: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Cell {...props}>
      <div className={s.fillerWrapper}>
        <div className={s.filler} />
      </div>
    </Cell>
  );
};

export { CellFiller };
