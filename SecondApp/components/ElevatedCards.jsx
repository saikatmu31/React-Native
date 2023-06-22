import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.heading}>ElevatedCards</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.textBox}>Scroll</Text>
          </View>
          <View style={[styles.box, styles.box2]}>
            <Text style={styles.textBox}>Me</Text>
          </View>
          <View style={[styles.box, styles.box3]}>
            <Text style={styles.textBox}>To</Text>
          </View>
          <View style={[styles.box, styles.box4]}>
            <Text style={styles.textBox}>Reach</Text>
          </View>
          <View style={[styles.box, styles.box5]}>
            <Text style={styles.textBox}>Right</Text>
          </View>
          <View style={[styles.box, styles.box6]}>
            <Text style={styles.textBox}>Side</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

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
    height: 120,
    width: 200,
    padding: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 10,
    // shadowColor: 'black',
    // shadowOffset: 10,
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
  box5: {
    backgroundColor: 'white',
  },
  box6: {
    backgroundColor: 'silver',
  },
  textBox: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
