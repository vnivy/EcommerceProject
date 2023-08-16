// CategoryPill.js
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'All',
  },
  {
    id: '2',
    title: 'Vegetables',
  },
  {
    id: '3',
    title: 'Fruits',
  },
  {
    id: '4',
    title: 'Juices',
  },
  {
    id: '5',
    title: 'Bread',
  },
  {
    id: '6',
    title: 'Chocolate',
  },
];
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const CategoryPill = () => {
  const [selectedId, setSelectedId] = useState();
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'black' : '#f3f3f4';
    const color = item.id === selectedId ? 'white' : '#747c7c';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginLeft: 12,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 25,
  },
  title: {
    fontSize: 12,
  },
});

export default CategoryPill;
