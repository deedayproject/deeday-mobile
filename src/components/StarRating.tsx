import React from 'react';
import { View, Image, ImageStyle } from 'react-native';
import Component from '@/components/Component';
import StarFilled from '@/assets/img/star-filled.png';
import StarEmpty from '@/assets/img/star-empty.png';
import style from './styles/StarRating';

interface Props {
  value: number;
  size?: number;
}

export default class StarRating extends Component<Props> {
  static defaultSize = 12;

  render() {
    const value = Math.round(this.props.value);
    const size: ImageStyle = {
      width: this.props.size || StarRating.defaultSize,
      height: this.props.size || StarRating.defaultSize,
    };
    return (
      <View style={style.starRow}>
        {
          [...Array(value)]
            .map((el, key) => (
            <Image
              key={key}
              style={[style.star, size]}
              source={StarFilled} />
            ))
        }
        {
          [...Array(5 - value)]
            .map((el, key) => (
              <Image
                key={key}
                style={[style.star, size]}
                source={StarEmpty} />
            ))
        }
      </View>
    );
  }
}
