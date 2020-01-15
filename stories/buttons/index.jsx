import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import ButtonReadme from 'components/button/button-README.md';
import ButtonDocs from 'components/button/button-DOCS.md';

import LinkReadme from 'components/link/link-README.md';
import LinkDocs from 'components/link/link-DOCS.md';

import IconButtonReadme from 'components/icon-button/icon-button-README.md';
import IconButtonDocs from 'components/icon-button/icon-button-DOCS.md';

import ButtonIconDocs from 'components/button-icon/button-icon-DOCS.md';

import {
  UnderlinedButton,
  PrimaryButton,
  SecondaryButton,
  Button,
  PrimaryLink,
  PrimaryButtonIcon,
  Row,
  Col,
  Icon,
  IconButton,
  LinkIcon,
} from 'index';

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

export default decorator('Button', ButtonDocs, ButtonReadme).add('Button components', () => (
  <Wrapper>
    <Row>
      <Col s="12">
        <PrimaryButton>Primary Button</PrimaryButton>
        <PrimaryButton disabled>Primary disabled</PrimaryButton>
      </Col>
    </Row>
    <Row>
      <Col s="12">
        <Button>Button</Button>
        <Button disabled>Button disabled</Button>
      </Col>
    </Row>
    <Row>
      <Col s="12">
        <SecondaryButton>Secondary Button</SecondaryButton>
        <SecondaryButton disabled>Secondary Disabled</SecondaryButton>
      </Col>
    </Row>
    <Row>
      <Col s="12">
        <UnderlinedButton>Secondary Button</UnderlinedButton>
        <UnderlinedButton disabled>Secondary Disabled</UnderlinedButton>
      </Col>
    </Row>
  </Wrapper>
));

export const Links = decorator('Button', LinkDocs, LinkReadme).add('Link components', () => (
  <BrowserRouter>
    <Wrapper>
      <Row>
        <Col s="12">
          <PrimaryButton component="link" to="/">Primary Button Link</PrimaryButton>
          <PrimaryButton component="link" to="/" disabled>
            Primary disabled
          </PrimaryButton>
        </Col>
      </Row>
      <Row>
        <Col s="12">
          <Button component="link" to="/">Button Link</Button>
          <Button component="link" to="/" disabled>
            Button Link disabled
          </Button>
        </Col>
      </Row>
      <Row>
        <Col s="12">
          <SecondaryButton component="link" to="/">Secondary Button Link</SecondaryButton>
          <SecondaryButton component="link" to="/" disabled>
            Secondary Disabled
          </SecondaryButton>
        </Col>
      </Row>

       <Row>
        <Col s="12">
          <PrimaryLink to="/">Primary Link</PrimaryLink>
          <PrimaryLink to="/" disabled>
            Disabled
          </PrimaryLink>
        </Col>
      </Row>

      <Row>
        <Col s="12">
          <LinkIcon to="/" icon={Icon.icons.arrowForward}>LinkIcon</LinkIcon>
          <LinkIcon to="/" icon={Icon.icons.arrowForward} disabled>
            Disabled
          </LinkIcon>
        </Col>
      </Row>
      <Row>
        <Col s="12">
          <LinkIcon contentFirst icon={Icon.icons.arrowForward} to="/">
            LinkIcon Content First
          </LinkIcon>
          <LinkIcon contentFirst icon={Icon.icons.arrowForward} to="/" disabled>
            Disabled
          </LinkIcon>
        </Col>
      </Row>
    </Wrapper>
  </BrowserRouter>
));

export const ButtonIcons = decorator('Button', ButtonIconDocs, IconButtonReadme).add('Button icon components', () => (
  <BrowserRouter>
    <Wrapper>
      <Row>
        <Col s="12">
          <PrimaryButtonIcon icon={PrimaryButtonIcon.icons.trash} />
          <PrimaryButtonIcon icon={PrimaryButtonIcon.icons.trash} disabled />
        </Col>
        <Col s="12">
          <PrimaryButtonIcon icon={PrimaryButtonIcon.icons.close} />
          <PrimaryButtonIcon icon={PrimaryButtonIcon.icons.close} disabled />
        </Col>
        <Col s="12">
          <PrimaryButtonIcon icon={PrimaryButtonIcon.icons.edit} />
          <PrimaryButtonIcon icon={PrimaryButtonIcon.icons.edit} disabled />
        </Col>
        <Col s="12">
          <PrimaryButtonIcon icon={PrimaryButtonIcon.icons.date} />
          <PrimaryButtonIcon icon={PrimaryButtonIcon.icons.date} disabled />
        </Col>
      </Row>
    </Wrapper>
  </BrowserRouter>
));

export const IconButtons = decorator('Button', IconButtonDocs, IconButtonReadme).add('IconButton components', () => (
  <BrowserRouter>
    <Wrapper>
      <Row>
        <IconButton icon={Icon.icons.chevronDown}>IconButton</IconButton>
        <IconButton icon={Icon.icons.chevronDown} disabled>IconButton Disabled</IconButton>
      </Row>
    </Wrapper>
  </BrowserRouter>
));
