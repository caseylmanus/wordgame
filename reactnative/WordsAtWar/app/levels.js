'use strict';

var React = require('react-native');
//var Button = require('react-native-button');
var GameActions = require('./gameactions.js');
var LevelTile = require('./leveltile.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} = React;

var Levels = React.createClass({
 	  getInitialState: function(){
      return {
        levels : [1,2, 3, 4, 5]
      };
 	  },
    onLayout: function(args){
      console.log("on layout change called");
      console.log(args.nativeEvent);
    },
  	render: function(){
    	return (
    		<View style={styles.container} onLayout={this.onLayout}>
          <View style={styles.header}>
    			 <Text style={styles.headerText}>Words at War!</Text>
          </View>
          <ScrollView>
            <View style={styles.body} onLayout={this.onLayout}>
              {this.state.levels.map(function(level, i){
                return (<LevelTile levelNumber={level}/>)
              })}
            </View>
          </ScrollView>
          <View style={styles.footer}>
            <Image source={require('image!settings')} style={{height:24, width:24, marginRight:20, marginBottom:20}}/>
          </View>
    		</View>
    	);
  	}
});

var styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  footer: {
    height:40,
    alignItems: 'flex-end',
  },
  body: {
    flex: 1, 
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  header: {
     height: 33
  },
  headerText: {
  	textAlign: 'center',
  	color: 'lightgrey',
  	fontSize: 33,
  	fontFamily: 'chalkduster',
  },
});

module.exports = Levels;