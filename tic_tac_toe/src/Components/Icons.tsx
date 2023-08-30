import {StyleSheet, Text, View} from 'react-native';
import {React, PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
type IconsProps = PropsWithChildren<{
  name: String;
}>;
const Icons = ({name}) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color="#1C8D73" />;
    case 'cross':
      return <Icon name="times" size={38} color="#E21717" />;
    default:
      return <Icon name="pencil" size={38} color="#758283" />;
  }
};

export default Icons;

const styles = StyleSheet.create({});
