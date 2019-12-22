// Lessons jquery:

'use strict';
window.addEventListener('scroll', function () {
    let header = document.querySelector('.ba-header');
    let hero = document.querySelector('.ba-hero');
    if (window.pageYOffset > 114) {
      header.classList.add('ba-header-fix');
      hero.classList.add('top-header');
    } else {
      header.classList.remove('ba-header-fix');
      hero.classList.remove('top-header');
    }
  });


$(document).ready(function(){
    

    // //получить все элементы li с классом first $('li.first')
    // console.log('выбрали li с классом first', $('li.first'));

    // //получить последний элем li $('li')
    // console.log('получить последний элемент li', $('li').last());

    // //получить 5й элемент с классом ba-menu-item $('.ba-menu-item').eq(4);
    // $('.ba-menu-item').eq(4);

    // // получить элементы li с 4 по 6 $('li').slice(3, 6)
    // console.log('получить элементы li c 4 gj 6', $('li').slice(3, 6));

    // // получит следующийц элемент после элемента с классом first
    // console.log($('.first').next());

    // //получить все элементы li с классом test $('li.first') и задать им бордер
    // $('li.first').css('border', '2px dashed tomato');

    // $('.ba-hero__title').css({
    //     'border': '1px solid red',
    //     'font-size': '14px'
    // });

    // $('.ba-hero__title').on('click', function(){
    //     console.log(this);
    //     console.log($(this));

    //     $(this).next().addClass('nextH1');
    // });

    // $('#classFirst').on('click', function(){
    //     console.log('выбрали li с классом first', $('li.first'));
    // });

    // $('#classFirst').on('click', function(){
    //     console.log('получить последний элемент li', $('#first').last());
    // });

    // $('#five').on('click', function(){
    //    console.log('пятый элемент', $('.ba-menu-item').eq(4));
    // });

    // $('#threeToFive').on('click', function(){
    //     console.log('получить элементы li c 3 gj 5', $('li').slice(3, 5));
    // });

    // //Найдите первый элемент, который стоит непосредственно за элементом с классом ba-dish__head.
    // console.log($('.ba-dish__head').first());

    // //Найти первый элемент, который стоит непосредственно перед элементом с классом ba-dish__info.
    // console.log($('li').last().prev('.ba-dish__head'));

    // //Найдите все элементы, которые идут непосредственно за элементом с классом ba-hero
    // console.log($('.ba-hero').nextAll());

    // //Найти родителя элемента с селектором .ba-menu a 
    // console.log($('.ba-menu a').parent());

    // //Найти дочерние эдементы у .ba-hero
    // console.log($('.ba-hero').children());

    // // Найдите всех соседей .ba-menu-item , кроме тех у которых есть класс first
    // console.log($('.ba-menu-item').siblings(':not(.first)'));

    // //У всех ссылок найти ближайшего родителя с тегом div и добавить ему класс parentOfLink
    // console.log($('div').parent().addClass('parentOfLink'));
    // //По клику на .ba-menu__link отменить действие по умолчанию(переход по ссылке) и вывести в консоль текст этой ссылки
    // $('.ba-menu__link').on('click', function(event){
    //     event.preventDefault();
    // });


    //при нажатии на кнопку добавлять еще один элемент меню с любым текстом (только не используйте клонирование)
    // $('.ba-btn').on('click', function(){
    //     $('.ba-menu-list').append('<li class = ba-menu-item>Noviy element spiska</li>');
    // });


    
//     let link = $('.link');
//   link.on('click', function (e) {
//     e.preventDefault();
//     let $h3TitleItem = $('h3');

//     if ($h3TitleItem.next('p')) {
//       $h3TitleItem.next('p').hide();
//     }
//   });

// $('.ba-dish__img').on('click', function(){
//     let text = $(this).attr('src');
//     $(this).closest('.ba-dish').find('.ba-dish__title a').text(text)
// });



//====================BA-MODAL========================================//
$('.ba-gallery__img').on('click', function(e){
    let $imgSrc = $(this).attr('src');
    let $modalImage = $('<img>');

    $modalImage.attr('src', $imgSrc).addClass('ba-modal__image');

    $('.ba-modal-content-wrapper').append($modalImage);

    openModal();
});

let openModal = function(){
    $('.ba-modal').addClass('ba-modal--open');
    $('body').addClass('ba-modal-is-open');

    $(document).on('keydown', function(e){
        if (e.keyCode == 27){
            closeModal();
        }
    })
}

let closeModal = function(){
    $('.ba-modal').removeClass('ba-modal--open');
    $('.ba-modal-content-wrapper').empty();
}

$('.ba-modal-close').on('click', closeModal);

$('.ba-modal').on('click', function(e){
    let modalContent = $('.ba-modal-content'); //указываем элемент в котором храниться контент
    if (!modalContent.is(e.target) //проверяем, что клик был не по блоку с контентом
     && modalContent.has(e.target).length === 0){ // и не по дочерним элементам блока с контентом
        closeModal();
    }
});


// ADD ISOTOPE***********************************

$('.portfolio-examp').isotope({
});
var filters = [];
	$('.filter-btn').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		var isChecked = $(this).hasClass('active');
		var filter = $(this).attr('data-filter');
		if (isChecked) {
			addFilter(filter);
		} else {
			removeFilter(filter);
		}

		console.log(filters);
		$('.ba-gallery__filter').isotope({
			filter: filters.join(',')
		});
	});
	function addFilter( filter ) {
	  if ( filters.indexOf( filter ) == -1 ) {
		filters.push( filter );
		filters.join(',')
	  }
	}
	function removeFilter( filter ) {
	  var index = filters.indexOf( filter);
	  if ( index != -1 ) {
		filters.splice( index, 1 );
		console.log(filters.join(','));
	  }
    }
    





$(document).ready(function(){
    $('.ba-slider').slick({
        
    });
  });

});