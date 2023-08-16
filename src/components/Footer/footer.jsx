// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   Image,
//   StatusBar,
// } from 'react-native';
// import home from '../../assests/home.png';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//     // image: require('./src/assests/home.png'),
//     image: require('../../assests/home.png'),
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//     image: require('../../assests/home.png'),
//   },
//   {
//     image: require('../../assests/home.png'),
//     title: 'Third Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     image: require('../../assests/home.png'),
//     title: 'Third Item',
//   },
// ];

// const Footer = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.direction}>
//         <Text>
//           <Image source={home}></Image>
//         </Text>
//         <Text>
//           <Image source={home} style={styles.home}></Image>hi
//         </Text>
//         <Text>
//           <Image source={home}></Image>
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginBottom: 50,
//   },
//   home: {
//     marginHorizontal: 20,
//   },
//   direction: {
//     flexDirection: 'row',
//     backgroundColor: 'green',
//   },
//   image: {
//     width: 100,
//     height: 50,
//     position: 'relative',
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default Footer;

import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={require('../../assests/home.png')}
          style={styles.iconImage}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={require('../../assests/menu.png')}
          style={styles.iconImage}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={require('../../assests/greycart.png')}
          style={styles.iconImage}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={require('../../assests/bell.png')}
          style={styles.iconImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f6f5f0',
    height: 60,
    margin: 10,
    borderRadius: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f6f5f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 30,
    height: 30,
  },
};

export default Footer;
