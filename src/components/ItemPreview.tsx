import React from 'react';
import {
  View, ImageBackground, Text, Image, TouchableOpacity,
} from 'react-native';

import treeLeaf from '@/assets/img/tree-leaf.png';
import mapPin from '@/assets/img/map-pin.png';
import traiteur from '@/assets/img/traiteur.png';
import heart from '@/assets/img/heart.png';
import { Colors } from '@/constants';
import Component from './Component';
import styles from './styles/ItemPreview';
import Container from './Container';
import StarRating from './StarRating';

export default class ItemPreview extends Component {
  static indicatorColor = {
    low: {
      color: Colors.green,
      backgroundColor: Colors.paleGreen,
    },
  }

  public render(): React.ReactNode {
    return (
      <Container style={{ alignItems: 'center' }}>
        <View style={styles.card}>
          <ImageBackground
            imageStyle={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
            style={styles.thumbnail}
            source={traiteur}>
            <View style={[
              styles.line,
              styles.indicator,
              { backgroundColor: ItemPreview.indicatorColor.low.backgroundColor },
            ]}>
              <Image style={{ marginRight: 5 }} source={treeLeaf} />
              <Text style={[
                styles.indicatorText,
                { color: ItemPreview.indicatorColor.low.color },
              ]}>
                &lt; 600kg{'\n'}de CO2
              </Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.likeButton}>
              <Image source={heart} />
            </TouchableOpacity>
          </ImageBackground>
          <View style={[styles.line, styles.cardInformations, styles.split]}>
            <View>
              <View style={[styles.line]}>
                <Text style={styles.title}>Le Dome Traiteur</Text>
                <StarRating size={10} value={4} />
              </View>
              <Text style={[styles.line, styles.category]}>Serveurs</Text>
              <View style={[styles.line]}>
                <Text style={[styles.gray]}>Gare de Lyon</Text>
                <Image style={{ marginHorizontal: 10 }} source={mapPin} />
                <Text style={[styles.gray]}>A 2km de Paris</Text>
              </View>
            </View>
            <View>
              <Text style={styles.price}>80€</Text>
              <Text>/personne</Text>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}
