import React from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';

import cx from 'classnames';
import { PrimaryLink } from 'components/link';
import { Text } from 'components/text';
import { Avatar } from 'components/avatar';

import { Icon } from 'components/icon';
import s from './styles.scss';

const isEmail = input =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input,
  );

const customStyles = isDisabled => ({
  container: base => ({
    ...base,
    color: '#212121',
    fontSize: 14,
    fontWeight: 300,
    width: 320,
    zIndex: 10,
    '&:focus-within': {
      outline: '2px solid #1976D2',
      borderColor: 'transparent',
    },
  }),
  clearIndicator: base => ({
    ...base,
    color: '#445A64',
    paddingRight: 0,
    '&:hover': {
      cursor: 'pointer',
      color: '#f44336',
    },
  }),
  control: (base, { selectProps }) => ({
    ...base,
    backgroundColor: isDisabled ? '#eceff1' : '#fff',
    cursor: selectProps.menuIsOpen && 'text',
    borderColor: isDisabled ? '#cfd8dc' : '#EEEEEE',
    borderRadius: 0,
    boxShadow: selectProps.menuIsOpen && '0px 0px 0px 2px #1976d2',
    minHeight: 36,

    '&:hover': {
      cursor: 'default',
      borderColor: selectProps.menuIsOpen ? 'transparent' : '#cfd8dc',
    },
    '&:focus-within': {
      borderColor: 'transparent',
    },
  }),
  valueContainer: base => ({
    ...base,
    fontSize: 14,
    fontWeight: 300,
    paddingLeft: 8,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  input: base => ({
    ...base,
    fontSize: 14,
    fontWeight: 300,
  }),
  singleValue: base => ({
    ...base,
    top: '50%',
  }),
  menu: base => ({
    ...base,
    boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.2)',
    borderRadius: 0,
    marginTop: 2,
    maxHeight: '280px',
    padding: 0,
    zIndex: 100500,
  }),
  menuPortal: base => ({
    ...base,
    zIndex: 100500,
  }),
  menuList: base => ({
    ...base,
    maxHeight: '280px',
    padding: 0,
  }),
  multiValue: () => ({
    display: 'none',
  }),
  option: (base, { isSelected }) => ({
    ...base,
    color: '#212121',
    backgroundColor: isSelected ? '#eceff1' : '#ffffff',
    fontSize: 14,
    fontWeight: 300,
    padding: '9px 0 11px 12px',
    textAlign: 'left',
    '&:hover': {
      backgroundColor: '#cfd8dc',
    },
  }),
  placeholder: base => ({
    ...base,
    color: '#90A4AE',
    fontSize: 14,
    fontWeight: 300,
  }),
  dropdownIndicator: (base, { selectProps }) => ({
    ...base,
    color: '#445A64',
    padding: 12,
    transform: selectProps.menuIsOpen && 'rotate(180deg)',
    '&:hover': {
      cursor: 'pointer',
    },
  }),
  indicatorSeparator: base => ({
    ...base,
    backgroundColor: 'gray',
    display: 'none',
  }),
  noOptionsMessage: base => ({
    ...base,
    padding: '9px 0 11px 12px',
    textAlign: 'left',
  }),
});

const DropdownIndicator = props =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <Icon icon={Icon.icons.chevronDown} className={s.selectDropdown} />
    </components.DropdownIndicator>
  );

const ClearIndicator = props =>
  components.ClearIndicator && (
    <components.ClearIndicator {...props}>
      <Icon icon={Icon.icons.x} className={s.selectClear} />
    </components.ClearIndicator>
  );

const Option = props => {
  const { getStyles, data, children } = props;

  return (
    <components.Option {...props} className={cx(getStyles('option', props))}>
      {data ? (
        <div className={s.selectUser}>

          <Avatar
            size={Avatar.sizes.medium}
            firstName={data.firstName}
            lastName={data.lastName}
            className={s.selectUserPhoto}
          />
          <div className={s.selectUserInfo}>
            <Text size={Text.size.l} weight={Text.weight.lightWeight} className={s.selectUserInfoText}>{`${
              data.firstName
            } ${data.lastName}`}</Text>
            {data.email && (
              <Text
                size={Text.size.m}
                weight={Text.weight.lightWeight}
                color={Text.color.secondary}
                className={s.selectUserInfoText}
              >
                {data.email}
              </Text>
            )}
            {data.company && (
              <Text size={Text.size.m} weight={Text.weight.lightWeight} color={Text.color.secondary}>
                {data.company}
              </Text>
            )}
          </div>
        </div>
      ) : (
        children
      )}
    </components.Option>
  );
};

Option.defaultProps = {
  children: null,
  getStyles: null,
};

Option.propTypes = {
  children: PropTypes.string,
  getStyles: PropTypes.func,
  data: PropTypes.shape({
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      avatar: PropTypes.shape({ url: PropTypes.string }),
      gender: PropTypes.string,
    }),
  }).isRequired,
};

const NoOptionsMessage = props => {
  const {
    selectProps: { inputValue },
  } = props;
  return (
    <components.NoOptionsMessage {...props}>
      <Text size={Text.size.l} weight={Text.weight.lightWeight}>
        Not found
      </Text>
      {isEmail(inputValue) && (
        <PrimaryLink to="/" className={s.selectLink}>
          invite user with this email
        </PrimaryLink>
      )}
    </components.NoOptionsMessage>
  );
};

class UserSearch extends React.Component {
  onDelete = option => {
    const { value, name, setFieldValue } = this.props;
    const newOptions = value.filter(o => o !== option);
    setFieldValue(name, newOptions);
  };

  render() {
    const { value, placeholder } = this.props;

    return (
      <div>
        <Select
          styles={customStyles(this.props.isDisabled)}
          placeholder={placeholder}
          loadingMessage={({ inputValue }) => `Loading results for '${inputValue}'`}
          components={{ DropdownIndicator, ClearIndicator, NoOptionsMessage, Option }}
          closeMenuOnSelect
          {...this.props}
        />
      </div>
    );
  }
}

UserSearch.defaultProps = {
  placeholder: 'Placeholder',
};

UserSearch.propTypes = {
  placeholder: PropTypes.string,
};

export { UserSearch };
