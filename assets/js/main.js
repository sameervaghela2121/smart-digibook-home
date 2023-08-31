// Testimonial Slider
$('.testimonial-inner').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	adaptiveHeight: true,
	centerMode: true,
	centerPadding: '200px',
	arrows: false,
	dots: false,
	responsive: [
		{
		  breakpoint: 1350,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			centerMode: true,
			centerPadding: '120px',
		  }
		},
		{
			breakpoint: 992,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  centerMode: true,
			  centerPadding: '120px',
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '100px',
			}
		},
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '80px',
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '40px',
			}
		}
	]
  });


//   JS End