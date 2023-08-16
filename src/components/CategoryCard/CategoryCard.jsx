// CategoryCard.js
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const CategoryCard = ({category}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={category.image} style={styles.image} />
      <Text style={styles.title}>{category.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CategoryCard;
