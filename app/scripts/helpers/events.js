define(
	['underscore', 'backbone'],
	function (_, Backbone) {
		console.log('events');
		return _.extend({}, Backbone.Events);
	}
);