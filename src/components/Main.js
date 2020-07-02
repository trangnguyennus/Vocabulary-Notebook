import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux'
import Word from './Word';
import Status from './Status';
import Header from './Header';
import AddForm from './AddForm';

class Main extends React.Component {
  getWordList = () => {  
        const { myStatus, myWords } = this.props;
        if (myStatus === 'MEMORIZED') return myWords.filter(e => e.memorized );
        if (myStatus === 'PRACTICE_MORE') return myWords.filter(e => !e.memorized );
        return myWords;
    }

  render(){
    return (
        <View style={styles.container}>
            <Header></Header>
            <View style={styles.flatListView}>
                {this.props.myForm ? <AddForm></AddForm> : null}
                <FlatList
                data = {this.getWordList()}
                renderItem = {({item}) => <Word myWord={item}/>}
                keyExtractor = {item => item.id}
                />
            </View>
            <Status></Status>
        </View>
    );
    }
}

function mapStateToProps(state){
    return {
        myStatus: state.status,
        myWords: state.wordArr,
        myForm: state.isAdding,
    }
}
export default connect(mapStateToProps)(Main)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    

  },

  button: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row'
  },

  flatListView: {
    flex: 10,
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
