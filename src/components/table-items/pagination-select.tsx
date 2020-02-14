import * as React from 'react';
import * as cx_ from 'classnames';
import { Link } from 'react-router-dom';

import { Text } from 'components/text';
import { SelectInput } from 'components/form';

import { Icon } from 'components/icon';

const cx = cx_;
import s from './styles.scss';

const options: any = [
  { value: 10, label: '10' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
];

interface Props {
  totalItems?: number;
  onPagination?: () => void;
  perPage?: number;
  formatUrl?: any,
  className?: string,
  perPageLabel?: string,
  currentPage?: number,
  disabled?: boolean,
}

const PaginationSelect: React.FunctionComponent<Props> = (props: Props) => {
  const {
    perPageLabel = 'Rows per page:',
    totalItems = 0,
    onPagination,
    perPage = 10,
    className,
    formatUrl = '',
    currentPage = 0,
    disabled = false
  } = props;
  const from = perPage * currentPage + 1;
  const isFirst = currentPage === 0;
  const isLast = totalItems <= perPage * currentPage + perPage;
  const to = !isLast ? perPage * currentPage + perPage : totalItems;
  return (
    <div className={cx(s.pagination, className)}>
      <Text
        font={Text.font.secondary}
        size={Text.size.xs}
        weight={Text.weight.lightWeight}
        color={Text.color.secondary}
        className={s.paginationBeginText}
      >
        {perPageLabel}
      </Text>
      <SelectInput
        options={options}
        onChange={onPagination}
        value={options.find(option => option.value === perPage)}
        disabled={disabled}
        className={s.paginationSelect}
        pagination
      />
      <Text
        font={Text.font.secondary}
        size={Text.size.xs}
        weight={Text.weight.lightWeight}
        color={Text.color.secondary}
        className={s.paginationText}
      >
        {`${totalItems > 0 ? from : 0}-${to} of ${totalItems}`}
      </Text>
      <Link
        className={cx(s.paginationButton, (isFirst || disabled) && s.paginationButtonDisabled)}
        to={formatUrl(currentPage)}
      >
        <Icon icon={Icon.icons.chevronLeft} className={s.paginationButtonIcon} />
      </Link>
      <Link
        className={cx(s.paginationButton, (isLast || disabled) && s.paginationButtonDisabled)}
        to={formatUrl(currentPage + 2)}
      >
        <Icon icon={Icon.icons.chevronRight} className={s.paginationButtonIcon} />
      </Link>
    </div>
  );
};

export { PaginationSelect };
