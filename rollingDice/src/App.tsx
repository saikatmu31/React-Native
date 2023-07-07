import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';

import one from '../assets/One.png';
import two from '../assets/Two.png';
import three from '../assets/Three.png';
import four from '../assets/Four.png';
import five from '../assets/Five.png';
import six from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View>
      <Image style={[styles.diceImage]} source={imageUrl} />
    </View>
  );
};

const App = () => {
  const rollDice = () => {
    const generateRandomNumber = Math.floor(Math.random() * 6) + 1;

    switch (generateRandomNumber) {
      case 1:
        setDiceImage(one);
        break;
      case 2:
        setDiceImage(two);
        break;
      case 3:
        setDiceImage(three);
        break;
      case 4:
        setDiceImage(four);
        break;
      case 5:
        setDiceImage(five);
        break;
      case 6:
        setDiceImage(six);
        break;
      default:
        break;
    }
  };
  const [diceImage, setDiceImage] = useState(one);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={rollDice}>
        <Dice imageUrl={diceImage} />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  diceContainer: {
    margin: 12,
    elevation: 2,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
});
