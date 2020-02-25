import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import CardReadme from 'components/card/card-README.md';
import CardDocs from 'components/card/card-DOCS.md';

import { Card, Row, Col, Text, ContentCard, UploadCard, Icon } from 'index';

import { decorator } from '../../utils/decorator';

const Wrapper = () => (
  <div
    style={{
      backgroundColor: '#F2F2F2',
      padding: '12px',
      marginTop: '30px',
    }}
  />
);

export default decorator('Card', CardDocs, CardReadme).add('Card components', () => (
  <BrowserRouter>
    <Wrapper>
      <Row>
        <Col s="6">
          <Card>
            <Text size={Text.size.l}>Card</Text>
          </Card>
        </Col>
        <Col s="6">
          <Card>
            <Text size={Text.size.l}>Card</Text>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col s="6">
          <ContentCard title="Content Card" />
        </Col>
        <Col s="6">
          <ContentCard
            title="Hover card with very long name which takes more then 1 row"
            subTitle="5 active engagements"
            description="02/11/19"
          />
        </Col>
      </Row>
      <Row>
        <Col s="6">
          <UploadCard title="Upload Card" accept="application/pdf" icon={Icon.icons.pdf} />
        </Col>
        <Col s="6">
          <UploadCard
            title="Hover card with very long name which takes more then 1 row"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            icon={Icon.icons.xlsx}
            value={
              new File(['Text content'], 'Long_file_name_which_use_3_dot.txt', {
                type: 'text/plain',
              })
            }
          />
        </Col>
      </Row>
    </Wrapper>
  </BrowserRouter>
));
