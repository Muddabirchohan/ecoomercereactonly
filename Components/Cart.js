import React from 'react';
import { FlatList, ListView,Button, TextInput, StyleSheet, ActivityIndicator, ScrollView, Text, View, Image, DrawerLayoutAndroid } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



export default class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      tableHead: ['Image', 'Name', 'price'],
      cart: []
    }
  }


  componentDidMount() {
    this.setState({ cart: this.props.navigation.state.params.cart })
  }

remove(obj){
let {cart} = this.state;
cart = cart.filter(item => item !== obj)
this.setState({cart})
}

  render() {
    return (
      <ScrollView>
        <Table >
          {/* <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} /> */}
          {this.state.cart.map((obj) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  height: 100,
                  padding: 20,
                }}>
                <View>
                  <Image
                    style={{ alignItems: 'center', height: 50, width: 100 }}
                    source={{ uri: `https://greencommunitylaundry.herokuapp.com/api/Images/${obj.image}` }}
                  />
                </View>
                <View style={{ paddingLeft: 20  }}><Text>{obj.name}</Text></View>
                <View style={{ paddingLeft: 20  }}><Text>{obj.price}</Text></View>
                <View style={{ paddingLeft: 20  }}><Button title="remove" onPress={this.remove.bind(this,obj)}/></View>
              </View>
            )
          })}
        </Table>
        {/* <Text> {this.props.navigation.state.params.cart._id} </Text> */}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});