import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openUrl = url => {
    Linking.openURL(url);
  };
  return (
    <View>
      <Text style={styles.cardHeading}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Welcome to India</Text>
        </View>
        <Image
          source={{uri: 'https://cdn.thecodehelp.in/Agra.jpeg'}}
          style={styles.imageCard}
        />
        <Text style={styles.description} numberOfLines={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          impedit est harum molestiae amet perspiciatis. Blanditiis debitis
          voluptates quibusdam. Labore sit quod cumque ex quos dignissimos ipsum
          cupiditate nesciunt odio.
        </Text>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => openUrl('https://www.instagram.com')}>
            <Text style={styles.buttonText}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              openUrl(
                'https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=15',
              )
            }>
            <Text style={styles.buttonText}>YouTube</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  cardHeading: {
    fontSize: 25,
    paddingHorizontal: 15,
    fontWeight: '500',
    color: 'white',
    paddingTop: 15,
  },

  imageCard: {
    height: 200,
    borderRadius: 6,
  },
  card: {
    backgroundColor: '#F4BE2C',
    margin: 5,
    borderRadius: 12,
  },
  elevatedCard: {
    padding: 10,
    elevation: 10,
  },
  heading: {
    marginVertical: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#242B2E',
  },
  description: {
    color: '#242B2E',
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 3,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginVertical: 8,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 24,
    margin: 2,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 15,
    color: '#F7CD2E',
  },
});
