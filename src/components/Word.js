import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleMemorized, toggleShow  } from '../redux/actionList';

class Word extends React.Component {
  render(){
    const {eng, vn, memorized, isShow, id} = this.props.myWord;
    const textDecorationLine = memorized ? 'line-through' : 'none';
    const memorizedButtonText = memorized? 'Forgot' : 'Memorized';
    const showButtonText = isShow? 'Hide' : 'Show';
    const vnmeaning = isShow? vn : '-------'

    return (
        <View style={styles.container}>
            <Text style = {[{textDecorationLine}, styles.mainText]} >{eng}</Text>
            <Text style={styles.mainText}>{vnmeaning}</Text>
        <View style={styles.controller}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.toggleMemorized(id)}>
            <Text>{memorizedButtonText}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this.props.toggleShow(id)}>
            <Text>{showButtonText}</Text>
          </TouchableOpacity>
        </View>
        </View>
    );
    }
}

export default connect(null, {toggleMemorized, toggleShow})(Word)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 15
  },

  button: {
    flex: 0.5,
    backgroundColor: '#F5F5F5',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#3E2723'
  },

  controller: {
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  
  mainText: {
    fontSize: 15,
    marginLeft: 15,
    marginTop: 10
  }
});
