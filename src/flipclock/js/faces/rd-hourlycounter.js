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
		 * Creates a jQuery object used for the digit divider
		 *
		 * @param	mixed 	The divider label text
		 * @param	mixed	Set true to exclude the dots in the divider.
		 *					If not set, is false.
		 */

		createDivider: function(label, css, excludeDots) {
			if(typeof css == "boolean" || !css) {
				excludeDots = css;
				css = label;
			}

			var dots = [
				'<span class="'+this.factory.classes.dot+' top"></span>',
				'<span class="'+this.factory.classes.dot+' bottom"></span>'
			].join('');

			if(excludeDots) {
				dots = '';
			}

			label = this.factory.localize(label);

			var html = [
				'<span class="rd-'+this.factory.classes.divider+' '+(css ? css : '').toLowerCase()+'">',
				'<span class="rd-'+this.factory.classes.label+'">'+(label ? label : '')+'</span>',
				dots,
				'</span>'
			];

			var $html = $(html.join(''));

			this.dividers.push($html);

			return $html;
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