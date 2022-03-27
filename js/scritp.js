navBar=document.querySelector('#bars');
menuItems=document.querySelector('.menu_items');
MenuClose=document.querySelector('#MenuClose');

navBar.onclick=()=>{
    menuItems.classList.toggle('MenuActive');
}
MenuClose.onclick=()=>{
    menuItems.classList.remove('MenuActive');
}


	$('.filter a').click(function(e) {
	  e.preventDefault();
	  var a = $(this).attr('href');
	  a = a.substr(1);
	  $('.gallery a').each(function() {
	    if (!$(this).hasClass(a) && a != 'all')
	      $(this).addClass('hide');
	    else
	      $(this).removeClass('hide');
	  });
	});

	$('.gallery a').click(function(e) {
	  e.preventDefault();
	  var $i = $(this);
	  $('.gallery a').not($i).toggleClass('pophide');
	  $i.toggleClass('pop');

	});




    var swiper = new Swiper(".testimonial_slider", {
        // direction: "vertical",
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });