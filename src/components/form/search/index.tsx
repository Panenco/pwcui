import * as React from 'react';
import * as cx_ from 'classnames';
import { ButtonIcon, Icon } from 'index';

const cx = cx_;
import s from './styles.scss';

interface Props {
  className?: string,
  placeholder?: string,
  onChange: (value: any) => any,
  disabled?: boolean,
}

const Search: React.FunctionComponent<Props> = ({ className, placeholder, ...props }: Props) => {
  const [active, toggleActive] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useLayoutEffect(() => {
    console.log(inputRef); // { current: <h1_object> }
  })
  const handleOnClick = () => {
    if (!active) {
      (inputRef as any).current.focus();
    }
    toggleActive(!active);
  };
  return (
    <div className={s.searchWrapper}>
      <div className={cx(s.search, className)}>
        <ButtonIcon
          className={cx(s.searchButton)}
          iconClassName={cx(s.searchIcon, active && s.searchIconActive)}
          icon={Icon.icons.search}
          onClick={handleOnClick}
        />
        <div className={s.searchContainer}>
          <input
            {...props}
            type="search"
            ref={inputRef}
            className={cx(s.searchContainerInput, active && s.searchContainerInputActive)}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export { Search };
