/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


function openForm(a) {
    if(a == 'a') {
        document.getElementById('comment').value = "אבקש פרטים לגבי תוכנית חינמית";
    } else if (a == 'b') {
        document.getElementById('comment').value = 'אבקש פרטים לגבי תוכנית בסיסית';
    } else {
        document.getElementById('comment').value = 'אבקש פרטים לגבי תוכנית פרימיום';
    }
    location.href='#comment';
    return false;
}

// send mail 

$('#contact-form').on('submit', function(event) {
    event.preventDefault();
    emailjs.init('Gr8XGkPazncSMblyH');
    emailjs.sendForm('contact_service', 'contact_form', this)
    .then(function() {
        console.log('SUCCESS!');
        alert('נשלח בהצלחה ,אשוב אלייך במהרה');
        $('#contact-form')[0].reset();

    }, function(error) {
        console.log('FAILED...', error);
        alert('משהו השתבש ,נסו שוב בעוד כמה דקות');

    });
})
