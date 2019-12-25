import * as React from 'react';
import * as cx_ from 'classnames';
import sizes from 'styles/sizes.scss';
import colors from 'styles/colors.scss';
import fonts from 'styles/fonts.scss';
import weights from 'styles/weights.scss';

const cx = cx_;
import s from './styles.scss';

interface Props {
  color?: any,
  weight?: any,
  height?: any,
  font?: any,
  size?: any,
  className?: string,
  children: React.ReactNode,
  style?: object,
}

export const Text: React.FunctionComponent<Props> & { color: any; weight: any; size: any; height: any; font: any; } = (props: Props) => {
  const { color, size, weight, height, font, className, children, style } = props;
  return (
    <span className={cx(s.text, color, size, weight, height, font, className)} style={style}>
      {children}
    </span>
  );
};

Text.color = Object.entries(colors).reduce((obj, [colorName]) => {
  // eslint-disable-next-line
  obj[colorName] = s[`textColor__${colorName}`];
  return obj;
}, {});

Text.size = Object.entries(sizes).reduce((obj, [sizeName]) => {
  // eslint-disable-next-line
  obj[sizeName] = s[`textSize__${sizeName}`];
  return obj;
}, {});

Text.height = Object.entries(sizes).reduce((obj, [heightName]) => {
  // eslint-disable-next-line
  obj[heightName] = s[`textHeight__${heightName}`];
  return obj;
}, {});

Text.weight = Object.entries(weights).reduce((obj, [weightName]) => {
  // eslint-disable-next-line
  obj[weightName] = s[`textWeight__${weightName}`];
  return obj;
}, {});

Text.font = Object.entries(fonts).reduce((obj, [fontName]) => {
  // eslint-disable-next-line
  obj[fontName] = s[`textFont__${fontName}`];
  return obj;
}, {});

Text.defaultProps = {
  font: Text.font.primary,
}
