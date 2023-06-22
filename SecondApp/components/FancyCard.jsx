import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlaceCards from './PlaceCards';

const FancyCard = () => {
  return (
    <ScrollView>
      <Text style={styles.headingText}>FancyCard</Text>
      <PlaceCards imageUrl={'https://cdn.thecodehelp.in/Agra.jpeg'} />
      <PlaceCards imageUrl={'https://cdn.thecodehelp.in/Jaipur.jpeg'} />
      <PlaceCards imageUrl={'https://cdn.thecodehelp.in/Darjeeling.jpeg'} />
    </ScrollView>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    paddingHorizontal: 15,
    fontWeight: '500',
    color: 'white',
    paddingTop: 15,
    paddingBottom: 20,
  },
});
