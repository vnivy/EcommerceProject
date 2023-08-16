import React from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import profile from '../../assests/profile.jpg';
import cart from '../../assests/cart.png';
import location from '../../assests/location.png';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Image style={styles.tinyLogo} source={cart} />
      </View>
      <View style={styles.location}>
        <Image style={styles.locationicon} source={location} />
        <Text style={styles.address}>2972 Westheimer Rd.</Text>
      </View>
      <View>
        <Image style={styles.tinyLogo} source={profile} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  locationicon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  address: {
    marginTop: 2,
    fontSize: 12,
  },
  searchBar: {
    flex: 1,
    marginLeft: 16,
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  location: {
    flexDirection: 'row',
  },
});

export default Header;
