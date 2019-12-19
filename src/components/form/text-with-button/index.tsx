import * as React from 'react';
import * as cx_ from 'classnames';
import { Icon } from 'index';
import { TextInput } from '../text';

const cx = cx_;
import s from './styles.scss';

interface Props {
  className?: string,
  iconName: string,
  name?: string,
  disabled?: boolean,
  onButtonClick?: () => void,
}

export const TextWithButton: React.FunctionComponent<Props> = ({ className, iconName, name, disabled, onButtonClick, ...props }: Props) => {
  return (
    <div className={cx(s.input, className)}>
      <TextInput {...props} />
      <button type="button" className={s.button} name={name} disabled={disabled} onClick={onButtonClick}>
        <Icon icon={Icon.icons[iconName]} className={s.buttonIcon} />
      </button>
    </div>
  );
};
