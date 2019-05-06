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

$(document).ready(function() {
  //selector with first
  $("button:first").click(function() {
    $("p").hide(3000);
  });

  //Selector with attribute but without valu of attr.
  $("[show-text]").click(function() {
    $("p").show();
  });

  //Selector with nth- child
  $("button:nth(2)").click(function() {
    $("p").toggle("slow", function() {
      alert("Done");
    });
  });

  //selector with attr. and value of attr.
  $('[bulent="do-something-for-me"]').click(function() {
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

  $(".btn-def").click(function() {
    //$(this).addClass("btn-after");
    //$(this).removeClass("btn-def");
    $(this).toggleClass("btn-after");
  });

  $(".btn-def").dblclick(function() {
    $(this).css("background-color", "blue");
  });

  $(".btn-def").mouseenter(function() {
    $(this).css("background-color", "white");
  });

  $(".btn-def").mouseleave(function() {
    $(this).css("background-color", "black");
  });

  $("body").keydown(function() {
    $("button").css("color", "red");
  });

  $("body").keyup(function() {
    $("button").css("color", "white");
  });

  //Next line is closing of document ready
});
