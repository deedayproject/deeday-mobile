import React from 'react';
import Component from '@/components/Component';
import { View, Image, Text } from 'react-native';
import StarRating from './StarRating';
import style from './styles/Comment';

export default class Comment extends Component {
  formatDate(date: Date): string {
    return [
      date.getDate().toString().padStart(2, '0'),
      (date.getMonth() + 1).toString().padStart(2, '0'),
      date.getFullYear().toString().slice(-2),
    ].join('/');
  }

  render(): React.ReactNode {
    return (
      <View style={style.comment}>
        <View style={style.head}>
          <Image style={style.picture} source={{ uri: 'https://i.nook.sh/pp.jpg' }} />
          <View style={style.infos}>
            <Text style={style.name}>Neil Richter</Text>
            <View style={style.row}>
              <StarRating value={4} />
              <Text style={style.date}>{this.formatDate(new Date())}</Text>
            </View>
          </View>
        </View>
        <Text style={style.content}>
          Réservation effectuée quelques jours avant. Nous avons été
          plus que satisfaits: accueil, service, rapidité et un excellent
          burger « le Max » servi avec frites salade fraîches. Le plat m’a
          suffit, je me laisserai tenté par un dessert la prochaine fois !
        </Text>
      </View>
    );
  }
}
