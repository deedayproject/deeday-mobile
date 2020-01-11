import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Component from '@/components/Component';
import Container from '@/components/Container';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontFamily: 'gilroy-bold'
  }
})

export default class HomeScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.title}>{this.$t('deeday')}</Text>
      </Container>
    );
  }
}
