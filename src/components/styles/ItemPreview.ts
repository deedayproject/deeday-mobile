import { StyleSheet } from 'react-native';
import { Colors } from '@/constants';

export default StyleSheet.create({
  thumbnail: {
    height: 130,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  card: {
    width: '95%',
    borderRadius: 6,
    shadowColor: '#000000',
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 40,
    shadowOpacity: 0.05,
  },
  likeButton: {
    backgroundColor: Colors.white,
    padding: 5,
    borderRadius: 100,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  indicator: {
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  indicatorText: {
    fontSize: 10,
  },
  cardInformations: {
    padding: 15,
  },
  gray: {
    color: Colors.darkGray,
  },
  split: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 1,
  },
  category: {
    color: Colors.fluoGreen,
  },
  title: {
    marginRight: 10,
    fontSize: 24,
  },
  price: {
    fontSize: 24,
  },
});
