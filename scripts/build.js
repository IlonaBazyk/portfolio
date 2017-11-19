$(function(){
	$('._hamburger').click(function(){
		$('._nav').toggle()
	})

	$('._work').each(function(index) {
			if (index > 2) {
				$(this).hide()
			}
		})
	$('._more-projects').click(function(){
		$('._work').each(function(index) {
			if (index > 2) {
				$(this).show()
			}
		})
		$('._more-projects').hide()
	})
})