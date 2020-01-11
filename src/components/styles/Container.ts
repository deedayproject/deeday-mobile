import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight }),
    height: '100%'
  }
});