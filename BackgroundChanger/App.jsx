import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const changeBackgroundColor = () => {
    hexRange = '0123456789ABCDE';
    color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange.charAt(Math.floor(Math.random() * hexRange.length));
    }
    setBackgroundColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={backgroundColor} />
      <View style={[{backgroundColor: backgroundColor}, styles.background]}>
        <TouchableOpacity
          style={[styles.button, styles.elevatedButton]}
          onPress={changeBackgroundColor}>
          <View>
            <Text style={styles.buttonText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    margin: 10,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 5,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
  elevatedButton: {
    elevation: 2,
  },
  buttonText: {
    color: 'white',
  },
});
