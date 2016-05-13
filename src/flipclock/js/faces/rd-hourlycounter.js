(function($) {
			
	/**
	 * RD Hourly Counter Clock Face
	 *
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.RDHourlyCounterFace = FlipClock.Face.extend({
			
		// clearExcessDigits: true,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			this.base(factory, options);
		},
		
		/**
		 * Build the clock face
		 */
		
		build: function(excludeHours, time) {
			var t = this;
			var children = this.factory.$el.find('ul');

			time = time ? time : this.factory.time.getHourCounter();

			if(time.length > children.length) {
				$.each(time, function(i, digit) {
					t.createList(digit);
				});
			}

			$(this.createDivider('Seconds', true)).insertBefore(this.lists[this.lists.length - 1].$el);
			$(this.createDivider('Minutes', true)).insertBefore(this.lists[this.lists.length - 2].$el);

			if(!excludeHours) {
				$(this.createDivider('Hours', true)).insertBefore(this.lists[0].$el);
			}

			this.base();
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			if(!time) {
				time = this.factory.time.getHourCounter();
			}	

			this.autoIncrement();
		
			this.base(time, doNotAddPlayClass);
		},

		/**
		 * Append a newly created list to the clock
		 */

		appendDigitToClock: function(obj) {
			this.base(obj);
		}

	});
	
}(jQuery));