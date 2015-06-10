'use strict';
var Action = require('../flux/action.js');
var GameDispatcher = require('./gamedispatcher.js');
var GameStore = require('./gamestore.js');
var _ = require('underscore');
var Storage = require('react-native').AsyncStorage;

var GameActions = _.extend(Action, {
	completeWalkthrough: function(){
		GameDispatcher.handleViewAction({
			actionType: "COMPLETE_WALKTHROUGH",
			data: {}

		});
	},
	loadGame: function(){
		Storage.getItem("GAME_DATA").then(function(data){
			//hack?
			//GameStore.setGameData(data);
			GameDispatcher.handleViewAction({
				actionType: "GAME_LOADED",
				data : data
			});
		});
	}

});

module.exports = GameActions;

