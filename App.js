import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  heading: {
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
  // container: {
  //   flex: 1,
  //   backgroundColor: 'skyblue'
  // },
  listBackground: {
    flex: 1,
    backgroundColor: 'white'
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
  plus: {
    width: 15,
    height: 15,
    margin: 5
  },
  plusBackground: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    top: '410px'
  }
});


class ToDoItem extends Component {
  constructor() {
    super();
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

  render() {
    let circle = {
        uri: "https://pluspng.com/img-png/circle-png-circle-icon-1600.png"
      };
    let check = {
      uri: "https://visualpharm.com/assets/752/Checked-595b40b65ba036ed117d3d93.svg"
    }
    return (
          <TouchableOpacity style = {{flexDirection: 'row'}} onPress = {this.ToggleCheckbox}>
            <View>
              {this.state.checked && this.state.input ? (<Image source={check} style = {styles.check}/>) : (<Image source = {circle} style = {styles.checkbox} />) }
            </View>
            <View>
              <TextInput style = {this.state.checked && this.state.input ? styles.done : styles.toDo} placeholder = 'Enter item here' multiline = {true} onChangeText = {(text) => text == "" ? this.setState({input: false}) : this.setState({input: true})} />
            </View>
          </TouchableOpacity>
    )
  }
}

export default class ToDoList extends Component {
  render() {
    let plus = {
      uri: "https://image.flaticon.com/icons/svg/32/32339.svg"
    };
    return (
      <View>
        <View>
          <TextInput style = {styles.heading} placeholder = 'Heading Here' />
        </View>
        <View style={styles.listBackground}>
          <ToDoItem/>
          <ToDoItem/>
        </View>
        <View style = {styles.plusBackground}>
          <TouchableOpacity onPress = {React.createElement(ToDoItem)}>
            <Image source = {plus} style = {styles.plus}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
