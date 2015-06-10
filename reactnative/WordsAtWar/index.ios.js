/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Game = require('./app/game.js');


var WordsAtWar = React.createClass({
  render: function() {
    return (
      <Game style={{flex:1}}/>
    );
  }
});


React.AppRegistry.registerComponent('WordsAtWar', () => WordsAtWar);
