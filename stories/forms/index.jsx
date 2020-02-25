import React from 'react';

import ButtonReadme from 'components/button/button-README.md';
import ButtonDocs from 'components/button/button-DOCS.md';

import TextInputDocs from 'components/form/text/text-DOCS.md';
import CheckboxDocs from 'components/form/checkbox/checkbox-DOCS.md';
import RadioDocs from 'components/form/radiobutton/radio-DOCS.md';
import SelectInputDocs from 'components/form/select/select-DOCS.md';
import SearchInputDocs from 'components/form/search/search-DOCS.md';
import FileInputDocs from 'components/form/file/file-DOCS.md';
import DropzoneDocs from 'components/form/dropzone/dropzone-DOCS.md';

import {
  DatePicker,
  TextArea,
  TextInput,
  SelectInput,
  Checkbox,
  Search,
  Row,
  Col,
  TextWithButton,
  FileInput,
  Dropzone,
  Icon,
  Radio,
} from 'index';

import { decorator } from '../../utils/decorator';

const Wrapper = () => (
  <div
    style={{
      backgroundColor: 'white',
      marginTop: '30px',
    }}
  />
);

export default decorator('Forms', TextInputDocs, ButtonReadme).add('Input components', () => (
  <Wrapper>
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
        <TextInput labelText="Label" placeholder="Placeholder" />
      </Col>
    </Row>
    <Row>
      <Col s="12">
        <TextInput labelText="With error label" error="Error label" placeholder="Error" />
      </Col>
    </Row>
    <Row>
      <Col s="12">
        <TextInput disabled placeholder="Disabled" />
      </Col>
    </Row>
    <Row>
      <Col s="12">
        <TextWithButton labelText="With error label" error="Error label" iconName="date" placeholder="DD/MM/YYYY" />
      </Col>
    </Row>
    <Row>
      <Col s="12">
        <TextWithButton iconName="date" disabled placeholder="Disabled" />
      </Col>
    </Row>
  </Wrapper>
));

export const CheckboxDecorator = decorator('Forms', CheckboxDocs, ButtonReadme).add('Checkbox', () => (
  <Wrapper>
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
  </Wrapper>
));

export const Radiobutton = decorator('Forms', RadioDocs, ButtonReadme).add('Radiobutton', () => (
  <Wrapper>
    <Row>
      <Col s="12">
        <Radio label="Radio" id="radio1" />
      </Col>
      <Col s="12">
        <Radio label="Disabled unckecked" id="radio2" disabled />
      </Col>
      <Col s="12">
        <Radio label="Checked Radio" id="radio3" value="radio3" />
      </Col>
      <Col s="12">
        <Radio label="Disabled checked" id="radio4" value="radio4" disabled />
      </Col>
    </Row>
  </Wrapper>
));

export const SelectDecorator = decorator('Forms', SelectInputDocs, ButtonReadme).add('Select', () => (
  <Wrapper>
    <Row>
      <Col s="12">
        <SelectInput
          labelText="With error label"
          error="Required"
          options={[{ value: 'First', label: 'First option' }, { value: 'Second', label: 'Second option' }]}
        />
      </Col>
      <Col s="12">
        <SelectInput isDisabled />
      </Col>
    </Row>
    <Row>
      <Col s="6">
        <SelectInput />
      </Col>
    </Row>
  </Wrapper>
));

export const SearchDecorator = decorator('Forms', SearchInputDocs, ButtonReadme).add('Search Input', () => (
  <Wrapper>
    <Row>
      <Search />
    </Row>
  </Wrapper>
));

export const FileDecorator = decorator('Forms', FileInputDocs, ButtonReadme).add('File Input', () => (
  <Wrapper>
    <Row>
      <Col s="12">
        <FileInput labelText="File label" accept="application/pdf" icon={Icon.icons.pdf} />
      </Col>
    </Row>
  </Wrapper>
));

export const DropzoneDecorator = decorator('Forms', DropzoneDocs, ButtonReadme).add('Dropzone', () => (
  <Wrapper>
    <Row>
      <Dropzone accept="application/pdf" icon={Icon.icons.pdf} />
    </Row>
  </Wrapper>
));

export const DayPickerDecorator = decorator('Forms', FileInputDocs, ButtonReadme).add('DayPicker Input', () => (
  <Wrapper>
    <Row>
      <DatePicker labelText="With error label" error="Required" />
    </Row>
    <Row>
      <DatePicker isTime labelText="With error label" />
    </Row>
  </Wrapper>
));
