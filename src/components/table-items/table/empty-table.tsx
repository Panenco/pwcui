import * as React from 'react';
import * as cx_ from 'classnames';
import { Text } from '../../text';

const cx = cx_;
import s from './styles.scss';

interface Props {
  className?: string,
  isTable?: boolean,
}

const EmptyContent: React.FunctionComponent<Props> = (props: Props) => {
  const { className, isTable } = props;

  return(
  <div {...props} className={cx(s.tableEmptyContent, isTable && s.tableEmptyTable, className)}>
    <div className={s.tableEmptyContentTitle}>
      <Text>There are nothing found on this search request.</Text>
    </div>
    <div className={s.tableEmptyContentSubtitle}>
      <Text color={Text.color.secondary}>- Try entering another request;</Text>
      <Text color={Text.color.secondary}>- Make sure there are no grammatical errors in the titles.</Text>
    </div>
  </div>
)}

export { EmptyContent };
