import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import ButtonReadme from 'components/button/button-README.md';
import ButtonDocs from 'components/button/button-DOCS.md';

import {
  Row,
  Col,
  Stepper,
  Tabs,
  TabItem,
  ColorPicker,
  Table,
  Header,
  Cell,
  HeaderCell,
  TableRow,
  ExpandedRow,
  Avatar,
  Text,
  PrimaryButtonIcon,
  PrimaryLink,
  DropDown,
  PaginationSelect,
  Question,
} from 'index';

import { decorator } from '../../utils/decorator';

export default decorator('Complex components', ButtonDocs, ButtonReadme).add('Stepper', () => (
  <>
    <Row>
      <Col s="12">
        <Stepper value={5} />
      </Col>
    </Row>
  </>
));

export const TabsDecorator = decorator('Complex components', ButtonDocs, ButtonReadme).add('Tabs', () => (
  <BrowserRouter>
    <>
      <Row>
        <Col s="12" style={{ backgroundColor: '#334651', height: '50px' }}>
          <Tabs>
            <TabItem to="/fakepath1">First tab</TabItem>
            <TabItem to="/fakepath2">Active tab</TabItem>
            <TabItem to="/fakepath3">Third tab</TabItem>
          </Tabs>
        </Col>
        <Col s="12">
          <Tabs>
            <TabItem.Header to="/fakepath4">First tab</TabItem.Header>
            <TabItem.Header to="/fakepath5">Active tab</TabItem.Header>
            <TabItem.Header to="/fakepath6">Third tab</TabItem.Header>
          </Tabs>
        </Col>
      </Row>
    </>
  </BrowserRouter>
));

export const ColorPickerDecorator = decorator('Complex components', ButtonDocs, ButtonReadme).add(
  'Color Picker',
  () => (
    <>
      <Row>
        <Col s="12">
          <ColorPicker />
        </Col>
      </Row>
    </>
  ),
);

export const TableDecorator = decorator('Complex components', ButtonDocs, ButtonReadme).add('Table', () => (
  <BrowserRouter>
    <>
      <Row>
        <Col s="12">
          <Table>
            <Header>
              <HeaderCell name="name" sort={{ sort: 'type', direction: 'desc' }} width="270px">
                Name
              </HeaderCell>
              <HeaderCell name="type" sort={{ sort: 'type', direction: 'desc' }} width="80px">
                Type
              </HeaderCell>
              <HeaderCell name="size" sort={{ sort: 'type', direction: 'desc' }} width="80px">
                Size
              </HeaderCell>
              <HeaderCell name="added" sort={{ sort: 'type', direction: 'desc' }} width="150px">
                Added
              </HeaderCell>
              <HeaderCell name="" sort={{ sort: 'type', direction: 'desc' }} width="50px" marginLeft />
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
                    <PrimaryLink to="/">{row.name}</PrimaryLink>
                  </Cell>
                  <Cell width="80px">
                    <Text>{row.type}</Text>
                  </Cell>
                  <Cell width="80px">
                    <Text>{row.size}</Text>
                  </Cell>
                  <Cell width="150px">
                    <Text>{row.date}</Text>
                  </Cell>
                  <Cell width="50px" marginLeft>
                    <PrimaryButtonIcon icon={PrimaryButtonIcon.icons.trash} />
                  </Cell>
                </TableRow>
              ))}
            </>
          </Table>
        </Col>
      </Row>

      <Row style={{ marginTop: '50px' }}>
        <Col s="12">Expanded table</Col>
      </Row>

      <Row>
        <Col s="12">
          <Table>
            <Header>
              <HeaderCell name="" sort={{ sort: 'name', direction: 'asc' }} width="40px" />
              <HeaderCell name="name" sort={{ sort: 'name', direction: 'asc' }} width="170px">
                Name
              </HeaderCell>
              <HeaderCell name="status" sort={{ sort: 'name', direction: 'asc' }} width="140px">
                Status
              </HeaderCell>
              <HeaderCell name="company" sort={{ sort: 'name', direction: 'asc' }} width="120px">
                Company
              </HeaderCell>
              <HeaderCell name="added" sort={{ sort: 'name', direction: 'asc' }} width="160px">
                Added
              </HeaderCell>
            </Header>
            <>
              {[
                {
                  firstName: 'Joanna',
                  lastName: 'Doe',
                  status: ['Answered', 'Mail received', 'Opened RFV'],
                  company: 'Company 1',
                  date: ['14/Mar/2019 17:30', '14/Mar/2019 17:30', '14/Mar/2019 17:30'],
                },
                {
                  firstName: 'Helen',
                  lastName: 'Elien',
                  status: ['Canceled', 'Mail received', 'Has seen RFV'],
                  company: 'Company 2',
                  date: ['14/Mar/2019 17:30', '14/Mar/2019 17:30', '14/Mar/2019 17:30'],
                },
                {
                  firstName: 'Lenny',
                  lastName: 'Hover',
                  status: ['Responding RFV', 'Canceled', 'Mail received'],
                  company: 'Company 3',
                  date: ['14/Mar/2019 17:30', '14/Mar/2019 17:30', '14/Mar/2019 17:30'],
                },
              ].map(row => (
                <ExpandedRow key={row.firstName} content={{ status: row.status, date: row.date }}>
                  <Cell width="170px">
                    <Avatar firstName={row.firstName} size={Avatar.sizes.small} />
                    <Text>{`${row.firstName} ${row.lastName}`}</Text>
                  </Cell>
                  <Cell width="140px">
                    <Text>{row.status[0]}</Text>
                  </Cell>
                  <Cell width="120px">
                    <Text>{row.company}</Text>
                  </Cell>
                  <Cell width="160px">
                    <Text>{row.date[0]}</Text>
                  </Cell>
                </ExpandedRow>
              ))}
            </>
          </Table>
        </Col>
      </Row>
    </>
  </BrowserRouter>
));

export const DropDownDecorator = decorator('Complex components', ButtonDocs, ButtonReadme).add('DropDown', () => (
  <>
    <Row>
      <Col s="12">
        <DropDown
          options={[{ value: 'alphanumeric', label: 'Alphanumeric' }, { value: 'requests', label: 'Requests' }]}
        />
      </Col>
    </Row>
  </>
));

export const PaginationSelectDecorator = decorator('Complex components', ButtonDocs, ButtonReadme).add(
  'Pagination Select',
  () => (
    <BrowserRouter>
      <>
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
      </>
    </BrowserRouter>
  ),
);

export const QuestionDecorator = decorator('Complex components', ButtonDocs, ButtonReadme).add('Question', () => (
  <>
    <Row style={{ backgroundColor: '#FAFAFA' }}>
      <Col s="9">
        <Question
          question={{
            index: '1',
            weight: '2',
            title:
              'Why does my CD keep stopping and starting when importing audio files (songs) to iTunes? I get a Smart Check warning on my Macbook Pro. What should I do?',
            questions: [
              {
                weight: '5',
                question:
                  'The optics on the CD drive may be very dusty or dirty causing the drive to have problems reading the CD.  Sometimes the laser in the CD just becomes too weak to accurately read the discs.  Just because the CD is new, good & clean does not mean the quality of the pressing is any good. ',
              },
              { weight: '3', question: 'Answer 2' },
              { weight: '1', question: 'Answer 3' },
            ],
          }}
        />
      </Col>
    </Row>
  </>
));
