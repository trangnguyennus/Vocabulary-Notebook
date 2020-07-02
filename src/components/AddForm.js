import React from 'react';
import { TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { toggleForm, addingWord} from '../redux/actionList'


class AddForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'eng': '',
      'vn': ''
    }
  }
  
  onAdd = () => {
    const {eng, vn} = this.state;
    this.props.addingWord(eng, vn);
    this.props.toggleForm();
  }

  render(){
    return (
        <View style={styles.containter}>
           <TextInput 
              underlineColorAndroid="transparent"
              autoCorrect={false}
              keyboardType="visible-password"
              style={styles.input}
              value={this.state.eng}
              placeholder='Word in English'
              onChangeText={text => this.setState({eng: text})}
            />
           <TextInput
              underlineColorAndroid="transparent"
              autoCorrect={false}
              keyboardType="visible-password"
              style={styles.input}
              value={this.state.vn}
              placeholder='Meaning in Vietnamese'
              onChangeText={text => this.setState({vn: text})}
           />
           <TouchableOpacity style={styles.button} onPress = {() => this.onAdd()}>
                <Text style={styles.buttonText}>ADD</Text>
           </TouchableOpacity> 
        </View>
    );
    }
}

export default connect(null, {toggleForm, addingWord})(AddForm);

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: '#FAFAFA',
    margin: 10,
    paddingHorizontal: 10,
    borderColor: '#424242',
    borderRadius: 10,
    borderWidth: 1,
    fontStyle: "italic",
    fontSize: 13,
    width: 300,
    height: 40
  },

  containter: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center'
  },

  button: {
    backgroundColor: '#CFD8DC',
    padding: 10,
    margin: 10,
    borderRadius: 5

  },

  buttonText: {
    color: '#4E342E',
    fontWeight: 'bold'
  }
});
