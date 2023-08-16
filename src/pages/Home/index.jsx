// import React, {useState} from 'react';
// import {View, ScrollView, StyleSheet, Text} from 'react-native';
// import Header from '../../components/Header';
// import CategoryCard from '../../components/CategoryCard/CategoryCard';
// import FeaturedProductCard from '../../components/ProductCard/ProductCard';
// import TopDealCard from '../../components/TopDealCard/TopDealCard';
// import CategoryPill from '../../components/CategoryPill/CategoryPill';
// import SearchInput from '../../components/SearchBox/Searchbox';
// import Footer from '../../components/Footer/footer';
// import PopularCard from '../../components/PopularComponents';

// const categories = [
//   {
//     title: 'Electronics',
//     image: require('../../assests/banana.png'),
//   },
//   {
//     title: 'Fashion',
//     image: require('../../assests/banana.png'),
//   },
//   {
//     title: 'Beauty',
//     image: require('../../assests/banana.png'),
//   },
//   {
//     title: 'Home',
//     image: require('../../assests/banana.png'),
//   },
// ];

// const topDeals = [
//   {
//     title: 'Banana Sale',
//     discount: '$50.00',
//     image: require('../../assests/banana.png'),
//     price: '$60.00',
//   },
//   {
//     title: 'Apple sale',
//     discount: '$30.00',
//     image: require('../../assests//apple.png'),
//     price: '$43.00',
//   },
// ];
// const deals = [
//   {
//     title: 'Custard Special',
//     discount: '$20.00',
//     image: require('../../assests/custard.png'),
//     price: '$30.00',
//   },
//   {
//     title: 'Banana Special',
//     discount: '$10.00',
//     image: require('../../assests/banana.png'),
//     price: '$20.00',
//   },
// ];
// const PopularCards = [
//   {
//     title: 'Custard Special',
//     discount: '$20.00',
//     image: require('../../assests/grapes.png'),
//     price: '$30.00',
//   },
//   {
//     title: 'Banana Special',
//     discount: '$10.00',
//     image: require('../../assests/banana.png'),
//     price: '$20.00',
//   },
// ];
// const product = [
//   {
//     title: 'Banana Sale',
//     discount: 30,
//     color: '#fff27a',
//   },
//   {
//     title: 'Apple Sale',
//     discount: 50,
//     color: '#ddedcd',
//   },
//   {
//     title: 'Custard Sale',
//     discount: 25,
//     color: '#fff27a',
//   },
// ];

// const Home = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   return (
//     <View style={styles.container}>
//       <Header />

//       <SearchInput />
//       <ScrollView>
//         {/* <View style={styles.section}>
//           <ScrollView horizontal>
//             {categories.map((category, index) => (
//               <CategoryCard key={index} category={category} />
//             ))}
//           </ScrollView>
//         </View> */}
//         <View style={styles.section}>
//           <ScrollView horizontal>
//             {product.map((product, index) => (
//               <FeaturedProductCard
//                 key={index}
//                 product={product}
//                 backgroundColor={product.color}
//               />
//             ))}
//           </ScrollView>
//         </View>
//         <CategoryPill />
//         <View style={styles.section}>
//           <Text style={styles.title}> Irrestitle Offer</Text>
//           <ScrollView horizontal>
//             {topDeals.map((deal, index) => (
//               <TopDealCard key={index} deal={deal} />
//             ))}
//           </ScrollView>
//           <ScrollView horizontal>
//             {deals.map((deal, index) => (
//               <TopDealCard key={index} deal={deal} />
//             ))}
//           </ScrollView>
//         </View>
//         <ScrollView horizontal>
//           {PopularCards.map((product, index) => {
//             return <PopularCard key={index} product={product} />;
//           })}
//         </ScrollView>
//         <Footer></Footer>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   section: {
//     paddingVertical: 10,
//   },
//   title: {
//     fontSize: 20,
//     color: 'black',
//     marginLeft: 10,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   pillsContainer: {
//     flexDirection: 'column',
//     paddingHorizontal: 16,
//     paddingTop: 16,
//   },
// });

// export default Home;
