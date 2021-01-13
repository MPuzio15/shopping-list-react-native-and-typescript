import React, {FC} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Item} from '../data/data';

const ListItem: FC<Item> = (props) => {
  const {bought, quantity, name, id, onPress} = props;
  console.log(props);
  return (
    <TouchableOpacity style={[styles.container]}>
      <View style={styles.nameContainer}>
        <Text style={[styles.text, {color: bought ? 'gray' : 'black'}]}>
          {name}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>{quantity}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 8,
    fontSize: 18,
    borderBottomWidth: 0.2,
    marginHorizontal: 20,
  },
  containerBought: {
    textDecorationLine: 'line-through',
    textDecorationColor: 'gray',
  },
  nameContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
});
