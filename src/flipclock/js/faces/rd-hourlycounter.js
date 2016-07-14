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
			this.options = options;
			this.base(factory, options);
		},
		
		/**
		 * Build the clock face
		 */
		
		build: function(excludeHours, time) {
			var t = this;

			time = time ? time : this.factory.time.getRDHourCounter();


			$.each(time, function(i, digit) {
				t.createList(digit);
			});

			var labels = ['Hours','Minutes', 'Seconds'];

			$.each(this.lists, function(i,el){
				$el = el.$el;
				var cover = $('<div class="flip-wrapper">',true);
				$el.wrap(cover).parent().append('<span class="flip-clock-label">'+labels[i]+'</span>');
			});
			this.base();
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			if(!time) {
				time = this.factory.time.getRDHourCounter();
			}

			this.autoIncrement();
		
			this.base(time, doNotAddPlayClass);
		}
	});
	
}(jQuery));