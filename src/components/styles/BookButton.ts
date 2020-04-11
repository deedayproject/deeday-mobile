import { StyleSheet } from 'react-native';
import { Colors } from '@/constants';

export default StyleSheet.create({
  text: {
    textAlign: 'center',
    flexGrow: 1,
    color: Colors.white,
    fontSize: 16,
  },
  button: {
    borderRadius: 45,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
