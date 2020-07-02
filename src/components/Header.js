import React from 'react';
import { TouchableOpacity,StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'; 
import {toggleForm} from '../redux/actionList'
import Constants from 'expo-constants';


class Header extends React.Component {
  
  render(){
    return (
            <View style={styles.header}>
              <Text />
              <Text style={styles.headerText}>MY VOCABULARY</Text>
              <TouchableOpacity style={styles.button}onPress={() => this.props.toggleForm()} >
                  <Text style={styles.buttonText}>ADD NEW</Text>
              </TouchableOpacity>
            </View>

    );
    }
}

export default connect(null, {toggleForm})(Header)

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FF5A60',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 30
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black'
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    borderColor: 'white',
    backgroundColor: '#E8EAF6'
  }
});
