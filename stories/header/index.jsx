import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import HeaderReadme from 'components/header/README.md';
import HeaderDocs from 'components/header/DOCS.md';

import { Header, HeaderMenu, HeaderMenuItem, Icon } from 'index';

import { decorator } from '../../utils/decorator';

export default decorator('Header', HeaderDocs, HeaderReadme).add('Header', () => (
  <BrowserRouter>
    <Header
      logoText="Upload portal"
      menu={
        <HeaderMenu>
          <HeaderMenuItem to="/">Engagements</HeaderMenuItem>
          <HeaderMenuItem to="/status">Status</HeaderMenuItem>
          <HeaderMenuItem to="/review">Review checks</HeaderMenuItem>
          <HeaderMenuItem to="/download">Download report</HeaderMenuItem>
        </HeaderMenu>
      }
      logo={
        <Icon icon={Icon.icons.pwc} style={{ width: '60px', height: '46px', marginRight: '25px', color: '#fff' }} />
      }
    ></Header>
  </BrowserRouter>
));
