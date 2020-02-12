import * as React from 'react';
import Dropzone from 'react-dropzone';
import * as cx_ from 'classnames';
import { TextInput, SecondaryButton } from 'index';

const cx = cx_;
import s from './styles.scss';

interface Props {
  className?: string,
  accept?: any,
  name: string,
  setFieldValue: (name: string, value: any) => void,
  onChange: (value: any) => void,
  title?: string,
  id?: string,
  value?: any,
  disabled?: boolean,
}

class FileInput extends React.Component<Props, { rejected: any }> {
  state = {
    rejected: false,
  };

  onDrop = (accepted: any, rejected: any) => {
    const { name, onChange, title, id } = this.props;
    this.setState({
      rejected: false,
    });
    if (rejected.length) {
      this.setState({
        rejected: true,
      });
    } else {
      const file = accepted[0];
      file.title = title;
      file.id = id;
      file.fieldName = name;
      onChange(file);
    }
  };

  render() {
    const { className, accept, value } = this.props;
    return (
      <Dropzone accept={accept} onDrop={this.onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {

          return (
            <div
              className={cx(
                s.dropzoneEmpty,
                className,
              )}
            >
              <TextInput
                {...this.props}
                className={s.dropzoneInput}
                value={value ? value.name : ''}
              />
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <SecondaryButton className={s.dropzoneButton}>
                  Upload
                </SecondaryButton>
              </div>
            </div>
          );
        }}
      </Dropzone>
    );
  }
}

export { FileInput };
