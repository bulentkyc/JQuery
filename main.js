//JQuery
//Chapter - 1 : Selectors
/*

JQuery uses css syntax on selectors.

selector templete:
$('')
document.getElementby...

All divs in page - Select with HTML elements:
$('div')
document.getElementByTagName('DIV')[0]

Select with class names:
$('.className') 
document.getElementByClassName('className')[0]

Select with id:
$('#Id')
document.getElementById('id')
*/

$(document).ready(function () {
    //selector with first
    $("button:first").click(function () {
        $("p").hide(3000);
    });

    //Selector with attribute but without valu of attr.
    $("[show-text]").click(function () {
        $("p").show();
    });

    //Selector with nth- child
    $("button:nth(2)").click(function () {
        $("p").toggle("slow", function () {
            alert("Done");
        });
    });

    //selector with attr. and value of attr.
    $('[bulent="do-something-for-me"]').click(function () {
        alert("Hi");
    });

    //Chapter - 2 : Css Manipulating
    /*
          syntax:
          css('property-name', 'value')

          You can use all css properties with same syntax.
          */

    //Single property
    $("p").css("color", "white");

    //Multiple property
    $("p").css({
        "background-color": "red",
        height: "50px",
        "border-radius": "5px"
    });

    $(".btn-def").click(function () {
        //$(this).addClass("btn-after");
        //$(this).removeClass("btn-def");
        $(this).toggleClass("btn-after");
    });

    $(".btn-def").dblclick(function () {
        $(this).css("background-color", "blue");
    });

    $(".btn-def").mouseenter(function () {
        $(this).css("background-color", "white");
    });

    $(".btn-def").mouseleave(function () {
        $(this).css("background-color", "black");
    });

    $("body").keydown(function () {
        $("button").css("color", "red");
    });

    $("body").keyup(function () {
        $("button").css("color", "white");
    });


    //Day -2

    //Chapter -3 : Animations
    /*
    fade: Using for fade an element in and out of visibility.
    -fadeIn()
    -fadeOut()
    -fadeToggle()
    -fadeTo()

    Syntax:
    $(selector).fade**(speed, callback)
    */

    $('#fadeInBtn').click(function () {
        $('.red-div').fadeIn();
        $('.gold-div').fadeIn('slow');
        $('.black-div').fadeIn(3000);
    });

    $('#fadeOutBtn').click(function () {
        $('.red-div').fadeOut();
        $('.gold-div').fadeOut('slow');
        $('.black-div').fadeOut(3000);
    });

    $('#fadeTogBtn').click(function () {
        $('.red-div').fadeToggle();
        $('.gold-div').fadeToggle('slow');
        $('.black-div').fadeToggle(3000);
    });

    //fadeTo: fade until choosen opacity
    //syntax: $(selector).fadeTo(speed, opacity, callbak)
    //!fadeIn and fadeOut does not change the opacity
    $('#fadeToBtn').click(function () {
        $('.red-div').fadeTo('slow', 0.1);
        $('.gold-div').fadeTo('slow', 0.5);
        $('.black-div').fadeTo('slow', 1);
    });

    //slide**: Shows content with slide animation.
    //syntax: $(selector).slide**(speed, callback)
    $('#slideDownBtn').click(function () {
        $('#slider').slideDown('slow');
    });

    $('#slideUpBtn').click(function () {
        $('#slider').slideUp('slow');
    });

    $('#slideTogBtn').click(function () {
        $('#slider').slideToggle('slow');
    });

    //animate
    //syntax:$(selector).animate({params}, speed,callback)
    /*
    Is it possible to manipulate ALL CSS properties with 
    the animate() method ?

    Yes, almost!However, there is one important thing 
    to remember : all property names must be camel - cased 
    when used with the animate() method: 
    You will need to write paddingLeft instead of 
    padding - left, marginRight instead of 
    margin - right, and so on.

    Also, color animation is not included in the core jQuery 
    library.
    If you want to animate color, you need to download 
    the Color Animations plugin from jQuery.com.
    */
    $('#animator').click(function () {
        $('.orange-div').animate({
            left: '300px',
            minHeight: '+=200px',
            width: '+=100px',
            paddingLeft: '0'
        }, 'slow')
    });

    $('#toggleAni').click(function () {
        $('.orange-div').animate({
            height: 'toggle'
        }, 'slow')
    });

    $('#animate').click(function () {
        $('.orange-div').animate({
            height: '300px',
            opacity: '0.3'
        }, 'slow');

        $('.orange-div').animate({
            width: '300px',
            opacity: '0.9',
            fontSize: '100px'
        }, 'slow');

        $('.orange-div').animate({
            height: '100px',
            opacity: '0.3'
        }, 'slow');

        $('.orange-div').animate({
            width: '100px',
            opacity: '0.9',
            fontSize: '20px'
        }, 'slow');
    });

    //Chapter - 4: AJAX
    //Syntax:$(selector).load(URL,data,callback);
    /*
    The optional callback parameter specifies a callback
    function to run when the load() method is completed.The callback
    function can have different parameters:

        responseTxt - contains the resulting content
    if the call succeeds
    statusTxt - contains the status of the call
    xhr - contains the XMLHttpRequest object

    GET - Requests data from a specified resource
    POST - Submits data to be processed to a specified resource
    */
    /* $('#ajxBtn').click(function () {
        $('#ajxDiv').load('./test.txt p');
    }); */



    $('#ajxBtn').click(function () {
        $.get("http://api.openweathermap.org/data/2.5/weather?q=Dusseldorf,DE&APPID=", function (data, status) {
            console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
        });

    });


    //Next line is closing of document ready
});