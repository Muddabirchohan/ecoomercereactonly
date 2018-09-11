import React from 'react';
import { FlatList, ImageBackground,TextInput,StyleSheet,ActivityIndicator, ScrollView,Text, View ,Image,DrawerLayoutAndroid} from 'react-native';
import { Card, ListItem ,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Descriptions extends React.Component {
  render() {
      let {myDesc} = this.props;
    return (
    //   <ImageBackground
    //   source={require('../images/img1.jpg')}
    //   style={{width: '100%', height: '100%'}}
    // > 

     <View style={{alignItems: 'center' , marginTop: 120 }}> 
     <Card>
     <Text  style={{fontSize: 20}}> {myDesc.name} </Text>
     <Text  style={{fontSize: 20}}> {myDesc._id} </Text>
     <Text  style={{fontSize: 20}}> {myDesc.price} </Text>
     <Image 
     style={{ height: 200, width: 250 }}
     source={{uri: `https://greencommunitylaundry.herokuapp.com/api/Images/${myDesc.image}`}}/> 
     </Card>
     </View>


      // </ImageBackground>
    )
  }
}
