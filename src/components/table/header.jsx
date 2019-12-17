import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './styles.scss';

const Table = ({ className, children, ...props }) => (
  <div {...props} className={cx(s.tableHeader, className)}>
    {children}
  </div>
);

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Table.defaultProps = {
  className: null,
  children: null,
};

export { Table };
