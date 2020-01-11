import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '@/views/Home';
import TabBar from '@/components/TabBar';

export default createBottomTabNavigator({
  Home: {
    screen: Home,
    params: {
      icon: "home"
    }
  },
},{
  initialRouteName: 'Home',
  tabBarComponent: TabBar,
});