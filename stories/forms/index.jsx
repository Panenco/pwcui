import React from 'react';

import ButtonReadme from 'components/button/button-README.md';
import ButtonDocs from 'components/button/button-DOCS.md';

import { TextArea, TextInput, SelectInput, Checkbox, Search, Row, Col, TextWithButton, FileInput, Icon } from 'index';

import { decorator } from '../../utils/decorator';

export default decorator('Forms', ButtonDocs, ButtonReadme).add('Input components', () => (
  <>
   <Row>
      <Col s="12">
        <TextArea placeholder="Placeholder" />
      </Col>
    </Row>
    <Row>
      <Col s="12">
        <TextArea disabled placeholder="Disabled" />
      </Col>
    </Row>
    <Row>
      <Col s="12">
        <TextInput placeholder="Placeholder" />
      </Col>
    </Row>
    <Row>
      <Col s="12">
        <TextInput error placeholder="Error" />
      </Col>
    </Row>
    <Row>
      <Col s="12">
        <TextInput disabled placeholder="Disabled" />
      </Col>
    </Row>
    <Row>
      <Col s="12">
        <TextWithButton iconName="date" placeholder="DD/MM/YYYY" />
      </Col>
    </Row>
    <Row>
      <Col s="12">
        <TextWithButton iconName="date" disabled placeholder="Disabled" />
      </Col>
    </Row>
  </>
));

export const CheckboxDecorator = decorator('Forms', ButtonDocs, ButtonReadme).add('Checkbox', () => (
  <>
    <Row>
      <Col s="12">
        <Checkbox label="Checkbox" id="check1" />
      </Col>
      <Col s="12">
        <Checkbox label="Disabled unckecked" id="check2" disabled />
      </Col>
      <Col s="12">
        <Checkbox label="Checked Checkbox" id="check3" checked />
      </Col>
      <Col s="12">
        <Checkbox label="Disabled checked" id="check4" checked disabled />
      </Col>
    </Row>
  </>
));

export const SelectDecorator = decorator('Forms', ButtonDocs, ButtonReadme).add('Select', () => (
  <>
    <Row>
      <Col s="12">
        <SelectInput
          options={[{ value: 'First', label: 'First option' }, { value: 'Second', label: 'Second option' }]}
        />
      </Col>
      <Col s="12">
        <SelectInput isDisabled />
      </Col>
    </Row>
  </>
));

export const SearchDecorator = decorator('Forms', ButtonDocs, ButtonReadme).add('Search Input', () => (
  <>
    <Row>
      <Search />
    </Row>
  </>
));

// export const FileDecorator = decorator('Forms', ButtonDocs, ButtonReadme).add('File Input', () => (
//   <>
//     <Row>
//       <FileInput accept="application/pdf" icon={Icon.icons.pdf} />
//     </Row>
//   </>
// ));
