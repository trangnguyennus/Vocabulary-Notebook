import React from 'react';
import { TouchableOpacity,StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { showAll, showMemorized, showPracticeMore } from '../redux/actionList'

class Status extends React.Component {

  getTextStyle(statusName) {
      const {myStatus} = this.props;
      if (statusName === myStatus) return {color: '#4E342E', fontWeight: 'bold'};
      return styles.button;
    }

  render(){
    return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.showAll()}>
                    <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.showMemorized()}>
                    <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.showPracticeMore()}>
                    <Text style={this.getTextStyle('PRACTICE_MORE')}>PRACTICE MORE</Text>
                </TouchableOpacity>
            </View>
    );
    }
}

function mapStateToProps(state){ 
    return {
        myStatus: state.status,
        myWords: state.wordArr
    }
}

export default connect(mapStateToProps, {showAll, showMemorized, showPracticeMore})(Status)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
      color: 'black',
      borderWidth: 1,
      padding: 10,
      margin: 10,
      borderRadius: 5,
      backgroundColor: '#EFEBE9',
      
  }

});
