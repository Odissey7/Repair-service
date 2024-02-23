document.addEventListener('DOMContentLoaded', () => {
	const hero = document.querySelector('.hero');
	const header = document.querySelector('.header');
	const scrollItems = document.querySelectorAll('.scroll-item');

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight / 2) + window.scrollY;
		// console.log(windowCenter)
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
			console.log(scrollOffset)
			if (windowCenter >= scrollOffset) {
				el.classList.add('animation-class');
			} else {
				el.classList.remove('animation-class');
			}
		});
	};

	const headerFixed = () => {
		let scrollTop = window.scrollY;
		let heroCenter = hero.offsetHeight / 2;

		if (scrollTop >= heroCenter) {
			header.classList.add('fixed')
			hero.style.marginTop = `${header.offsetHeight}px`;
		} else {
			header.classList.remove('fixed')
			hero.style.marginTop = `0px`;
		}
	};

	headerFixed();
	scrollAnimation();
	window.addEventListener('scroll', () => {
		headerFixed();
		scrollAnimation();
	});
});









// Открыть модальное окно
document.querySelector(".btn_popup").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});






document.querySelector('.burger').onclick = function () {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.nav_mob_list').classList.toggle('nav_mob_list_active');
    document.querySelector('.wrap_mob_nav').classList.toggle('wrap_mob_nav_active');
}


document.querySelector('#lname2').onclick = function () {
    document.querySelector('.input_text').classList.add('input_text_active');
}
document.querySelector('#lphone2').onclick = function () {
    document.querySelector('.input_text2').classList.add('input_text_active');
}







document.querySelector('#how_nam').onclick = function () {
    document.querySelector('.name_how_how').classList.add('how_active');
}

document.querySelector('#how_nam1').onclick = function () {
    document.querySelector('.num_how_how').classList.add('how_active');
}

document.querySelector('#how_nam2').onclick = function () {
    document.querySelector('.text_how_how').classList.add('how_active');
}


jQuery(document).ready(function () {

    $(".form_how_num").mask("+7 (999) 999-99-99"); 
    

    jQuery('.btn_how').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		// form.css('opacity','.5');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				form.html(data);
    				form.css('opacity','1');
                    form.find('.how_status').html('Форма отправлена успешно');
                    //$('#myModal').modal('show') // для бутстрапа
    			},
    			error:	 function() {
    			    form.find('.status').html('Серверная ошибка');
    			}
    		});
    	}
    });


});












$(document).on('click', '#sf2, #consultSubmit, #asideSubmit', function(e) {
    e.preventDefault();
    let phone = $(this).closest('form').find('.mask').val();
    let name = $(this).closest('form').find('input[name="name"]').val();
    let header = $(this).closest('form').data('title')
    let text = $(this).closest('form').find('.ltext').val()
    if ((phone.search('_') == -1) && phone != "") {
        $.post("/templates/1/ajaxmail_2.php", {
            id: 'main',
            name: name,
            header: header,
            phone: phone,
            text: text,
            dat: new Date()
        }, onAjaxSuccess);
        function onAjaxSuccess(data) {
            $('.succ').html(data);
            $('.lname').val('')
            $('.ltext').val('')
            $('.mask').val('');
            $.fancybox.open('<div class="message"><h2>Заявка отправлена</h2><p>' + data + '</p></div>');
        }
    } else {
        $(this).parents('form').find('.mask').focus();
    }
});



// MASKA

jQuery(document).ready(function () {

    $(".phone").mask("+7 (999) 999-99-99"); 
    

    jQuery('.send-form').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		// form.css('opacity','.5');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				form.html(data);
    				form.css('opacity','1');
                    form.find('.status_good').html('Форма отправлена успешно');
                    //$('#myModal').modal('show') // для бутстрапа
    			},
    			error:	 function() {
    			    form.find('.status').html('Серверная ошибка');
    			}
    		});
    	}
    });


});




// POPOP FORM



document.querySelector('.name_popup').onclick = function () {
    document.querySelector('.popup_input_text').classList.add('popup_input_text_active');
}
document.querySelector('.phone_pop').onclick = function () {
    document.querySelector('.popup_input_text_sec').classList.add('popup_input_text_active');
}


$(document).on('click', '#sf2, #consultSubmit, #asideSubmit', function(e) {
    e.preventDefault();
    let phone = $(this).closest('form').find('.mask').val();
    let name = $(this).closest('form').find('input[name="name"]').val();
    let header = $(this).closest('form').data('title')
    let text = $(this).closest('form').find('.ltext').val()
    if ((phone.search('_') == -1) && phone != "") {
        $.post("/templates/1/ajaxmail_2.php", {
            id: 'main',
            name: name,
            header: header,
            phone: phone,
            text: text,
            dat: new Date()
        }, onAjaxSuccess);
        function onAjaxSuccess(data) {
            $('.succ').html(data);
            $('.lname').val('')
            $('.ltext').val('')
            $('.mask').val('');
            $.fancybox.open('<div class="message"><h2>Заявка отправлена</h2><p>' + data + '</p></div>');
        }
    } else {
        $(this).parents('form').find('.mask').focus();
    }
});


jQuery(document).ready(function () {

    $(".phone_pop").mask("+7 (999) 999-99-99"); 
    

    jQuery('.form_popup').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		// form.css('opacity','.5');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				form.html(data);
    				form.css('opacity','1');
                    form.find('.popup_status_good').html('Форма отправлена успешно');
                    //$('#myModal').modal('show') // для бутстрапа
    			},
    			error:	 function() {
    			    form.find('.popup_status').html('Серверная ошибка');
    			}
    		});
    	}
    });


});














