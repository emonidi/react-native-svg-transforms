import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SubmissionStatus from './submission-status';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      submissionStatus:'returned'
    }
  }

  onButtonPressed = (status) =>{
    this.setState({submissionStatus:status})
  }

  render() {
    return (
      <View style={styles.container}>
         <SubmissionStatus style={styles.subStatus} state={this.state.submissionStatus}/>
         <View style={styles.buttonGroup}>
          <Button title="Returned" onPress={()=>{this.onButtonPressed('returned')}}/>
          <Button title="Done" onPress={()=>{this.onButtonPressed('done')}}/>
          <Button title="Late" onPress={()=>{this.onButtonPressed('late')}}/>
          <Button title="Sun" onPress={()=>{this.onButtonPressed('sun')}}/>
          <Button title="Pin" onPress={()=>{this.onButtonPressed('pin')}}/>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subStatus:{
    flex:2,
    minHeight:'70%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroup:{
    flex:1,
    flexDirection:'row'
  }
});
