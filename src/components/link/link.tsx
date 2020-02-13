import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from 'components/icon';
import { Text } from 'components/text';
import * as cx_ from 'classnames';

const cx = cx_;
import s from './styles.scss';

interface LinkProps {
  disabled?: boolean,
  className?: string,
  children: React.ReactNode,
  to: string,
}

export const PrimaryLink: React.FunctionComponent<LinkProps> = (props: LinkProps): any => {
    const { disabled = false, className, children, to, ...otherProps } = props;

    return(
    <RouterLink to={to} className={cx(s.link, disabled && s.linkDisabled, className)} {...otherProps}>
      <Text font={Text.font.secondary}>{children}</Text>
    </RouterLink>
  );
}

interface IconLinkProps {
  disabled?: boolean,
  className?: string,
  children: React.ReactNode,
  to: string,
  icon: any,
  contentFirst?: boolean,
  iconClassName?: string,
}

export const LinkIcon: React.FunctionComponent<IconLinkProps> = (props: IconLinkProps) => {
  const { className, children, disabled = false, icon, contentFirst = false, iconClassName, ...otherProps } = props;

  return(
  <RouterLink className={cx(s.link, s.linkIcon, disabled && s.linkDisabled, className)} {...otherProps}>
    {contentFirst && children}
    <Icon
      icon={icon}
      key={icon}
      className={iconClassName}
      style={{
        width: '15px',
        height: '15px',
        marginRight: !contentFirst && '10px',
        marginLeft: contentFirst && '10px',
      }}
    />
    {!contentFirst && children}
  </RouterLink>
);
}
//
// export const SecondaryLink = ({ className, children, disabled, ...props }) => {
//   return (
//     <RouterLink className={cx(s.link, s.linkSecondary, disabled && s.linkDisabled, className)} {...props}>
//       {children}
//     </RouterLink>
//   );
// };
//
// SecondaryLink.defaultProps = {
//   disabled: false,
//   className: null,
//   children: null,
// };
//
