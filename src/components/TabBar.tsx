import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { NavigationTabProp } from 'react-navigation-tabs';
import Component from '@/components/Component';
import TabBarItem from '@/components/TabBarItem';
import styles from './styles/TabBar';

interface Props {
  navigation?: NavigationTabProp;
}

interface State {}

export default class TabBar extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.tabBarContainer}>
          {this.props.navigation.state.routes.map(item => (
            <TabBarItem
              key={item.routeName}
              title={item.routeName}
              isActive={item.routeName === this.props.navigation.state.routes[this.props.navigation.state.index].routeName}
              iconName={item.params.icon}
              onPress={() => this.props.navigation.navigate(item.key)} />
          ))}
        </View>
      </SafeAreaView>
    );
  }
}
