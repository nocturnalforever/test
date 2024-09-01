var unlock_location_input = document.getElementById("unlock_location_input");

$('document').ready(function () {

    // $('#button_event').click(function(){
    //     $('#nocturnal_description').toggle(3000);
    // })

    // LANDING PAGE
    function homeText() {
        var words = ['∞ <br><br>'];
        var i = 0;
        setInterval(function () {
            $('#slogan').fadeOut(function () {
                $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
            });
        }, 3000)
    }

    homeText();

    /*-------------------------------------------------------Index page-----------------------------------------------------------*/

    //Menu buttons
    $('#info-dropdown').on('click', function () {
        $('#index-page').slideDown(2000)
    })


    $('#scroll-button').on('click', function () {
        $('#index-page').slideDown(2000)
    })



    $('#find_out_more_button').click(function () {
        $('#event_description').show(2000);
        $('#find_out_more_button').hide(1500);
        $('.find_out_more_heading').hide(1500)
    })

    $('#find_out_more_button_2').click(function () {
        $('#event_description_2').show(2000);
        $('#find_out_more_button_2').hide(1500);
        $('.find_out_more_heading_2').hide(1500)
    })


    //location drop down
    $('#show-me-button').on("click", function () {
        $('#location-text').slideToggle(2000)
        $('#rave_button').toggle(2000)
        $('#location-h3').toggle(2000)
        $('#location-h4').toggle(2000)
        $('#location-end').toggle(2000)
        $('#location-button').toggle(2000)
    })

    $('#eye-1').on('click', function () {
        $('#location-text').slideToggle(2000)
        $('#rave_button').toggle(2000)
        $('#location-h3').toggle(2000)
        $('#location-h4').toggle(2000)
        $('#location-end').toggle(2000)
        $('#location-button').toggle(2000)
    })

    //Google Form Section
    $('#save-a-spot-button').click(function () {
        $('#google-form-p').toggle(2000)
        $('#google-form-button').toggle(2000)
    })

    $('#eye-2').on("click", function () {
        $('#google-form-p').toggle(2000)
        $('#google-form-button').toggle(2000)
    })

    //Next for us drop down
    $('#next-for-us-button').on("click", function () {
        $('#next-for-us-text').toggle(2000);
    })

    $('#eye-3').on("click", function () {
        $('#next-for-us-text').toggle(2000);
        $('#nocturnal-tickets-button').toggle(2000)
    })

    

    //Spotify drop down
    $('#spotify-button').on('click', function () {
        $('#spotify-info-p').slideToggle(2000)
        $('#spotify-info-button').slideToggle(2000)
    })

    $('#eye-4').on('click', function () {
        $('#spotify-info-p').slideToggle(2000)
        $('#spotify-info-button').slideToggle(2000)
    })

    //Shop drop down
    $('#shop-button').on("click", function () {
        $('#shop-info-label').slideToggle(2000);
        $('#shop-info-button').slideToggle(2000);
    })

    $('#eye-5').on("click", function () {
        $('#shop-info-label').slideToggle(2000);
        $('#shop-info-button').slideToggle(2000);
    })

    //Social media drop down
    $('#socials-button').on("click", function () {
        $('.socials-icons').toggle(2000);
    })

    $('#eye-6').on("click", function () {
        $('.socials-icons').toggle(2000);
    })

    //Password
    $("#input-btn").on("click", function () {

        let password = document.getElementById('password').value;
        let passwordAlert = document.getElementById('passwordAlert');

        if (password === 'SHOWMETHERAVE') {
            window.open('info.html', '_parent');
        } else {

            passwordAlert.hidden = false;
        }
    })

    // Set the date we're counting down to
    var countDownDate = new Date("Sep 13, 2024 18:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = days + "D   " + hours + "H   "
            + minutes + "H   " + seconds + "S   ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "WE'RE RAVING!! COME JOIN US!";
        }
    }, 1000);
})


