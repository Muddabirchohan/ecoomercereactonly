import React from 'react';
import { ImageBackground, Button,Modal, TouchableHighlight,FlatList, TextInput, StyleSheet, ActivityIndicator, ScrollView, Text, View, Image } from 'react-native';
import { Card, ListItem,Header,SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Descriptions from './Components/Descriptions';
import { createStackNavigator } from 'react-navigation';
import Cart from './Components/Cart';
import Login from './Components/Login';


// import {CustomDrawerContentComponent} from './Components/Drawer';


class FetchExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      myDesc: {},
      cart: [],
      text: 'hello',
      modalVisible: false,
      addedId: []
    }
  }
  

  componentDidMount() {
    return fetch(`https://greencommunitylaundry.herokuapp.com/api/products`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  gotoDescription(obj) {
      this.setState({ myDesc: obj })
      this.setModalVisible(true);
  }


  addToCart(obj) {
    let {addedId} = this.state;
    if(addedId.includes(obj._id)) {
      alert("id already exist")
    }
    else {
     this.setState ({ cart: [...this.state.cart, obj] })
     addedId.push(obj._id);
     this.setState({addedId})
    }
  }

  searchData(e) {
this.setState({ search: e})
  }

  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  gotoCart() {
      this.props.navigation.navigate('Cart', {
      work: 'work',
      cart: this.state.cart
    })
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    
    return (


      <ScrollView style={{ flex: 1, paddingTop: 20 }}>

              <ImageBackground
  source={require('./images/img1.jpg')}
  style={{width: '100%', height: '100%'}}
> 


<Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'ECOMMERCE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

{this.state.search}


<SearchBar

  platform="android"
  cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
  placeholder='Search'
  />


{/*     
      <Descriptions myDesc={this.state.myDesc} />
     */}

           {/* <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight> */}

      <Button title="show Cart" onPress={this.gotoCart.bind(this)} />

        {
          this.state.dataSource.map((obj) => {
            return (
              <View style={{ paddingLeft: 40, width: 320, height: 280 }}>
                <Card title={obj.name}>


                  <View style={{ marginTop: 20 }}>
                    <Image
                      style  ={{ alignItems: 'center', height: 90, width: 205 }}
                      source ={{ uri: `https://greencommunitylaundry.herokuapp.com/api/Images/${obj.image}` }}
                    />

                    <View style={{flexDirection: 'row' }}>
                    <Button
                      title="description"
                      onPress={this.gotoDescription.bind(this, obj)}
                    // onPress={() => this.props.navigation.navigate('Details')}
                    />

                    <Button 
                      title="add to cart"
                      style={{marginLeft: 10}}
                      style={styles.Buttons}
                      onPress={this.addToCart.bind(this, obj)}
                    // onPress={() => this.props.navigation.navigate('Details')}
                    />
                    </View>
                  </View>
                </Card>
              </View>
            );
          })
        }

          <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}>

          <View style={{marginTop: 22}}>
            <View>
           <Descriptions myDesc={this.state.myDesc}/>
              <Button style={{marginTop: 50}} title="home"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
              </Button>
            </View>
          </View>
        </Modal>

 </ImageBackground>

      </ScrollView>
    );
  }
}





class CustomDrawerContentComponent extends React.Component {

  render() {
    return (

      <View style={{
        flex: 1, color: 'red',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'cochin',
        letterSpacing: 4
      }} >
        {/* <DrawerItems /> */}
      </View>
    )
  }

}



export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


const styles = StyleSheet.create({

  Buttons: {
    width: 30
  }

})

const RootStack = createStackNavigator(
  {
    Home: FetchExample,
    Details: Descriptions,
    Drawer: CustomDrawerContentComponent,
    Cart: Cart,
    Login: Login
  },
  {
    initialRouteName: 'Home',
  }
);





