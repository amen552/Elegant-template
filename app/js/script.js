
$('document').ready(function() {
	
	var n,y,src,title;
	
	
	$('a.nav-link').click(function() {
		$('li.nav-item.active').removeClass('active');
		$(this).parent().addClass('active');
		
	});
	
	$('.portfolio-menu ul li').each(function(index, elem) {
		$(elem).click(function() {
			$('li.active').removeClass('active');
			$(this).addClass('active');
			var type = $(this).attr('data-type');
			if (type == 'all') {
				$('.work-item').css('display', 'block');
			} else {
				$('.work-item').each(function() {
				if ($(this).attr('data-type') != type) {
					$(this).css('display', 'none');
			}
			});
			$('.work-item[data-type=' + type + ']').each(function(k, element) {
				$(this).css('display', 'block');
			});
			}
			
		})
		});
	
	$('.fade').slick({
		infinite: true,
		slidesToShow: 3,
  		slidesToScroll: 1,
	});
	
	$('.slider').slick({
		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
		dots:true,
		responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 2,
			  dots: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			  dots: true
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ],
	});
	$('.counter').counterUp({
            delay: 10,
            time: 1000
        });
	
	$('.work-item').each(function(i, el) {
		
		$(el).click(function() {
			n = i + 1;
			title = $(el).find('h4').text();
			src = 'img/portfolio-' + n + '.png';
			$('.work-title').text(title);
			$('.work-img').attr('src', src);
			console.log(src)
		})
	});
	
	$(document).scroll(function () {
		onScroll();
    	var $nav = $(".menu");
    	$nav.toggleClass('navbar-top', $(this).scrollTop() < $nav.height());
		$nav.toggleClass('menu-scroll', $(this).scrollTop() > $nav.height())
  	});
	
	$('a.nav-link').each(function() {
		$(this).click(function(){
		var the_id = $(this).attr("href");

		$('html, body').animate({
			scrollTop:$(the_id).offset().top
		}, 'swing');
		return false;
	});
	});
	
	$('.btn-down').click(function() {
		$('html, body').delay(100).animate({
			scrollTop:$('.about').offset().top
		}, 500, 'swing');
		return false;
	});
	

	function onScroll(event){
		var scrollPos = $(document).scrollTop() + $(".menu").height();
		$('.menu a.nav-link').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.menu li.nav-item.active').removeClass("active");
				currLink.parent().addClass("active");
			}
			else{
				currLink.removeClass("active");
			}
		});
	}
	
	
	/* popup */
		$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
	
	
	new WOW().init();
	
	$('.psd').waypoint(function(direction) {
		$(".psd").css('width', '96%');
		$(".il").css('width', '98%');
		$(".html").css('width', '80%');
		$(".css").css('width', '72%');
		$(".js").css('width', '50%');
	}, {
		offset: '90%',
	});
	
	$(window).on('load', function(){ 
		$('.preloader-container').css('display', 'none');
		$('.home').css('opacity', '1');
		$('.navbar-toggler').click(function() {
			$('.bar-container').toggleClass('change')
		});
	});
});

