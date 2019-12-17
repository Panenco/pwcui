import * as React from 'react';
import * as cx_ from 'classnames';
import { Icon } from 'components/icon';

const cx = cx_;
import s from './styles.scss';

interface Props {
  children: React.ReactNode,
  disabled?: boolean,
  type?: 'submit' | 'reset' | 'button',
  className?: string,
  icon: any,
}

export const IconButton: React.FunctionComponent<Props> = ({ type, className, disabled = false, children, icon, ...props }: Props) => (
  <button type={type} disabled={disabled} className={cx(s.button, className)} {...props}>
    <Icon
      icon={icon}
      key={icon}
      style={{
        width: '15px',
        height: '14',
        marginRight: '10px',
      }}
    />
    {children}
  </button>
);
