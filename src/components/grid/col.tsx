import * as React from 'react';
import * as cx_ from 'classnames';

const cx = cx_;
import styles from './styles.scss';

interface Props {
  children?: React.ReactNode;
  className?: string,
  style?: object,
  s?: number,
  m?: number,
  l?: number,
}

export const Col: React.FunctionComponent<Props> = (props: Props) => {
  const { className, s, m, l, style, children } = props;

  return (
    <div {...props} className={cx(styles[`col${s}`], styles[`col${m}`], styles[`col${l}`], className)} style={style}>
      {children}
    </div>
  )
}

Col.defaultProps = {};
