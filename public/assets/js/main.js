(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });
  $('#sidebarCollapseMobile').on('click', function () {
	$('#sidebar').toggleClass('active');
	$(this).find('i').toggleClass('fa-bars fa-times');
  });

})(jQuery);
