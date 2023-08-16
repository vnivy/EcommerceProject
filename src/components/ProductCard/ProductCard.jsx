import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import tick from '../../assests/tick.png';
const FeaturedProductCard = ({product, backgroundColor}) => {
  return (
    <TouchableOpacity style={[styles.card, {backgroundColor}]}>
      <Text style={styles.subtitle}>
        Cold Progress <Text style={styles.organic}>Organic</Text>
      </Text>
      <Text style={styles.title}>{product.title}</Text>
      <View style={styles.free}>
        <Text style={styles.discount}>
          <Image source={tick} style={styles.tick} />
          BUY 1 GET 1 FREE
        </Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonLabel}>Shop now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ddedcd',
    borderRadius: 15,
    padding: 5,
    paddingBottom: 20,

    marginRight: 2,
    marginLeft: 18,

    width: 250,

    elevation: 1,
  },
  organic: {
    color: '#50a000',
  },
  subtitle: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 15,
    fontWeight: '600',
  },
  free: {
    flexDirection: 'row',
  },
  tick: {
    width: 20,
    height: 20,
  },
  image: {
    width: 100,
    height: 50,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 24,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
  },
  discount: {
    color: '#50a000',
    marginBottom: 6,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'white',
    paddingVertical: 7,
    marginLeft: 10,
    paddingHorizontal: 7,
    borderRadius: 7,
    marginTop: 19,
    width: 100,
  },
  addButtonLabel: {
    color: 'black',

    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default FeaturedProductCard;
