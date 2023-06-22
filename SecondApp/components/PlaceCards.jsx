import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PlaceCards = ({imageUrl}) => {
  return (
    <View>
      <View>
        <View style={[styles.card, styles.elevateCard]}>
          <View>
            <Image src={imageUrl} style={styles.cardImage} />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Agra,India</Text>
            <Text style={styles.cardDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              ipsa eveniet provident vel itaque tenetur fuga sequi adipisci in
              placeat.
            </Text>
            <Text style={styles.cardFooter}>15 minutes walk</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlaceCards;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    height: 400,
    borderRadius: 8,
    marginBottom: 12,
  },
  elevatedCard: {
    elevation: 20,
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardText: {
    // color: 'black',
    padding: 8,
  },
  cardTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardLabel: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 8,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 14,
    marginBottom: 12,
  },
  cardFooter: {
    color: 'green',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'right',
  },
});
