import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Component from '@/components/Component';
import styles from './styles/Button';

interface Props {
  onPress: () => void;
}

export default class Button extends Component<Props> {
  render(): React.ReactNode {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.onPress()}>
          <Text style={styles.text}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}
