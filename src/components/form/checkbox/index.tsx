import * as React from 'react';
import * as cx_ from 'classnames';

import { Icon } from 'components/icon';
import { Text } from 'components/text';

const cx = cx_;
import s from './styles.scss';

interface Props {
  label?: any,
  checked?: boolean,
  name: string,
  id: string,
  className?: string,
  value?: string,
  disabled?: boolean,
}

const Checkbox: React.FunctionComponent<Props> = ({ className, disabled, checked, value, name, label, id, ...props }: Props) => (
  <label htmlFor={id} className={cx(s.label, disabled && s.labelDisabled, className)}>
    <input
      className={cx(s.checkbox, className)}
      type="checkbox"
      checked={checked}
      value={value}
      name={name}
      id={id}
      {...props}
    />
    <div
      className={cx(s.container, disabled && s.containerDisabled, disabled && checked && s.containerDisabledChecked)}
    >
      <Icon icon={Icon.icons.check} className={s.tick} />
    </div>
    <Text className={cx(s.labelTitle, disabled && !checked && s.labelTitleDisabled)}>{label}</Text>
  </label>
);

export { Checkbox };
