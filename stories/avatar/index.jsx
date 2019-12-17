import React from 'react';

import ButtonReadme from 'components/button/button-README.md';
import ButtonDocs from 'components/button/button-DOCS.md';

import { Row, Col, Avatar } from 'index';

import { decorator } from '../../utils/decorator';

export default decorator('Avatar', ButtonDocs, ButtonReadme).add('Avatar', () => (
  <>
    <Row>
      <Col s="12">
        <Avatar size={Avatar.sizes.medium} />
      </Col>
      <Col s="12">
        <Avatar size={Avatar.sizes.small} />
      </Col>
      <Col s="12">
        <Avatar size={Avatar.sizes.medium} email="email@dropzone.com" />
      </Col>
    </Row>
  </>
));
