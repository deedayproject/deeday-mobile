import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants';
import Component from './Component';
import styles from './styles/BookButton';

interface Props {
  color: string;
}

export default class BookButton extends Component<Props> {
  static defaultProps: Props = {
    color: Colors.orange,
  }

  public render(): React.ReactNode {
    return (
      <TouchableOpacity activeOpacity={0.7} style={[
        styles.button,
        { backgroundColor: this.props.color },
      ]}>
        <Text style={styles.text}>Réserver</Text>
      </TouchableOpacity>
    );
  }
}
