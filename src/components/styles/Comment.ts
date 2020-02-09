import { StyleSheet } from 'react-native';
import { Colors } from '@/constants';

export default StyleSheet.create({
  comment: {
    marginVertical: 10,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  picture: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  infos: {
    marginLeft: 15,
  },
  name: {
    fontFamily: 'gilroy-bold',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
  },
  date: {
    marginLeft: 5,
    color: Colors.gray,
    fontFamily: 'gilroy-medium',
  },
  content: {
    fontFamily: 'gilroy-medium',
    fontSize: 15,
    color: Colors.paragraph,
    lineHeight: 17,
  },
});
