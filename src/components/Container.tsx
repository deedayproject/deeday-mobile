import React, { Component } from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import Styles from './styles/Container';

interface Props {
  style?: StyleProp<ViewStyle>;
  centered?: boolean;
}

export default class Container extends Component<Props> {
  render() {
    const { centered } = this.props;
    return (
      <SafeAreaView
        style={[
          Styles.container,
          centered && Styles.centered,
          this.props.style && this.props.style,
        ]}
        {...(({ style, ...rest }) => rest)(this.props)}>
        {this.props.children && this.props.children}
      </SafeAreaView>
    );
  }
}
