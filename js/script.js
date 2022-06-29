/******************************************************************************************************************************
Waypoints
*******************************************************************************************************************************/ 

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/******************************************************************************************************************************
Nav Button
*******************************************************************************************************************************/ 

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});


$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 125
				}, 1000);
				return false;
			}
		}
	});

});

/******************************************************************************************************************************
Nav Transform
*******************************************************************************************************************************/ 

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/******************************************************************************************************************************
Flexsliders
*******************************************************************************************************************************/ 

$(window).load(function() {

	$('#blogSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});
	
		$('#clientSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});








// validation




let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let phoneError = document.getElementById('phone-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('empty_notice');
let msgSuccess = document.getElementById('alert-success');

function validateName(){
    let name = document.getElementById('name').value;
    document.getElementById('name-error').style.color = 'red';
    if (name.length == 0) {
        nameError.innerHTML = 'Name required';
        return false;
    }
	if (name.length < 3) {
        nameError.innerHTML = 'Minimum 3 letters reqired';
        return false;
    }

    if (name.match(' '+' ')) {
        nameError.innerHTML = 'Adjacent spaces are not allowed';
        return false;
    }
	// if (!name.match(/^' '+[a-zA-Z]+$/)) {
    //     nameError.innerHTML = 'name cannot start with space';
    //     return false;
    // }
	
	
    if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        nameError.innerHTML = 'please enter your full name';
        return false;
    }

	// if (!name.match(/^[a-zA-Z]+[a-zA-Z]+ [a-zA-Z]+$/)) {
    //     nameError.innerHTML = 'please enter your full name';
    //     return false;
    // }
	// if (!name.match(/^[a-zA-Z]+$/)) {
    //     nameError.innerHTML = 'Enter characters only';
    //     return false;
    // }
	
	
	nameError.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true" style="color:green"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;
    document.getElementById('email-error').style.color = 'red';
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    
    if (!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }
	if (email == 'vcbodheesh@gmail.com') {
        emailError.innerHTML = 'you can\'t use this email because its mine.';
        return false;
    }


	emailError.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true" style="color:green"></i>';
    return true;
}

function validatePhone() {
    let phone = document.getElementById('tel').value;

    document.getElementById('phone-error').style.color = 'red';
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
	if (phone == 9544677811) {
        phoneError.innerHTML = 'oops..I know its not your mobile number';
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

	phoneError.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true" style="color:green"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById('message').value;
    let required = 25;
    let left = required - message.length;
    document.getElementById('message-error').style.color = 'red';

    if (left > 0) {
        messageError.innerHTML = left + 'More charector required';
        return false;
    }

   messageError.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true" style="color:green"></i>';
    return true;
}

function validateForm() {
    if (!validateName() & !validateEmail() & !validatePhone() & !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Fill Required Fields';
        setTimeout(function () { submitError.style.display = 'none'; }, 30);
        return false;
    } else {
        msgSuccess.style.display = 'block';
        msgSuccess.innerHTML = 'This is a success alert—check it out!';
    }

    
}
