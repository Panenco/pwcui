import * as React from 'react';
import * as cx_ from 'classnames';

const cx = cx_;
import s from './styles.scss';

// 8px
import chevronDown from './icons/8px/chevron-down.svg';
import chevronUp from './icons/8px/chevron-up.svg';
import chevronLeft from './icons/8px/chevron-left.svg';
import chevronRight from './icons/8px/chevron-right.svg';

// 12px
import attachment from './icons/12px/attachment.svg';
import calendar from './icons/12px/calendar.svg';
import check from './icons/12px/check.svg';
import checkOutlined from './icons/12px/check-outlined.svg';
import chevronLeftBig from './icons/12px/chevron-left.svg';
import close from './icons/12px/close.svg';
import clock from './icons/12px/clock.svg';
import unseen from './icons/12px/unseen.svg';
import eye from './icons/12px/eye.svg';

// 16px
import add from './icons/16px/add.svg';
import bellUnactive from './icons/16px/bell-unactive.svg';
import bell from './icons/16px/bell.svg';
import closeBig from './icons/16px/close.svg';
import deleteIcon from './icons/16px/delete.svg';
import download from './icons/16px/download.svg';
import duplicate from './icons/16px/duplicate.svg';
import edit from './icons/16px/edit.svg';
import lock from './icons/16px/lock.svg';
import maximize from './icons/16px/maximize.svg';
import minimize from './icons/16px/minimize.svg';
import minus from './icons/16px/minus.svg';
import plus from './icons/16px/plus.svg';
import remove from './icons/16px/remove.svg';
import search from './icons/16px/search.svg';
import trash from './icons/16px/trash.svg';
import unseenBig from './icons/16px/unseen.svg';
import arrowBack from './icons/16px/arrow-back.svg';
import arrowForward from './icons/16px/arrow-forward.svg';
import flag from './icons/16px/flag.svg';
import date from './icons/16px/date.svg';
import pwc from './icons/16px/pwc.svg';
import time from './icons/16px/time.svg';
import fileText from './icons/16px/file-text.svg';
import docx from './icons/16px/docx.svg';
import pdf from './icons/16px/pdf.svg';
import xlsx from './icons/16px/xlsx.svg';
import xml from './icons/16px/xml.svg';
import xbrl from './icons/16px/xbrl.svg';
import xlsm from './icons/16px/xlsm.svg';
import undefinedFileType from './icons/16px/undefined.svg';

interface Props {
  className?: string,
  icon: any,
  style?: any,
  disabled?: boolean,
}

export const Icon: React.FunctionComponent<Props> & { icons: any } = (props: Props) => {
  const { icon, className } = props;
  return (
    <svg {...props} className={cx(s.icon, className)} viewBox={icon.viewBox}>
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  )
}

Icon.icons = {
  chevronDown,
  chevronUp,
  chevronLeft,
  chevronRight,
  attachment,
  calendar,
  check,
  checkOutlined,
  close,
  clock,
  unseen,
  duplicate,
  download,
  add,
  bell,
  bellUnactive,
  closeBig,
  deleteIcon,
  edit,
  eye,
  lock,
  maximize,
  minimize,
  minus,
  plus,
  remove,
  search,
  trash,
  unseenBig,
  chevronLeftBig,
  arrowBack,
  arrowForward,
  flag,
  date,
  pwc,
  time,
  fileText,
  docx,
  pdf,
  xlsx,
  undefinedFileType,
  xml,
  xbrl,
  xlsm,
};
