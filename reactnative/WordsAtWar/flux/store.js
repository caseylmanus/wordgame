'use strict';

var _ = require('underscore');
var EventEmitter = require('events').EventEmitter;

//base class for all stores, provides the publish / subscribe events

var CHANGE_EVENT = 'change';

var Store = _.extend({}, EventEmitter.prototype, {
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	}
});

module.exports = Store;