import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/constants';

const win = Dimensions.get('window');

export default StyleSheet.create({
  placeDetailView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  headerImage: {
    height: 250,
    width: win.width,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontFamily: 'gilroy-bold',
    fontSize: 18,
    marginVertical: 15,
  },
  scrollViewContent: {
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -20,
    },
    shadowRadius: 50,
    shadowOpacity: 0.8,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 35,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infos: {
    flex: 1,
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'center',
  },
  placeTitle: {
    width: '100%',
    fontSize: 30,
    fontFamily: 'gilroy-bold',
  },
  placeAddress: {
    fontSize: 14,
    color: Colors.darkGray,
    marginLeft: 5,
  },
  subtitle: {
    color: Colors.altGray,
    fontFamily: 'gilroy-bold',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.altGray,
    marginVertical: 15,
  },
  price: {
    marginLeft: 10,
    fontFamily: 'gilroy-light',
    fontSize: 13,
  },
  reviewsAmount: {
    marginLeft: 5,
    fontSize: 11,
    color: Colors.gray,
    textAlignVertical: 'bottom',
  },
  link: {
    color: Colors.fluoGreen,
    fontFamily: 'gilroy-bold',
    fontSize: 16,
  },
  priceSpan: {
    fontSize: 26,
    fontFamily: 'gilroy-bold',
    color: Colors.fluoGreen,
  },
  description: {
    fontFamily: 'gilroy-bold',
    fontSize: 18,
    marginVertical: 12,
  },
  descriptionContent: {
    fontFamily: 'gilroy-medium',
    fontSize: 14,
    lineHeight: 19,
    color: Colors.lightGray,
  },
  contact: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  contactDetails: {
    flex: 1,
    marginHorizontal: 15,
  },
  contactName: {
    fontSize: 16,
    fontFamily: 'gilroy-medium',
  },
  contactRole: {
    fontSize: 16,
    fontFamily: 'gilroy-bold',
  },
  phone: {
  },
  similarProducts: {
    backgroundColor: Colors.paleGreen,
    paddingVertical: 15,
  },
});
