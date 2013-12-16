define(
	['underscore', 'helpers/responsive', 'helpers/events'],
	function(_, Responsive, Events) {

		var updateLayout = _.debounce(function(e) {
			Events.trigger('window:resize', Responsive.init());
		}, 500);

		return {
			init: function() {
				window.addEventListener('resize', updateLayout, false);
			}
		};

	}
);