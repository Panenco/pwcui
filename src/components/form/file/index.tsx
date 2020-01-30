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
    const { name, setFieldValue, title, id } = this.props;
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
      setFieldValue(name, file);
    }
  };

  render() {
    const { className, accept } = this.props;
    return (
      <Dropzone accept={accept} onDrop={this.onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          const { value } = this.props;
          if (value) {
            return <p>{value.fileName}</p>;
          }
          return (
            <div
              className={cx(
                s.dropzoneEmpty,
                className,
              )}
            >
              <TextInput className={s.dropzoneInput} {...this.props} />
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
