import * as React from 'react';
import Select, { components, Props as SelectProps } from 'react-select';

import { Icon } from 'components/icon';
import s from './styles.scss';

const customStyles = (isDisabled?: boolean) => ({
  container: (base: any, { selectProps }: any) => ({
    ...base,
    color: '#212121',
    fontSize: 18,
    fontWeight: 300,
    fontFamily: 'Arial',
    width: '100%',
    zIndex: 10,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: isDisabled ? '#CFD8DC' : '#6d6e71',
    '&:hover': {
      cursor: 'default',
      borderColor: selectProps.menuIsOpen ? 'transparent' : '#90A4AE',
    },
    borderRadius: 0,
    boxShadow: selectProps.menuIsOpen && '0px 0px 0px 2px #1976d2',
    '&:focus': {
      outline: '3px solid #008dff',
    },
  }),
  clearIndicator: (base: any) => ({
    ...base,
    color: '#445A64',
    paddingRight: 0,
    '&:hover': {
      cursor: 'pointer',
      color: '#f44336',
    },
  }),
  control: (base: any, { selectProps }: any) => ({
    ...base,
    backgroundColor: isDisabled ? '#eceff1' : '#fff',
    cursor: selectProps.menuIsOpen && 'text',
    border: 'none',
    borderRadius: 0,
    minHeight: 46,
  }),
  valueContainer: (base: any) => ({
    ...base,
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: 'Georgia',
    color: '#404041',
  }),
  singleValue: (base: any) => ({
    ...base,
    top: '49%',
  }),
  menu: (base: any) => ({
    ...base,
    boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.2)',
    borderRadius: 0,
    marginTop: 2,
    padding: 0,
    zIndex: 100500,
  }),
  menuPortal: base => ({
    ...base,
    zIndex: 100500,
  }),
  menuList: (base: any) => ({
    ...base,
    padding: '10px',
  }),
  multiValue: () => ({
    display: 'none',
  }),
  option: (base: any, { isSelected }: any) => ({
    ...base,
    color: '#404041',
    backgroundColor: isSelected ? '#eceff1' : '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    padding: '9px 0 11px 12px',
    textAlign: 'left',
    '&:hover': {
      backgroundColor: '#6D6E71',
      color: '#fff',
    },
  }),
  placeholder: (base: any) => ({
    ...base,
    color: '#6D6E71',
    fontSize: 18,
    fontWeight: 300,
    fontFamily: 'Georgia',
  }),
  dropdownIndicator: (base: any, { selectProps }: any) => ({
    ...base,
    color: '#445A64',
    padding: 12,
    transform: selectProps.menuIsOpen && 'rotate(180deg)',
    '&:hover': {
      cursor: 'pointer',
    },
  }),
  indicatorSeparator: (base: any) => ({
    ...base,
    backgroundColor: 'gray',
    display: 'none',
  }),
});

const DropdownIndicator = (props: any) =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <Icon icon={Icon.icons.chevronDown} className={s.multiSelectDropdown} />
    </components.DropdownIndicator>
  );

const ClearIndicator = (props: any) =>
  components.ClearIndicator && (
    <components.ClearIndicator {...props}>
      <Icon icon={Icon.icons.x} className={s.multiSelectClear} />
    </components.ClearIndicator>
  );

class SelectInput extends React.Component<SelectProps, {}> {
  render() {
    const { placeholder, isDisabled } = this.props;

    return (
      <div>
        <Select
          styles={customStyles(isDisabled)}
          noOptionsMessage={() => 'Not found'}
          // loadingMessage="Loading..."
          placeholder={placeholder}
          components={{ DropdownIndicator, ClearIndicator }}
          closeMenuOnSelect
          {...this.props}
        />
      </div>
    );
  }
}

export { SelectInput };
