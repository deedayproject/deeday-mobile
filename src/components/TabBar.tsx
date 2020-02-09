import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { NavigationTabProp } from 'react-navigation-tabs';
import Component from '@/components/Component';
import TabBarItem from '@/components/TabBarItem';
import styles from './styles/TabBar';

interface Props {
  navigation?: NavigationTabProp;
}

export default class TabBar extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const navigationState = this.props.navigation.state;
    return (
      <SafeAreaView>
        <View style={styles.tabBarContainer}>
          {navigationState.routes.map((item) => (
            <TabBarItem
              key={item.routeName}
              title={item.routeName}
              isActive={item.routeName === navigationState.routes[navigationState.index].routeName}
              iconName={item.params.icon}
              onPress={() => this.props.navigation.navigate(item.key)} />
          ))}
        </View>
      </SafeAreaView>
    );
  }
}
