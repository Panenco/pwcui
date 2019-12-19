import * as React from 'react';
import * as cx_ from 'classnames';
import { FileInput, PrimaryButton, SecondaryButton, Text } from 'index';
import * as mime from 'mime-types';

const cx = cx_;
import s from './styles.scss';

interface CardProps {
  className?: string,
  children: React.ReactNode,
}

export const Card: React.FunctionComponent<CardProps> = ({ className, children, ...props }: CardProps) => (
  <div className={cx(s.card, className)} {...props}>
    {children}
  </div>
);

interface ContentCardProps {
  className?: string,
  title: string,
  subTitle?: string,
  date?: string,
  linkPath?: string,
  linkText?: string,
}

export const ContentCard: React.FunctionComponent<ContentCardProps> = ({ className, title, subTitle, date, linkPath, linkText }: ContentCardProps) => (
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
    <PrimaryButton component="link" className={cx(s.cardContentButton)} to={linkPath}>
      {linkText}
    </PrimaryButton>
  </Card>
);

ContentCard.defaultProps = {
  className: '',
  date: '',
  title: 'Card Title',
  subTitle: 'Subtitle',
  linkPath: '/',
  linkText: 'Button link',
};

interface UploadCardProps {
  className?: string,
  title: string,
  value?: any,
  setFieldValue: (name: string, value: any) => void,
  name: string
}

export const UploadCard: React.FunctionComponent<UploadCardProps> = ({ className, title, value, setFieldValue, name, ...props }: UploadCardProps) => {
  const getType = (file: { path: string, type: any }) => {
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

UploadCard.defaultProps = {
  className: '',
  title: 'Card Title',
};
