import cx from 'classnames';
import { FileInput, PrimaryButtonLink, SecondaryButton, Text } from 'index';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import mime from 'mime-types';

import s from './styles.scss';

const cardPropTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const Card = ({ className, children, ...props }) => (
  <div className={cx(s.card, className)} {...props}>
    {children}
  </div>
);
Card.propTypes = cardPropTypes;

Card.defaultProps = {
  className: null,
};

export const ContentCard = ({ className, title, subTitle, date, linkPath, linkText }) => (
  <Card className={cx(s.cardContent, className)}>
    <Text className={cx(s.cardContentTitle)} size={Text.size.l}>
      {title}
    </Text>
    <Text className={cx(s.cardContentSub)} size={Text.size.s} font={Text.font.secondary}>
      {subTitle}
    </Text>
    {date && (
      <Text size={Text.size.s} font={Text.font.secondary} color={Text.color.darkgrey}>
        {date}
      </Text>
    )}
    <PrimaryButtonLink className={cx(s.cardContentButton)} to={linkPath}>
      {linkText}
    </PrimaryButtonLink>
  </Card>
);

ContentCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  date: PropTypes.string,
  linkPath: PropTypes.string,
  linkText: PropTypes.string,
};

ContentCard.defaultProps = {
  className: null,
  date: null,
  title: 'Card Title',
  subTitle: 'Subtitle',
  linkPath: '/',
  linkText: 'Button link',
};

export const UploadCard = ({ className, title, value, setFieldValue, name, ...props }) => {
  const getType = file => {
    if (file instanceof File) {
      if (file.path.endsWith('.xbrl') || file.path.endsWith('xbrl')) {
        return 'xbrl';
      }
      return mime.extension(value.type);
    }
    return file.type;
  };

  return (
    <Card className={cx(s.cardUpload, className)}>
      <Text className={cx(s.cardUploadTitle)} size={Text.size.l}>
        {title}
      </Text>
      {value && value.name ? (
        <>
          {
            <div className={cx(s.cardUploadFile)}>
              <div className={cx(s.cardUploadFileText)}>
                <Text className={cx(s.cardUploadSub)} size={Text.size.s} font={Text.font.secondary}>
                  {value.name && value.name.replace(/\.[^/.]+$/, '')}
                </Text>
                <Text size={Text.size.s} font={Text.font.secondary}>
                  .{mime.extension(value.type) ? mime.extension(value.type) : value.type}
                </Text>
              </div>
              <SecondaryButton
                className={cx(s.cardUploadButton)}
                onClick={() =>
                  setFieldValue(name, {
                    type: getType(value),
                    fieldName: value.fieldName,
                    id: value.id,
                    title,
                  })
                }
              >
                Delete
              </SecondaryButton>
            </div>
          }
        </>
      ) : (
        <FileInput name={name} setFieldValue={setFieldValue} title={title} {...props} />
      )}
    </Card>
  );
};

UploadCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.instanceOf(File).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

UploadCard.defaultProps = {
  className: null,
  title: 'Card Title',
};
