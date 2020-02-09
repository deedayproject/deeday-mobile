import React from 'react';
import { View, Text } from 'react-native';
import Component from '@/components/Component';
import style from './styles/EnvironmentalImpact';

interface Props {
  distance: number;
  values: {
    distance: number;
    comfort: number;
    accessibility: number;
  };
}

export default class EnvironmentalImpact extends Component<Props> {
  summary(): number {
    const { values } = this.props;
    return Object.values(values).reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
  }

  render(): React.ReactNode {
    const { values, distance } = this.props;
    return (
      <View style={style.card}>
        <View style={style.cardHead}>
          <Text style={style.summaryValue}>{this.summary()}KG</Text>
          <Text style={style.impact}>Impact environnemental</Text>
        </View>
        <View style={style.fields}>
          <View style={style.field}>
            <Text style={style.fieldValue}>{values.distance}</Text>
            <Text style={style.fieldDesc}>{distance}km à pied du lieu de travail</Text>
          </View>
          <View style={style.field}>
            <Text style={style.fieldValue}>{values.comfort}</Text>
            <Text style={style.fieldDesc}>Confort de vie et aménagement</Text>
          </View>
          <View style={style.field}>
            <Text style={style.fieldValue}>{values.accessibility}</Text>
            <Text style={style.fieldDesc}>Accessibilité pour tous</Text>
          </View>
        </View>
      </View>
    );
  }
}
