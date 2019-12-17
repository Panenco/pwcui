import * as React from 'react';
import * as cx_ from 'classnames';

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
    const { innerRef, form, autoresize, minHeight, error, ...props } = this.props;

    return (
      <textarea
        ref={this.bindRef}
        onChange={this.handleResize}
        {...props}
        className={cx(s.textarea, error && s.textareaError)}
        style={{ minHeight: `${minHeight}px` }}
      />
    );
  }
}

export { TextArea };
