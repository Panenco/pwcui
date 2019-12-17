import React from 'react';

import PopupReadme from 'components/popup/README.md';
import PopupDocs from 'components/popup/DOCS.md';

import { Row, Col, Popup } from 'index';

import { decorator } from '../../utils/decorator';

export default decorator('Popup', PopupDocs, PopupReadme).add('Popup', () => (
  <>
    <Row>
      <Col s="12">
        <Popup />
      </Col>
    </Row>
  </>
));
