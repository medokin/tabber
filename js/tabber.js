(function($){
	
	$.fn.tabber = function(options){
		options = $.extend({
			control : 'top',  // .left or .top
			tabClass : '.t',
			controlClass : '.c'
		},options);
		
		return this.each(function(){
			
			var tabber = $(this);
			var tabs = tabber.children(options.tabClass);
			var control = tabber.children(options.controlClass);
			var lines = control.children('li');
			var i = 1;
			
			$(this).addClass('tabber');						
			control.css('display', 'block').addClass(options.control);			
			control.children('li:first').addClass('active first');
			control.children('li:last').addClass('last');
			
			lines.each(function(){
				var content = $(this).text();
				$(this).html('<a href="#">'+content+'</a>');
				$(this).attr('data-tab', 'tab'+i);
				i=i+1;
			});			
			i=1;
			
			tabs.each(function(){
				if(i!=1)
					$(this).hide();
				$(this).attr('data-tab', 'tab'+i).addClass(options.control);
				i=i+1;
			});	
			
			lines.click(function(){
				if(!$(this).hasClass('active')){
					
					lines.removeClass('active');
					
					$(this).addClass('active');
					
					tabs.hide();	
					
					var tab = $(this).attr('data-tab');
					
					tabs.each(function(){
						if($(this).attr('data-tab') == tab)
							$(this).show();
					});												
				}
				return false
			});	
			
	
					
		});
	}
	
})(jQuery);