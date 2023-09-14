$(document).ready(function () {

    $('#navbar-toggler').click(function () {
        $('.navbar-collapse').slideToggle(400);
    });

    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos >= 100) {
            $('.navbar').addClass('cng-navbar');
        }
        else {
            $('.navbar').removeClass('cng-navbar');

        }
    });

    $(document).ready(function () {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });

    $('.books .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    $('.faq-head').each(function () {
        $(this).click(function () {
            $(this).next().toggleClass('show-faq-content');

            let icon = $(this).children('span').children('i').attr('class');

            if (icon == 'fas fa-plus') {
                $(this).children('span').html('<i class="fas fa-minus"></i>');
            } else {
                $(this).children('span').html('<i class="fas fa-plus"></i>')
            }

        });
    });

});

function login() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("btn").style.left = "0";
}

function register() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
    document.getElementById("btn").style.left = "110px";
}

function saveFormData() {

    const firstName = document.querySelector('#register-form input[placeholder="First Name"]').value;
    const lastName = document.querySelector('#register-form input[placeholder="Last Name"]').value;
    const email = document.querySelector('#register-form input[placeholder="Email Id"]').value;
    const password = document.querySelector('#register-form input[placeholder="Enter Password"]').value;

    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem('formData', formDataJSON);
    alert('Vaši podaci su sačuvani u LocalStorage!');
}


function loginUser() {
    
    const email = document.querySelector('#login-form input[placeholder="Email Id"]').value;
    const password = document.querySelector('#login-form input[placeholder="Enter Password"]').value;

    const formDataJSON = localStorage.getItem('formData');

    if (formDataJSON) {
        const formData = JSON.parse(formDataJSON);

        if (formData.email === email && formData.password === password) {
            alert('Dobrodošli u svet knjiga');
        } else {
            alert('Pogrešan email ili lozinka');
        }
    } else {
        alert('Nema registrovanih korisnika');
    }
}

const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        saveFormData();
        registerForm.reset();
    });
}

const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        loginUser();
        loginForm.reset();
    });
}
