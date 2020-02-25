import * as React from 'react';
import Dropzone from 'react-dropzone';
import * as cx_ from 'classnames';
import { TextInput, SecondaryButton, Text } from 'index';

const cx = cx_;
import s from './styles.scss';

interface Props {
  className?: string;
  labelText?: string;
  error?: any;
  accept?: any;
  name: string;
  setFieldValue: (name: string, value: any) => void;
  onChange: (value: any) => void;
  title?: string;
  id?: string;
  value?: any;
  disabled?: boolean;
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
    const { className, accept, value, error, labelText } = this.props;
    return (
      <div>
        {labelText && (
          <Text size={Text.size.m} color={Text.color.black} font={Text.font.primary} className={s.inputLabelText}>
            {labelText}
          </Text>
        )}
        {error && (
          <Text
            size={Text.size.xs}
            color={Text.color.black}
            font={Text.font.secondary}
            weight={Text.weight.medium}
            className={s.inputErrorText}
          >
            {error}
          </Text>
        )}
        <Dropzone accept={accept} onDrop={this.onDrop}>
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div className={cx(s.dropzoneEmpty, className)} {...getRootProps()}>
                <input {...getInputProps()} />

                <TextInput className={s.dropzoneInput} value={value ? value.name : ''} />
                <SecondaryButton className={s.dropzoneButton}>Upload</SecondaryButton>
              </div>
            );
          }}
        </Dropzone>
      </div>
    );
  }
}

export { FileInput };
