'use strict';

var Store = require('../flux/store.js');
var _ = require('underscore');
var GameDispatcher = require('./gamedispatcher.js');
var Storage  = require('react-native').AsyncStorage;

GameDispatcher.register(function(payload){
	var action = payload.action;
	switch(action.actionType){
		case  "COMPLETE_WALKTHROUGH" : 
			completeWalkthrough();
			break;
		case 'GAME_LOADED': 
			_setGameData(action.data);
			break;
	} 	
});
var gameData = {
	WalkthroughDone: true
};

function persistGameData() {
	var strData = JSON.stringify(gameData);
	Storage.setItem("GAME_DATA", strData);
}

function completeWalkthrough(){
	gameData.WalkthroughDone = true;	
	GameStore.emitChange();
	persistGameData();
}
function _setGameData(data){
	if(data){
		gameData = JSON.parse(data);
	}
	GameStore.emitChange();
}

var GameStore = _.extend(Store, {
	getGameData: function(){
		return gameData;
	}
});



module.exports = GameStore;
