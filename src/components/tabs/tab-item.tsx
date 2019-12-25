import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as cx_ from 'classnames';

const cx = cx_;
import s from './styles.scss';

interface Props {
  className?: string,
  children: React.ReactNode,
  to: string,
}

const TabItem = ({ to, children, className, ...props }: Props) => {
  return (
    <NavLink to={to} className={cx(s.tabsItem, className)} activeClassName={cx(s.tabsItemActive)} {...props}>
      {children}
    </NavLink>
  );
};

TabItem.defaultProps = {
  className: '',
};

export { TabItem };
