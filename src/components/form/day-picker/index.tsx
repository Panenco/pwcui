import * as React from 'react';
import DayPicker from 'react-day-picker';
import { Text, Icon, PrimaryButton } from 'index';
import ReactMaskInput from 'react-text-mask';

import s from './styles.scss';

interface Props {
  className?: string,
  timeLabel?: string,
  icon?: any,
  accept?: any,
  name: string,
  setFieldValue: (name: string, value: any) => void,
  title?: string,
  id?: string,
  value?: any,
  disabled?: boolean,
  isTime?: boolean,
};

class DatePicker extends React.Component<Props> {

  static defaultProps = {
    timeLabel: 'Time',
    isTime: true,
  };

  render() {
    const modifiers = { past: { before: new Date() } };

    const { isTime, timeLabel } = this.props;

    return (
      <div className={s.dayPicker}>
        <DayPicker modifiers={modifiers} />
        {isTime && <div className={s.dayPickerFooter}>
          <div className={s.dayPickerFooterTime}>
            <Text
              size={Text.size.m}
              color={Text.color.secondary}
              className={s.dayPickerFooterLabel}
              weight={Text.weight.lightWeight}
            >
              {timeLabel}
            </Text>
            <div className={s.dayPickerFooterWrapperInput}>
              <ReactMaskInput
                className={s.dayPickerFooterInput}
                mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
                placeholder="--:--"
                name="to"
              />
              <Icon icon={Icon.icons.clock} className={s.dayPickerFooterIcon} />
            </div>
          </div>
          <PrimaryButton className={s.dayPickerFooterButton}>
            Save
          </PrimaryButton>
        </div>}
      </div>
    );
  }

}

export { DatePicker };
