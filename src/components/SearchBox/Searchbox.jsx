import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

const SearchInput = () => {
  const [search, setSearch] = useState('');

  const handleChange = text => {
    setSearch(text);
    console.log(search, 'search');
  };
  const searchIcon = require(`../../assests/vector.png`);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={handleChange}
        value={search}
        style={styles.search}
        placeholder="Search..."
      />
      <Image source={searchIcon} style={styles.searchIcon} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    // marginHorizontal: 10,
    // marginTop: 50,
  },
  search: {
    // width: 300,
    borderRadius: 10,
    backgroundColor: '#ebeae8',
    position: 'relative',
    paddingLeft: 25,
    paddingRight: 250,
    marginRight: 15,
    marginLeft: 15,
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
    width: 25,
    height: 25,
  },
});

export default SearchInput;
