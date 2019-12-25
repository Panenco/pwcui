import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import ButtonReadme from 'components/button/button-README.md';
import TableDocs from 'components/table-items/table/table-DOCS.md';

import { Row, Col, Tabs, TabItem } from 'index';
import { decorator } from '../../utils/decorator';

const Wrapper = props => (
  <div
    style={{
      backgroundColor: 'white',
      marginTop: '30px',
    }}
    {...props}
  />
);

export default decorator('Tabs', TableDocs, ButtonReadme).add('Tabs', () => (
  <BrowserRouter>
    <Wrapper>
      <Row>
        <Col s="12" style={{ height: '50px' }}>
          <Tabs>
            <TabItem to="/fakepath1">First tab</TabItem>
            <TabItem to="/fakepath2">Active tab</TabItem>
            <TabItem to="/fakepath3">Third tab</TabItem>
          </Tabs>
        </Col>
      </Row>
    </Wrapper>
  </BrowserRouter>
));
