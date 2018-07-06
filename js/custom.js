/* Show and hide menu */
'use strict';
$(document).ready(function() {

    new WOW().init();


    // Hide and show navigation bar depending of header visibility or not
    $(window).scroll(function() {
        if($(window).scrollTop() < 80 ) {
            $('.navbar').css ({
                'margin-top': '-100px'
            });
        } else {
            $('.navbar').css ({
                'margin-top': '0px'
            });
        }
    });


    // Add smooth scrolling
    $('.nav-item, #scroll-to-top').click(function() {
        if (location.pathname.replace('/^\//,') == this.pathname.replace('/^\//,') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });



    // Activate the menu item on click
    $('.navbar-nav li a').click(function(){
        $('.navbar-nav li a').parent().removeClass("active");
        $(this).parent().addClass("active");
    });




    // Highlight the menu item on scroll
    $(window).scroll( function() {
        $("section").each(function()  {
            var sectionId = $(this).attr("id");
            var height = $(this).outerHeight();
            var greaterTop = $(this).offset().top - 150;

            if ($(window).scrollTop() > greaterTop && $(window).scrollTop() < greaterTop + height) {
                $(".navbar-nav li a[href='#" + sectionId + "']").parent().addClass("active");
            } else {
                $(".navbar-nav li a[href='#" + sectionId + "']").parent().removeClass("active");
            }
        });
    });



    // BX Slider for the portfolio
    $('.bxslider').bxSlider({
        maxWidth: 500,
        maxHeight: 500,
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        keyboardEnabled :true,
    });
});

// // Validate the Email and check if the that was on purpose
// var emailIntendedToBeInvalid = false;
// function validateEmail(email) {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == false
//     && emailIntendedToBeInvalid == false)
//   {
//       // inform user
//       alert("The Email Address you entered does not appear to be valid. if it was entered invalid intentionaly then you can igonre this, otherwise please go back and fix it if you are expecting a reply to it!");
//   }        emailIntendedToBeInvalid = true;

// }

// var tr = true;
// var x = (tr:x="true":x="false");
// console.log(x);

// Submit to the server to email it without moving to the php page
function submitIt () {

    var result;

    var formName = document.getElementById("name").value;
    var formEmail = document.getElementById("email").value;
    var formSubject = document.getElementById("subject").value;
    var formMessage = document.getElementById("message").value;

    var ajaxRequest = $.ajax(
                    {
                        url: 'send_form_email.php',
                        type: 'POST',
                        dataType: 'text',
                        data: {name: formName, email: formEmail, subject: formSubject, message: formMessage},
                        success: function (response)
                        {
                            result = response;
                        },
                        async: false
                    });

    var resultObj = JSON.parse(result);


    ajaxRequest.done(function(data) {
        console.dir(data);
        alert(resultObj.resultMessage);
    });

    ajaxRequest.fail(function(data) {
      console.dir(data);
        alert(resultObj.resultMessage);
    });
}

