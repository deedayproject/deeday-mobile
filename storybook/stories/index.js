import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import './tsExample';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={() => {}}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={() => console.log('emoji clicked')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
