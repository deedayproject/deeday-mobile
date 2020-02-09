import React from 'react';
import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import Component from '@/components/Component';
import styles from './styles/TabBarItem';

interface Props {
  iconName: string;
  title: string;
  isActive: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

export default class TabBar extends Component<Props> {
  render() {
    const {
      iconName, title, isActive, onPress,
    } = this.props;
    return (
      <TouchableOpacity style={styles.tabBarItem} onPress={onPress}>
        <Icon
          name={iconName}
          style={[styles.tabBarItemIcon, isActive && styles.tabBarItemIconActive]} />
        <Text style={[styles.tabBarItemText, isActive && styles.tabBarItemTextActive]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
