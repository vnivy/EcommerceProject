import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import next from '../../assests/next.png';

const TopDealCard = ({deal}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Image source={deal.image} style={styles.image} />

          <View style={styles.price}>
            <Text style={styles.discount}>{deal.discount}</Text>
            <Text style={styles.secondprice}>{deal.price}</Text>
          </View>
          <Text style={styles.title}>{deal.title}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonLabel}>Add to Cart</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f6f5f0',
    borderRadius: 14,
    padding: 6,
    marginRight: 6,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 14,
    padding: 6,
    marginBottom: 8,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
    marginBottom: 15,
  },
  price: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  discount: {
    color: '#e94c4e',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  secondprice: {
    color: 'grey',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  next: {
    flexDirection: 'row',
  },

  addButton: {
    backgroundColor: '#50a000',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default TopDealCard;
