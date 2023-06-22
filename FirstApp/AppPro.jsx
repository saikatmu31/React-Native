import React from 'react';
import {View, StyleSheet, Text, useColorScheme} from 'react-native';

const AppPro = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkMode : styles.whiteMode}>
        The Mode in your Device is : {useColorScheme()} and isDarkMode Variable
        is set to {`${isDarkMode}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  darkMode: {
    color: 'white',
    backgroundColor: 'black',
    fontSize: 25,
    padding: 10,
  },
  whiteMode: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 25,
    padding: 10,
  },
});

export default AppPro;
