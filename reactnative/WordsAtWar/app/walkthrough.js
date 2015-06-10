'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var GameActions = require('./gameactions.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var WalkThrough = React.createClass({
 	  getInitialState: function(){
      return null;
 	  },
    _continue: function() {
       GameActions.completeWalkthrough();
    },
  	render: function(){
    	return (
    		<View style={styles.container}>
    			<Text style={styles.header}>Words at War!</Text>
          <Text style={{color:'grey'}}>Here is where we will display a cool walkthrough of the game</Text>
          <Button onPress={this._continue}>Continue</Button>
    		</View>
    	);
  	}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  header: {
  	flex: 1,
  	textAlign: 'center',
  	color: 'lightgrey',
  	fontSize: 30,
  	fontFamily: 'chalkduster'
  },
});

module.exports = WalkThrough;