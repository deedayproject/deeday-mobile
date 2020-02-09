import React from 'react';
import { View, Image } from 'react-native';
import Component from '@/components/Component';
import StarFilled from '@/assets/img/star-filled.png';
import StarEmpty from '@/assets/img/star-empty.png';
import style from './styles/StarRating';

interface Props {
  value: number;
}

export default class StarRating extends Component<Props> {
  render() {
    const value = Math.round(this.props.value);
    return (
      <View style={style.starRow}>
        {
          [...Array(value)]
            .map((el, key) => <Image key={key} style={style.star} source={StarFilled} />)
        }
        {
          [...Array(5 - value)]
            .map((el, key) => <Image key={key} style={style.star} source={StarEmpty} />)
        }
      </View>
    );
  }
}
