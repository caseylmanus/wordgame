'use strict';

var React = require('react-native');
//var Button = require('react-native-button');
var GameActions = require('./gameactions.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} = React;

var LevelTile = React.createClass({
 	  getInitialState: function(){
      return null;
 	  },
  	render: function(){
    	return (
    		<View style={styles.tile}>
    			<Text style={styles.tileLabel}>{this.props.levelNumber}</Text>
    		</View>
    	);
  	}
});

var styles = StyleSheet.create({
  tile: {
    margin:20,
    width: 60,
    height: 60,
    opacity: 0.6,
    borderRadius: 7,
    borderWidth: 5,
    borderColor: 'grey',
    justifyContent: 'center',
    backgroundColor: 'darkgrey'
  },
  tileLabel: {
    fontSize:20, 
    fontWeight:'bold', 
    textAlign:'center', 
    color:'white'
  }
});

module.exports = LevelTile;