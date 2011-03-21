(function($){
	
	$.fn.tabber = function(options){
		options = $.extend({
			control : 'top',  // .left or .top
			tabClass : '.tab'
		},options);
		
		return this.each(function(){
			
			// The "this" points to the current select element:
			
			var tabber = $(this);
			tabber.children('.control').css('display', 'block').addClass(options.control);
			tabber.children('.control').children('li').each(function(){
				$(this).text('test');
			});
			
					
		});
	}
	
})(jQuery);