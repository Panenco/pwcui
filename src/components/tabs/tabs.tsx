import * as React from 'react';
import * as cx_ from 'classnames';

const cx = cx_;
import s from './styles.scss';

interface Props {
  className?: string,
  children: React.ReactNode,
}

const Tabs = ({ className, children }: Props) => <div className={cx(s.tabs, className)}>{children}</div>;

Tabs.defaultProps = {
  className: '',
};

export { Tabs };
