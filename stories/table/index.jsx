import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import ButtonReadme from 'components/button/button-README.md';
import TableDocs from 'components/table-items/table/table-DOCS.md';
import PaginationDocs from 'components/table-items/pagination-DOCS.md';

import { Row, Col, PaginationSelect, Table, Cell, HeaderCell, Header, TableRow, Text, PrimaryButtonIcon } from 'index';
import { decorator } from '../../utils/decorator';

const Wrapper = props => (
  <div
    style={{
      backgroundColor: 'white',
      padding: '12px',
    }}
    {...props}
  />
);

export default decorator('Table', PaginationDocs, ButtonReadme).add('Pagination Select', () => (
  <BrowserRouter>
    <Wrapper>
      <Row>
        <Col s="12">
          <PaginationSelect
            totalItems={1321}
            from={1}
            to={10}
            formatUrl={() => {
              return '/';
            }}
          />
        </Col>
      </Row>
    </Wrapper>
  </BrowserRouter>
));

export const TableDecorator = decorator('Table', TableDocs, ButtonReadme).add('Table', () => (
  <BrowserRouter>
    <Wrapper>
      <Row>
        <Col s="12">
          <Table>
            <Header>
              <HeaderCell name="name" sort={{ sort: 'type', direction: 'desc' }} width="270px">
                Name
              </HeaderCell>
              <HeaderCell name="type" sort={{ sort: 'type', direction: 'asc' }} width="100px">
                Type
              </HeaderCell>
              <HeaderCell name="size" sort={{ sort: 'type', direction: 'asc' }} width="100px">
                Size
              </HeaderCell>
              <HeaderCell name="added" sort={{ sort: 'type', direction: 'desc' }} width="180px">
                Added
              </HeaderCell>
            </Header>
            <>
              {[
                {
                  name: 'Very long document name.docx',
                  type: 'Tender',
                  size: '253 KB',
                  date: '14/Apr/2019 17:30',
                },
                {
                  name: 'Very long document name for tender.docx',
                  type: 'Request',
                  size: '1372 KB',
                  date: '14/Apr/2019 14:30',
                },
                {
                  name: 'Document name.docx',
                  type: 'Tender',
                  size: '279 KB',
                  date: '14/Mar/2019 17:30',
                },
              ].map(row => (
                <TableRow>
                  <Cell width="270px">
                    <Text>{row.name}</Text>
                  </Cell>
                  <Cell width="100px">
                    <Text>{row.type}</Text>
                  </Cell>
                  <Cell width="100px">
                    <Text>{row.size}</Text>
                  </Cell>
                  <Cell width="180px">
                    <Text>{row.date}</Text>
                  </Cell>
                </TableRow>
              ))}
            </>
          </Table>
        </Col>
      </Row>
    </Wrapper>
  </BrowserRouter>
));
