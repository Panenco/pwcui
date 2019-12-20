import React from 'react';

import TextReadme from 'components/text/README.md';
import TextDocs from 'components/text/DOCS.md';

import { Text } from 'index';

import { decorator } from '../../utils/decorator';

const Wrapper = props => (
  <div
    style={{
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '30vh',
      marginTop: '30px',
    }}
    {...props}
  />
);

export default decorator('Text', TextDocs, TextReadme).add('Text component', () => (
  <Wrapper>
    <Text size={Text.size.xxl}>Georgia regular 35 black</Text>
    <Text size={Text.size.xl}>Georgia regular 28 black</Text>

    <Text size={Text.size.l} height={Text.height.xxl}>
      Georgia regular 24 black 35
    </Text>
    <Text size={Text.size.l}>Georgia regular 24 black</Text>
    <Text size={Text.size.m}>Georgia regular 18 black</Text>

    <Text size={Text.size.s} font={Text.font.secondary}>
      Arial regular 16 black
    </Text>
    <Text size={Text.size.s} color={Text.color.darkgrey} font={Text.font.secondary}>
      Arial regular 16 dark grey
    </Text>
    <Text size={Text.size.s} color={Text.color.black} font={Text.font.secondary} height={Text.height.l}>
      Arial regular 16 black 24
    </Text>
    <Text size={Text.size.s} color={Text.color.orange} font={Text.font.secondary} height={Text.height.l}>
      Arial regular 16 orange 24
    </Text>
    <Text size={Text.size.s} color={Text.color.red} font={Text.font.secondary} height={Text.height.l}>
      Arial regular 16 red 24
    </Text>
    <Text size={Text.size.xs} weight={Text.weight.medium} color={Text.color.black} font={Text.font.secondary}>
      Arial bold 14 black
    </Text>
  </Wrapper>
));
