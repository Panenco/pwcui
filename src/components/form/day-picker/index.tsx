import * as React from 'react';
import DayPickerComponent from 'react-day-picker/DayPicker';

import s from './styles.scss';

interface Props {
  className?: string,
  icon?: any,
  accept?: any,
  name: string,
  setFieldValue: (name: string, value: any) => void,
  title?: string,
  id?: string,
  value?: any,
  disabled?: boolean,
};

class DayPicker extends React.Component<Props, { rejected: any }> {
  render() {
    const modifiers = { past: { before: new Date() } };

    return (
      <div className={s.dayPicker}>
        <DayPickerComponent
          // onDayClick={this.handleFromDayClick}
          // navbarElement={month => <Navbar currentMonth={month} />}
          // selectedDays={selectedDays}
          modifiers={modifiers}
          // month={from}
        />
      </div>
    );
  }

}

export { DayPicker };
