$(document).ready(function() {



	setTimeout(function(){

		location.reload();

	}, 4000000);



	setTimeout(function(){

		var leftHeight = $('.js-left-side').height();



		$('.js-right-side').css({

			'height': leftHeight + 4

		});

	}, 800);

setInterval(function() {
		$('.js-blink').toggleClass('hidden');
	}, 1000);

});