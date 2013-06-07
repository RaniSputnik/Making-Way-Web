
$(document).scroll(function() {
    if ($(window).scrollTop()>200) {
    	$('#kids-wrapper').addClass('hidden');
    }
    else {
    	$('#kids-wrapper').removeClass('hidden');
    }
});

