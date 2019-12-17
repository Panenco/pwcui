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

// TextWithButton.defaultProps = {
//   className: null,
//   type: 'text',
//   id: null,
//   onButtonClick: null,
//   iconName: 'date',
//   labelText: 'Text',
//   name: null,
//   error: null,
//   disabled: false,
//   value: null,
// };
//
// TextWithButton.propTypes = {
//   error: PropTypes.string,
//   type: PropTypes.string,
//   onButtonClick: PropTypes.func,
//   id: PropTypes.string,
//   className: PropTypes.string,
//   iconName: PropTypes.string,
//   name: PropTypes.string,
//   labelText: PropTypes.string,
//   disabled: PropTypes.bool,
//   value: PropTypes.string,
// };
