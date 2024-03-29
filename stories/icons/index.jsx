import React from 'react';
import { Icon } from 'index';
import IconDocs from 'components/icon/DOCS.md';
import IconReadme from 'components/icon/README.md';

import { decorator } from '../../utils/decorator';

const Wrapper = () => (
  <div
    style={{
      backgroundColor: 'white',
      marginTop: '30px',
    }}
  />
);

export default decorator('Icon', IconDocs, IconReadme).add('Icon component', () => (
  <Wrapper>
    {Object.values(Icon.icons).map(el => (
      <Icon icon={el} key={el} style={{ width: '20px', height: '20px', marginRight: '10px' }} />
    ))}
  </Wrapper>
));
