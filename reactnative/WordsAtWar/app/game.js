'use strict';

var React = require('react-native');
var Walkthrough = require('./walkthrough.js');
var GameStore = require('./gamestore.js');
var GameActions = require('./gameactions.js');
var Levels = require('./levels.js');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS
} = React;

var Game = React.createClass({
 	getInitialState: function(){
 		var gameData = GameStore.getGameData();
 		return {
 			dataLoaded: false,
 			gameData: null
 		};
 	},
 	componentDidMount: function(){
 		GameStore.addChangeListener(this.onStoreChange);
 		//we should probably load the data game data here, then -> action it only because this is our highest level
 		//component and there seems to be some weird lifecycle issues if we don't
 		setTimeout(function(){
 		 		GameActions.loadGame();
 		 	}, 500);
 	},
 	onStoreChange: function(){
 		var data = GameStore.getGameData();
 		this.setState({gameData:{completedWalkthrough: data.WalkthroughDone}, dataLoaded:true});
 		this.forceUpdate();
 	},
 	componentWillUnmount: function(){
 		GameStore.removeChangeListender(this.onStoreChange); 
 	},
  	render: function(){
  		if(this.state.dataLoaded == false){
  			return (<View style={styles.container}>
  				<ActivityIndicatorIOS style={styles.activity}></ActivityIndicatorIOS>
  			</View>)
  		}
  		else if(this.state.gameData.completedWalkthrough){
  			return (<Levels/>)
  		} else {
  			return (<Walkthrough/>)
  		}
  	}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  activity: {
  	flex:1,
  	alignItems: 'center',
  	justifyContent: 'center'
  }
});

module.exports = Game;