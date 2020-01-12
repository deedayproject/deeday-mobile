import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { StatusBar } from 'react-native';
import * as Font from 'expo-font';
import TabNavigator from '@/navigation/tab-navigator';
import Storybook from './storybook';

export const AppContainer = createAppContainer(TabNavigator);

interface State {
  fontsLoaded: boolean;
}

class App extends Component<{}, State> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }
  componentDidMount() {
    Font.loadAsync({
      'gilroy': require('./assets/fonts/Gilroy-Regular.ttf'),
      'gilroy-bold': require('./assets/fonts/Gilroy-Bold.ttf'),
      'gilroy-medium': require('./assets/fonts/Gilroy-Medium.ttf'),
      'gilroy-light': require('./assets/fonts/Gilroy-Light.ttf'),
      'gilroy-heavy': require('./assets/fonts/Gilroy-Heavy.ttf'),
    })
      .then(() => this.setState({ fontsLoaded: true }));
  }

  render() {
    const { fontsLoaded } = this.state;
    return [
      <StatusBar key={0} barStyle={'dark-content'} />,
      fontsLoaded && <AppContainer key={1} />,
    ];
  }
}

console.log(process.env)

const STORYBOOK_START = false; // Change here to run Storybook instead of app

export default STORYBOOK_START
  ? Storybook
  : App;
