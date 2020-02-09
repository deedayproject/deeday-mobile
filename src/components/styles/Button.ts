import { StyleSheet } from 'react-native';
import { Colors } from '@/constants';

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.green,
    paddingVertical: 20,
    width: '100%',
    borderRadius: 100,
    shadowColor: '#0CA55C',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  text: {
    color: Colors.white,
    fontFamily: 'gilroy-bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
