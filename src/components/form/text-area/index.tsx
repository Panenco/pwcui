import * as React from 'react';
import * as cx_ from 'classnames';
import { Text } from 'index'

const cx = cx_;
import s from './styles.scss';

interface Props {
  innerRef?: any,
  form?: any,
  autoresize?: any,
  minHeight?: any,
  error?: any,
  className?: any,
  field?: any,
  labelText?: string,
}

class TextArea extends React.Component<Props, {}> {
  textarea: any;
  handleResize = (...args: any[]) => {
    const { field } = this.props;
    this.textarea.style.height = 'inherit';

    const computed = window.getComputedStyle(this.textarea);
    const height =
      this.textarea.scrollHeight -
      parseInt(computed.getPropertyValue('padding-top'), 10) -
      parseInt(computed.getPropertyValue('padding-bottom'), 10);

    this.textarea.style.height = `${height}px`;
    field.onChange(...args);
  };

  bindRef = (textarea: any) => {
    const { innerRef } = this.props;
    if (innerRef) innerRef(textarea);
    this.textarea = textarea;
  };

  render() {
    const { innerRef, labelText, form, autoresize, minHeight, error, ...props } = this.props;

    return (
      <div>
        {labelText &&
          <Text
            size={Text.size.m}
            color={Text.color.black}
            font={Text.font.primary}
            className={s.inputLabelText}
          >
            {labelText}
          </Text>
        }
        {error &&
          <Text
            size={Text.size.xs}
            color={Text.color.black}
            font={Text.font.secondary}
            weight={Text.weight.medium}
            className={s.labelError}
          >
            {error}
          </Text>
        }
        <textarea
          ref={this.bindRef}
          onChange={this.handleResize}
          {...props}
          className={cx(s.textarea, error && s.textareaError)}
          style={{ minHeight: `${minHeight}px` }}
        />
      </div>
    );
  }
}

export { TextArea };
