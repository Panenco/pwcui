import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/text';
import { ButtonIcon } from 'components/button-icon';
import cx from 'classnames';
import s from './styles.scss';

const Popup = ({ closeFunction, className, children, title }) => {
  return (
    <div className={s.overlay}>
      <div className={cx(s.popup, className)}>
        <Text size={Text.size.xl} weight={Text.weight.medium} color={Text.color.text} className={s.popupTitle}>
          {title}
        </Text>
        <ButtonIcon
          onClick={closeFunction}
          className={s.popupCloseBtn}
          iconClassName={s.popupCloseBtnIcon}
          icon={ButtonIcon.icons.close}
        />

        <div className={s.popupBody}>{children}</div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Popup.defaultProps = {
  className: null,
  title: 'Title',
};

Popup.Large = ({ children, title, closeFunction }) => (
  <Popup title={title} className={s.largePopup} closeFunction={closeFunction}>
    {children}
  </Popup>
);

Popup.Large.propTypes = Popup.propTypes;
Popup.Large.defaultProps = Popup.defaultProps;

export { Popup };
