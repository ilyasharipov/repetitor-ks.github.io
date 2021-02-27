// Get that hamburger menu cookin' //
document.addEventListener("DOMContentLoaded", function() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
        $el.addEventListener("click", function() {
            // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);
                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            });
        });
    }
});
  
// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: $($.attr(this, "href")).offset().top
    }, 500);
});
  
// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
    scrollFunction();
};
  
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}
  
  // Preloader
$(document).ready(function($) {
    $(".preloader-wrapper").fadeOut();
    $("body").removeClass("preloader-site");
});

$(window).on("load", function() {
    var Body = $("body");
    Body.addClass("preloader-site");
});

var sub = $("#telegram");
// console.log(sub.);

$("#submit-to-telegram").on("submit", function(e) {
    e.preventDefault();

    var token = "1622377904:AAHoqn-ioTZfa6xcYaGoinlMcippRNw_d0U";

    //Сюда вставляем chat_id
    var chatId = "-511191109";

    var name = e.target.name.value;
    var phone = e.target.phone.value;
    var message = e.target.message.value;
    var date = new Date();
    var txt = `<b>Новая заявка ${date}</b>%0A<b>Имя:</b> ${name}%0A<b>Телефон:</b> ${phone}%0A<b>Сообщение:</b> ${message}`;



    // var data = $(e.target).serialize();

    $.ajax({
    //   url: 'http://localhost:8080/send_messege.php',
      url:  `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}`,
      method: 'POST',
      type: 'json',
      data: `parse_mode=html&text=${txt}`,
    }).done(function(data) {
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }).fail(function() {
        alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз');
    });

});

// function otpravka(token,text,chatid){
//     var z=$.ajax({  
//     type: "POST",  
//     url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
//     data: "parse_mode=HTML&text="+encodeURIComponent(text), 
//     }); 
//    };