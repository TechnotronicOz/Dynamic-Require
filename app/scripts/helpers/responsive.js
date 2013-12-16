define(
	function() {

		function Responsive() {
			this.mobile = 'only screen and (max-width: 767px)';
			this.tablet = 'only screen and (min-width: 768px) and (max-width: 991px)';
			this.desktop = 'only screen and (min-width: 992px)';
			this.calcs = {};
		}

		Responsive.prototype = {
			initialize: function() {
				this.calcs = {
					mobile: Modernizr.mq(this.mobile),
					tablet: Modernizr.mq(this.tablet),
					desktop: Modernizr.mq(this.desktop)
				};
				return this.calcs;
			},
			dispose: function() {
				delete this.calcs;
			},
			detect: function() {
				return this.calcs;
			}
		};

		return {
			init: function() {
				var responsive = new Responsive();
				return responsive.initialize();
			},
			detected: function() {
				var responsive = new Responsive();
				responsive.dispose();
				responsive.initialize();
				return responsive.detect();
			}
		};
	}
);