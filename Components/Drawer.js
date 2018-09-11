// import React from 'react';
// import { ImageBackground, Button,Modal, TouchableHighlight,FlatList, TextInput, StyleSheet, ActivityIndicator, ScrollView, Text, View, Image } from 'react-native';
// import { Card, ListItem,Header } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';


// class MyHomeScreen extends React.Component {
//     static navigationOptions = {
//       drawerLabel: 'Home',
//       drawerIcon: ({ tintColor }) => (
//         <Image
//           source={require('./chats-icon.png')}
//           style={[styles.icon, {tintColor: tintColor}]}
//         />
//       ),
//     };
  
//     render() {
//       return (
//         <Button
//           onPress={() => this.props.navigation.navigate('Notifications')}
//           title="Go to notifications"
//         />
//       );
//     }
//   }
  
//   class MyNotificationsScreen extends React.Component {
//     static navigationOptions = {
//       drawerLabel: 'Notifications',
//       drawerIcon: ({ tintColor }) => (
//         <Image
//           source={require('./notif-icon.png')}
//           style={[styles.icon, {tintColor: tintColor}]}
//         />
//       ),
//     };
  
//     render() {
//       return (
//         <Button
//           onPress={() => this.props.navigation.goBack()}
//           title="Go back home"
//         />
//       );
//     }
//   }
  
//   const styles = StyleSheet.create({
//     icon: {
//       width: 24,
//       height: 24,
//     },
//   });
  
//   const MyApp = createDrawerNavigator({
//     Home: {
//       screen: MyHomeScreen,
//     },
//     Notifications: {
//       screen: MyNotificationsScreen,
//     },
//   });