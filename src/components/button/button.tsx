import * as React from 'react';
import { Link } from 'react-router-dom';
import * as cx_ from 'classnames';

const cx = cx_;
import s from './styles.scss';

interface Props {
  children: React.ReactNode,
  disabled?: boolean,
  type?: 'submit' | 'reset' | 'button',
  className?: string,
  component?: 'link',
  to?: string,
}

export const Button: React.FunctionComponent<Props> = (props: Props): any => {
  const { children, disabled = false, className, type = 'button', to = '', component, ...otherProps } = props;

  const Component = component === 'link' ? Link : 'button';
  return (
    <Component type={type} to={to} disabled={disabled} className={cx(s.button, disabled && s.buttonDisabled, className)} {...otherProps}>
      {children}
    </Component>
  );
}

export const PrimaryButton: React.FunctionComponent<Props> = (props: Props): any => {
  const { type, className, children, ...otherProps } = props;

  return(
    <Button type={type} className={cx(s.button, s.buttonPrimary, className)} {...otherProps}>
      {children}
    </Button>
  );
}

export const SecondaryButton: React.FunctionComponent<Props> = (props: Props): any => {
  const { type, className, children, ...otherProps } = props;

  return(
    <Button type={type} className={cx(s.button, s.buttonSecondary, className)} {...otherProps}>
      {children}
    </Button>
  );
}
//
// export const UnderlinedButton = ({ type = 'button', className, children, ...props }) => (
//   <button type={type} className={cx(s.buttonUnderlined, className)} {...props}>
//     {children}
//   </button>
// );
//
// UnderlinedButton.propTypes = buttonPropTypes;
//
// UnderlinedButton.defaultProps = {
//   type: 'button',
//   className: null,
//   shared: false,
// };
