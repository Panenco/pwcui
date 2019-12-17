import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import cx from 'classnames';
import { Text, Icon } from 'index';

import s from './styles.scss';

class FileInput extends React.Component {
  state = {
    rejected: false,
  };

  onDrop = (accepted, rejected) => {
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

  onDelete = deleteFile => {
    const { value, setFieldValue, name } = this.props;
    const newFiles = value.filter(file => file !== deleteFile);
    setFieldValue(name, newFiles);
  };

  getColor = (isDragActive, rejected) => {
    if (isDragActive) {
      return Text.color.black;
    }
    if (rejected) {
      return Text.color.red;
    }
    return Text.color.darkgrey;
  };

  getText = (isDragActive, rejected) => {
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

FileInput.defaultProps = {
  style: null,
  inputStyle: s.editFormOuterLogoImg,
  className: null,
  accept: null,
  icon: Icon.icons.undefinedFileType,
  title: null,
  id: null,
};

FileInput.propTypes = {
  /* eslint-disable-next-line */
  style: PropTypes.object,
  /* eslint-disable-next-line */
  inputStyle: PropTypes.object,
  className: PropTypes.string,
  accept: PropTypes.string,
  setFieldValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(File).isRequired,
  icon: PropTypes.oneOf(Icon.icons),
  title: PropTypes.string,
  id: PropTypes.string,
};

export { FileInput };
