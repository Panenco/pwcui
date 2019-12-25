import React from 'react';

import { storiesOf } from '@storybook/react';

import './styles.scss';

import ButtonsStory from './buttons';
import TextStory from './text';
import FormStory from './forms';
import GridStory from './grid';
import CardStory from './cards';
import IconStory from './icons';
import TableStory from './table';
import TabsStory from './tabs';
// import PopupStory from './popup';
// import HeaderStory from './header';
// import ComplexComponentsStory from './complex';
// import AvatarStory from './avatar';

// storiesOf('Avatar', <AvatarStory />);
// storiesOf('Complex', <ComplexComponentsStory />);
storiesOf('Button', <ButtonsStory />);
storiesOf('Grid', <GridStory />);
storiesOf('Text', <TextStory />);
storiesOf('Form', <FormStory />);
storiesOf('Card', <CardStory />);
storiesOf('Icon', <IconStory />);
storiesOf('Table', <TableStory />);
storiesOf('Tabs', <TabsStory />)
// storiesOf('Popup', <PopupStory />);
// storiesOf('Header', <HeaderStory />);
