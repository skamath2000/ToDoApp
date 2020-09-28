import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'skyblue',
    padding: 5
  },
  toDo: {
    color: 'black',
    fontSize: 15,
    margin: 2,
    flexWrap: 'wrap',
    overflow: 'scroll',
    alignSelf: 'stretch'
  },
  done: {
    color: 'grey',
    fontSize: 15,
    margin: 2,
    flexWrap: 'wrap',
    overflow: 'scroll',
    alignSelf: 'stretch',
    textDecorationLine: 'line-through'
  },
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  listBackground: {
    flex: 15,
    backgroundColor: 'white',
    height: '20px'
  },
  checkbox: {
    width: 15,
    height: 15,
    margin: 5
  },
  check: {
    width: 17,
    height: 17,
    margin: 4
  },
  cross: {
    width: 15,
    height: 15,
    margin: 5
  },
  plus: {
    width: 15,
    height: 15,
    margin: 5
  },
  plusBackground: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: '3px',
    paddingBottom: '2px'
  }
});

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      input: false
    }
  }
  
  ToggleCheckbox = () => {
    if (this.state.input) {
      this.setState({checked : !this.state.checked});
    }
  }


  RemoveItem = (key) => {
    this.props.data = this.props.data.filter( (data) => data.key !== key );
  }

  render() {
    let circle = {
        uri: "https://pluspng.com/img-png/circle-png-circle-icon-1600.png"
      };
    let check = {
      uri: "https://visualpharm.com/assets/752/Checked-595b40b65ba036ed117d3d93.svg"
    }
    let cross = {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReLjziNNzVvFt9Yc2Pi_BvoPrfQhHfZWw--A&usqp=CAU"
    }
    return (
      <View style = {{flexDirection: 'row'}}>
        <TouchableOpacity style = {{flexDirection: 'row'}} onPress = {this.ToggleCheckbox}>
          <View>
            {this.state.checked && this.state.input ? (<Image source={check} style = {styles.check}/>) : (<Image source = {circle} style = {styles.checkbox} />) }
          </View>
          <View>
            <TextInput style = {this.state.checked && this.state.input ? styles.done : styles.toDo} placeholder = 'Enter item here' multiline = {true} onChangeText = {(text) => text == "" ? this.setState({input: false}) : this.setState({input: true})} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style = {{position: 'absolute', left: '290px'}} >
            <Image source = {cross} style = {styles.cross}/>
        </TouchableOpacity>
      </View>
    )
  }
}

class ToDoList extends Component {
  constructor(props) {
   super(props);
   this.state = {    /* initial your state. without any added component */
      data: [{key: 0}],
      keys: []
   }
  }

  AddItem = () => {
    let added_data = {
      key: this.state.data[this.state.data.length-1].key+1
    };
    this.setState({
        data: [...this.state.data, added_data]
    });
  }
  render() {
    let plus = {
      uri: "https://image.flaticon.com/icons/svg/32/32339.svg"
    };
    let addedItems = this.state.data.map( (data, index) => {
        return (
            <ToDoItem key = {data.key} data = {this.state.data}/>
        )
    });
    return (
      <View style = {styles.container}> 
        <TextInput style = {styles.heading} placeholder = 'Heading Here' />
        <View style={styles.listBackground}>
          <ScrollView>
            {addedItems}
          </ScrollView>
        </View>        
        <View style = {styles.plusBackground}>
          <TouchableOpacity onPress = {this.AddItem}>
            <Image source = {plus} style = {styles.plus}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props) {
   super(props);
  }
  render() {
    return (
        <ToDoList/>
    );
  }
}
