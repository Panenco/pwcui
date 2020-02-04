import * as React from 'react';
import * as cx_ from 'classnames';

const cx = cx_;
import s from './styles.scss';

interface Props {
  className?: string,
  readonly?: string,
  type?: 'submit' | 'reset' | 'button',
  error?: boolean,
  value?: any,
}

export const TextInput: React.FunctionComponent<Props> = ({ className, type, error, ...props }: Props) => (
  <div className={cx(s.inputWrapper, error && s.inputWrapperError)}>
    <input type={type} className={cx(s.input, error && s.inputError, className)} {...props} />
  </div>
);
