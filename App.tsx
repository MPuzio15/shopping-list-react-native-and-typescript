import React, {FC, useEffect, useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Input from './src/components/input';
import addIcon from './src/icons/add.png';
import icon from './src/icons/search.png';
import {Item, Items} from './src/data/data';
import AppButton from './src/components/appButton';

const App: FC = () => {
  const [itemsList, setItemsList] = useState<Item[] | null>(null);
  const [inputShown, setInputShown] = useState<boolean>(false);
  const [newItem, setNewItem] = useState<Item | null>(null);
  const [inputName, setInputName] = useState<string>('');
  const [inputQuantity, setInputQuantity] = useState<string>('');

  useEffect(() => {
    (() => {
      if (Items !== null) {
        setItemsList(Items);
      }
    })();
  }, [setItemsList]);

  const handleSearch = (text: string) => {
    if (Items !== null) {
      const itemsList: Item[] = Items.filter((item) =>
        item.name.toLocaleLowerCase().includes(text),
      );
      setItemsList(itemsList);
    }
  };
  const handleAdd = async () => {
    const changedItem = await newItem;
    const list = await itemsList;
    if (changedItem !== null && list !== null) {
      const itemToSet: Item = {
        id: list?.length,
        name: changedItem?.name,
        quantity: changedItem?.quantity,
        bought: false,
      };
      if (list !== null) {
        setItemsList([...list, itemToSet]);
      } else {
        setItemsList([itemToSet]);
      }
    }
    setInputName('');
    setInputQuantity('');
  };

  const handleItemBought = (newItem: Item) => {
    if (newItem !== null && itemsList !== null) {
      const items = [...itemsList];
      items[newItem.id].bought = !items[newItem.id].bought;
      setItemsList(items);
    } else {
      console.log('Nothing to change');
    }
  };

  const handleRemoveDone = () => {
    if (itemsList !== null) {
      const items = [...itemsList];
      const filtered = items.filter((element) => element.bought === false);
      filtered.map((el, index) => {
        el.id = index;
      });
      setItemsList(filtered);
    }
  };
  console.log(itemsList);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 0.2}}>
          <Input
            icon={icon}
            iconSize={40}
            placeholder="Search"
            placeholderSize={17}
            onChangeText={(text) => handleSearch(text)}
          />
        </View>
        <FlatList
          data={itemsList}
          contentContainerStyle={{flex: 10, justifyContent: 'flex-start'}}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[styles.container]}
              onPress={() => handleItemBought(item)}>
              <View style={styles.nameContainer}>
                <Text
                  style={[
                    styles.text,
                    {
                      color: item.bought ? 'gray' : 'black',
                      textDecorationLine: item.bought ? 'line-through' : 'none',
                    },
                  ]}>
                  {item.name}
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.text,
                    {
                      color: item.bought ? 'gray' : 'black',
                      textDecorationLine: item.bought ? 'line-through' : 'none',
                    },
                  ]}>
                  {item.quantity}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flex: 0.5,
            display: inputShown ? 'flex' : 'none',
            justifyContent: 'space-around',
          }}>
          <Input
            value={inputName}
            icon={addIcon}
            iconSize={20}
            placeholder="Item Name"
            placeholderSize={14}
            onChangeText={(text) => {
              setInputName(text);
              if (newItem !== null) {
                setNewItem({...newItem, name: text});
              } else if (newItem == null && itemsList !== null) {
                console.log('else w  name');
                setNewItem({
                  id: itemsList ? itemsList.length - 1 : 0,
                  name: text,
                  quantity: 1,
                  bought: false,
                });
              }
            }}
          />
          <Input
            value={inputQuantity.toString()}
            icon={addIcon}
            iconSize={20}
            placeholder="Amount"
            placeholderSize={14}
            onChangeText={(text) => {
              let stingQty = parseInt(text);
              setInputQuantity(text);
              if (newItem !== null) {
                setNewItem({...newItem, quantity: stingQty});
              } else {
                console.log('else w qty');
                setNewItem({
                  id: itemsList ? itemsList.length - 1 : 0,
                  name: '',
                  quantity: stingQty,
                  bought: false,
                });
              }
            }}
          />
        </KeyboardAwareScrollView>
        <View style={styles.buttonsContainer}>
          <AppButton
            placeholder={'DODAJ NOWY'}
            onPress={() => {
              setInputShown(true), handleAdd();
            }}
          />
          <AppButton
            placeholder={'USUŃ KUPIONE'}
            onPress={() => {
              handleRemoveDone();
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 8,
    fontSize: 18,
    borderBottomWidth: 0.2,
    marginHorizontal: 20,
  },
  nameContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
});

export default App;
