import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.heading}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.textBox}>Box1</Text>
        </View>
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.textBox}>Box2</Text>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text style={styles.textBox}>Box3</Text>
        </View>
        <View style={[styles.box, styles.box4]}>
          <Text style={styles.textBox}>Box4</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    paddingHorizontal: 15,
    fontWeight: '500',
    color: 'white',
    paddingTop: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    backgroundColor: 'gray',
    height: 100,
    width: 100,
    padding: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  box1: {
    backgroundColor: 'red',
  },
  box2: {
    backgroundColor: 'yellow',
  },
  box3: {
    backgroundColor: 'green',
  },
  box4: {
    backgroundColor: 'violet',
  },
  textBox: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
