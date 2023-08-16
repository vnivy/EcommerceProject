import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Popular,
  TouchableOpacity,
} from 'react-native';

const PopularCard = ({product}) => {
  return (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <Image source={product.image} style={styles.image} resizeMode="cover" />
        <View>
          <View style={styles.price}>
            <Text style={styles.discount}>{product.discount}</Text>
            <Text style={styles.secondprice}>{product.price}</Text>
          </View>
          <Text style={styles.title}>{product.title}</Text>
          <View>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonLabel}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f6f5f0',
    borderRadius: 10,
    width: 320,
    // borderWidth: 1,
    // borderColor: 'lightgray',
    // borderStyle: 'solid',
    margin: 8,
  },
  contentContainer: {
    flexDirection: 'row',
  },

  price: {
    flexDirection: 'row',
    marginLeft: 5,
    width: 210,

    marginTop: 15,
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
  image: {
    width: 120,
    height: 120,
    margin: 8,
    borderRadius: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    width: 210,

    marginLeft: 5,
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#50a000',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 10,
    marginRight: 10,
    width: 160,
    borderRadius: 5,
  },
  addButtonLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default PopularCard;
