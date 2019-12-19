import * as React from 'react';
import * as cx_ from 'classnames';

import { Text } from 'components/text';

const cx = cx_;
import s from './styles.scss';

interface Props {
  label?: any,
  name: string,
  id: string,
  className?: string,
  value?: string,
  disabled?: boolean,
  selected?: boolean,
}

export const Radio: React.FunctionComponent<Props> = (props: Props): any => {
  const { label, value, disabled, name, id, className, selected } = props;
  return (
    <label htmlFor={id} className={cx(s.label, disabled && s.labelDisabled, className)}>
      <input
        type="radio"
        checked={selected || value === id}
        value={id}
        className={cx(s.checkbox, className)}
        name={name}
        id={id}
        {...props}
      />
      <div
        className={cx(
          s.container,
          disabled && s.containerDisabled,
          disabled && (selected || value === id) && s.containerDisabledChecked,
        )}
      >
        <div className={s.point} />
      </div>
      <Text
        size={Text.size.l}
        className={cx(
          s.labelTitle,
          disabled && s.labelTitleDisabled,
          disabled && (value === id || selected) && s.labelTitleDisabledSelected,
        )}
      >
        {label}
      </Text>
    </label>
  );
};

Radio.defaultProps = {
  disabled: false,
  label: null,
  value: '',
  selected: false,
};
