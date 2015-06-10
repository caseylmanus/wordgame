'use strict';
var Dispatcher = require('../flux/dispatcher.js');
var _ = require('underscore');

var GameDispatcher = _.extend({}, Dispatcher.prototype, {
	handleViewAction: function(action){
		this.dispatch({
			source: "VIEW_ACTION",
			action: action 
		});
	}
});

module.exports = GameDispatcher;
