import * as React from 'react';
import * as css_ from 'classnames';

const css = css_;
import s from './styles.scss';

interface Props {
  children?: React.ReactNode;
  className?: string,
}

export const Row: React.FunctionComponent<Props> = (props: Props) => {
  const { className, children } = props;

  return (
    <div {...props} className={css(s.row, className)}>
      {children}
    </div>
  )
}

Row.defaultProps = {};
