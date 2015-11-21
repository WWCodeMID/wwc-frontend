(function() {
	
	$('.slider_controls li').click(handleClick);
	
	var width = $('.slider_container').width();

	$('.slide').each(function(i,e) {
		$(e).css('width', width+'px');
	});

	function handleClick(){
		var slide_target = 0;
		$('li').removeClass('active');

		if($(this).parent().hasClass('slider_controls')){
			$(this).addClass('active');
			slide_target = $(this).index();
		}		

		$('.slideContainer').fadeOut('fast', function() {
			$(this).animate({
				'margin-left': -(slide_target * $('.slider_container').width())+'px'
			}, 'fast', function() {
				$(this).fadeIn();
			});
		});
	};

})();