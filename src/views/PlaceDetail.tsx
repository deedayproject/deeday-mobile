import React from 'react';
import {
  ScrollView, View, Image, Text, TouchableOpacity,
} from 'react-native';
import Component from '@/components/Component';
import StarRating from '@/components/StarRating';
import EnvironmentalImpact from '@/components/EnvironmentalImpact';
import background from '@/assets/img/background-cafe-barge.png';
import mapPin from '@/assets/img/map-pin.png';
import Phone from '@/assets/img/phone.png';
import Comment from '@/components/Comment';
import style from './styles/PlaceDetail';

export default class PlaceDetail extends Component {
  goToComments(): void {
    console.log('Going to comments...');
  }

  render(): React.ReactNode {
    return (
      <View style={style.placeDetailView}>
        <View>
            <Image style={style.headerImage} source={background} />
        </View>
        <ScrollView bounces={false} style={style.scrollView}>
          <View style={{ height: 200 }}/>
          <View style={style.scrollViewContent}>
            <View style={style.head}>
              <View style={style.infos}>
                <Text style={style.placeTitle}>Le Café Barge</Text>
                <View style={style.row}>
                  <Image source={mapPin}/>
                  <Text style={style.placeAddress}>Port de la rapée, 75012 Paris</Text>
                </View>
                <View style={[style.row]}>
                  <StarRating value={4} />
                  <Text style={style.reviewsAmount}>80 avis</Text>
                </View>
              </View>
              <Text>
                À partir de{'\n'}
                <Text style={style.priceSpan}>200€</Text>
              </Text>
            </View>
            <EnvironmentalImpact
              distance={200}
              values={{ accessibility: 20, comfort: 40, distance: 10 }} />
            <Text style={style.description}>Description</Text>
            <Text style={style.descriptionContent}>
              Un espace exceptionnel dédié aux événements corporate a ouvert ses portes à Paris.
              Gastronomie, le vin, la gourmandise font également partie des piliers du Concept
              Store.
            </Text>
            <View style={style.contact}>
              <Image
                style={style.profilePicture}
                source={{ uri: 'https://i.nook.sh/pp.jpg' }} />
              <View style={style.contactDetails}>
                <Text style={style.contactName}>Neil Richter</Text>
                <Text style={style.contactRole}>Gérant du lieu</Text>
              </View>
              <Image style={style.phone} source={Phone} />
            </View>
            <Text style={style.subtitle}>Certification label écologique</Text>
            <View style={style.separator} />
            <Text style={style.subtitle}>Horaires</Text>
            <View style={style.separator} />
            <Text style={style.subtitle}>Equipement</Text>
            <View style={style.separator} />
            <Text style={style.subtitle}>Lieu</Text>
            <Text style={style.title}>Commentaires</Text>
            {
              [...Array(3)].map((el, key) => <Comment key={key} />)
            }
            <TouchableOpacity onPress={() => this.goToComments()}>
              <Text style={style.link}>Afficher les {80} autres commentaires</Text>
            </TouchableOpacity>
          </View>
          <View style={style.similarProducts}>
            <Text style={[style.title, { marginHorizontal: 25 }]}>Produits Similaires</Text>
          </View>
          <View style={{}}>
            <Text style={[style.title, { marginHorizontal: 25 }]}>Et avec ça ?</Text>
            <Text style={[style.descriptionContent, { marginHorizontal: 25 }]}>
              Vous avez trouvé un lieu capable de respecter vos consignes
              environnementales ? Excellent ! Mais il vous reste encore bien du
              chemin à parcourir n’est-ce pas ! A quels prestataires faire appel
              pour le buffet ? les boissons ? Quelle animation choisir ?
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
