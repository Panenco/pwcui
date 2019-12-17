import * as React from 'react';

import { Icon } from 'components/icon';
import * as cx_ from 'classnames';

const cx = cx_;
import s from './styles.scss';

interface WrapperProps {
  children: React.ReactNode,
  disabled?: boolean,
  type?: 'submit' | 'reset' | 'button',
  className?: string,
  iconClassName?: string,
}

interface Props {
  icon: any,
  iconClassName?: string,
  className?: string,
  onClick?: () => void,
}

/* eslint-disable */
const ButtonIconWrapper: React.FunctionComponent<WrapperProps> = ({ type, className, disabled = false, children, ...props }: WrapperProps) => (
  <button type={type} disabled={disabled} className={cx(s.button, className)} {...props}>
    {children}
  </button>
);
/* eslint-enable */

export const ButtonIcon: React.FunctionComponent<Props> & { icons: any } = ({ iconClassName, icon, ...props }: Props) => (
  <ButtonIconWrapper {...props}>
    <Icon icon={icon} className={cx(s.buttonIcon, iconClassName)} />
  </ButtonIconWrapper>
);

export const PrimaryButtonIcon: React.FunctionComponent<Props> & { icons: any } = ({ iconClassName, icon, ...props }: Props) => (
  <ButtonIconWrapper className={s.buttonPrimary} {...props}>
    <Icon icon={icon} className={cx(s.buttonIcon, s.buttonPrimaryIcon, iconClassName)} />
  </ButtonIconWrapper>
);

export const SecondaryButtonIcon: React.FunctionComponent<Props> & { icons: any } = ({ iconClassName, icon, ...props }: Props) => (
  <ButtonIconWrapper className={s.buttonSecondary} {...props}>
    <Icon icon={icon} className={cx(s.buttonIcon, s.buttonSecondaryIcon, iconClassName)} />
  </ButtonIconWrapper>
);

export const TertiaryButtonIcon: React.FunctionComponent<Props> & { icons: any } = ({ iconClassName, icon, ...props }: Props) => (
  <ButtonIconWrapper className={s.buttonTertiary} {...props}>
    <Icon icon={icon} className={cx(s.buttonIcon, s.buttonTertiaryIcon, iconClassName)} />
  </ButtonIconWrapper>
);

ButtonIcon.icons = Icon.icons;
PrimaryButtonIcon.icons = Icon.icons;
SecondaryButtonIcon.icons = Icon.icons;
TertiaryButtonIcon.icons = Icon.icons;
