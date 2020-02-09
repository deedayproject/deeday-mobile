import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { StatusBar } from 'react-native';
import * as Font from 'expo-font';
import TabNavigator from '@/navigation/tab-navigator';

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
  componentDidMount(): void {
    Font.loadAsync({
      gilroy: require('./assets/fonts/Gilroy-Regular.ttf'),
      'gilroy-bold': require('./assets/fonts/Gilroy-Bold.ttf'),
      'gilroy-medium': require('./assets/fonts/Gilroy-Medium.ttf'),
      'gilroy-light': require('./assets/fonts/Gilroy-Light.ttf'),
      'gilroy-heavy': require('./assets/fonts/Gilroy-Heavy.ttf'),
    })
      .then(() => this.setState({ fontsLoaded: true }));
  }

  render(): React.ReactNode {
    const { fontsLoaded } = this.state;
    return [
      <StatusBar key={0} barStyle={'dark-content'} />,
      fontsLoaded && <AppContainer key={1} />,
    ];
  }
}

export default App;
