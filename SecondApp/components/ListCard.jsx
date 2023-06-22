import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const ListCard = () => {
  const contact = [
    {
      id: 1,
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      description: 'Software engineer, coffee enthusiast.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      description: 'Designer, dog lover, foodie.',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      description: 'Writer, adventurer, music lover.',
    },
    {
      id: 4,
      name: 'Sarah Lee',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      description: 'Fitness instructor, bookworm, traveler.',
    },
    {
      id: 5,
      name: 'David Brown',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      description: 'Artist, nature lover, wine enthusiast.',
    },
    {
      id: 6,
      name: 'Emily Chen',
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      description: 'Entrepreneur, fashionista, coffee addict.',
    },
    {
      id: 7,
      name: 'Mark Davis',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      description: 'Photographer, food lover, music fan.',
    },
    {
      id: 8,
      name: 'Alice Green',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
      description: 'Graphic designer, cat person, beach bum.',
    },
    {
      id: 9,
      name: 'Adam Taylor',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
      description: 'Gamer, movie buff, technology enthusiast.',
    },
    {
      id: 10,
      name: 'Olivia White',
      image: 'https://randomuser.me/api/portraits/women/10.jpg',
      description: 'Writer, music lover, yoga practitioner.',
    },
  ];
  return (
    <View>
      <Text style={styles.heading}>ListCard</Text>
      <ScrollView style={styles.contactCards}>
        {contact.map(({id, name, image, description}) => {
          return (
            <View key={id} style={[styles.card, styles.elevatedCard]}>
              <Image source={{uri: image}} style={styles.image} />
              <View style={styles.textView}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    paddingHorizontal: 15,
    fontWeight: '500',
    color: 'white',
    paddingTop: 15,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 12,
    borderColor: 'white',
    borderWidth: 1,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 3,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  elevatedCard: {
    elevation: 5,
    backgroundColor: '#242B2E',
    borderRadius: 7,
    shadowColor: '#758283',
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#CAD5E2',
  },
  description: {
    color: '#CAD5E2',
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
});
