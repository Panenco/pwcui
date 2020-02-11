import * as React from 'react';
import * as cx_ from 'classnames';
import { Text } from 'index'

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
    {error &&
      <Text
        size={Text.size.xs}
        color={Text.color.black}
        font={Text.font.secondary}
        weight={Text.weight.medium}
        className={s.inputErrorText}
      >
        {error}
      </Text>
    }
    <input type={type} className={cx(s.input, error && s.inputError, className)} {...props} />
  </div>
);
