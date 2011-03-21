(function($){
	
	$.fn.tabber = function(options){
		options = $.extend({
			control : 'top',  // .left or .top
			tabClass : '.tab'
		},options);
		
		return this.each(function(){
			
			var tabber = $(this);
			
			var i = 1;
			
			tabber.children('.control').css('display', 'block').addClass(options.control);
			
			tabber.children('.control').children('li:first').addClass('active');
			
			tabber.children('.control').children('li').each(function(){
				$(this).attr('data-tab', 'tab'+i);
				i=i+1;
			});
			
			i=1;
			
			tabber.children('.tab').each(function(){
				if(i!=1)
					$(this).hide();
				$(this).attr('data-tab', 'tab'+i);
				i=i+1;
			});	
			
			tabber.children('.control').children('li').click(function(){
				if(!$(this).hasClass('active')){
					
					tabber.children('.control').children('li').removeClass('active');
					
					$(this).addClass('active');
					
					tabber.children('.tab').hide();	
					
					var tab = $(this).attr('data-tab');
					
					tabber.children('.tab').each(function(){
						if($(this).attr('data-tab') == tab)
							$(this).show();
					});	
							
					
				}
			});		
					
		});
	}
	
})(jQuery);