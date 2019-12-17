import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Text } from 'components/text';

import s from './styles.scss';

const Radio = ({ label, value, disabled, name, id, className, ...props }) => {
  return (
    <label htmlFor={id} className={cx(s.label, disabled && s.labelDisabled)}>
      <input
        type="radio"
        checked={value === id}
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
          disabled && value === id && s.containerDisabledChecked,
        )}
      >
        <div className={s.point} />
      </div>
      <Text size={Text.size.l} className={cx(s.labelTitle, disabled && value !== id && s.labelTitleDisabled)}>
        {label}
      </Text>
    </label>
  );
};

Radio.propTypes = {
  label: PropTypes.node,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  disabled: false,
  label: null,
  className: null,
  value: null,
};

export { Radio };
