import { StyleSheet } from 'react-native';
import { Colors } from '@/constants';

export default StyleSheet.create({
  card: {
    marginVertical: 16,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: Colors.fluoGreen,
  },
  cardHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  summaryValue: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'gilroy-bold',
  },
  impact: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: 'gilroy-medium',
  },
  fields: {
    flexDirection: 'row',
  },
  field: {
    flexDirection: 'row',
    flex: 1,
  },
  fieldValue: {
    backgroundColor: '#DEF4EC',
    padding: 3,
  },
  fieldDesc: {
    fontSize: 11,
    marginLeft: 5,
    flexWrap: 'wrap',
  },
});
