import * as React from 'react';
import Dropzone from 'react-dropzone';
import * as cx_ from 'classnames';
import { Text, Icon } from 'index';

const cx = cx_;
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

  onDelete = (deleteFile: any) => {
    const { value, setFieldValue, name } = this.props;
    const newFiles = value.filter(file => file !== deleteFile);
    setFieldValue(name, newFiles);
  };

  getColor = (isDragActive: any, rejected: any) => {
    if (isDragActive) {
      return Text.color.black;
    }
    if (rejected) {
      return Text.color.red;
    }
    return Text.color.darkgrey;
  };

  getText = (isDragActive: any, rejected: any) => {
    if (isDragActive) {
      return 'Drop your file here';
    }
    if (rejected) {
      return 'Wrong format! Please upload a new file following the correct format.';
    }
    return 'Drop your file here or click here';
  };

  render() {
    const { className, accept, icon } = this.props;
    const { rejected } = this.state;
    return (
      <Dropzone accept={accept} onDrop={this.onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          const { value } = this.props;
          if (value) {
            return <p>{value.url}</p>;
          }
          return (
            <div
              className={cx(
                s.dropzoneEmpty,
                className,
                isDragActive && s.dropzoneEmptyActive,
                !isDragActive && rejected && s.dropzoneEmptyRejected,
              )}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <div className={s.dropzoneEmptyContent}>
                <Icon
                  icon={icon}
                  className={cx(
                    s.dropzoneEmptyContentIcon,
                    isDragActive && s.dropzoneEmptyContentIconActive,
                    !isDragActive && rejected && s.dropzoneEmptyContentIconRejected,
                  )}
                  disabled
                />
                <Text
                  size={Text.size.s}
                  color={this.getColor(isDragActive, rejected)}
                  font={Text.font.secondary}
                  height={Text.height.l}
                  className={s.dropzoneEmptyContentText}
                >
                  {this.getText(isDragActive, rejected)}
                </Text>
              </div>
            </div>
          );
        }}
      </Dropzone>
    );
  }
}

export { FileInput };
