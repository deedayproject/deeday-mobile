import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '@/views/Home';
import PlaceDetail from '@/views/PlaceDetail';
import ItemPreview from '@/components/ItemPreview';
import TabBar from '@/components/TabBar';

export default createBottomTabNavigator({
  Home: {
    screen: Home,
    params: {
      icon: 'home',
    },
  },
  PlaceDetail: {
    screen: PlaceDetail,
    params: {
      icon: 'home',
    },
  },
  ItemPreview: {
    screen: ItemPreview,
    params: {
      icon: 'home',
    },
  },
}, {
  initialRouteName: 'PlaceDetail',
  tabBarComponent: TabBar,
});
