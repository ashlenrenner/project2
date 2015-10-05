// This is my javascript file
$(document).ready(function() {
   $("#mySlider").swiperight(function() {
      $(this).slider('prev');
    });
   $("#mySlider").swipeleft(function() {
      $(this).slider('next');
   });
});

// Adding quiz
function addQuiz(){
  var quiz = jQuery('#quiz').quiz('1eejyrkTa3ur1RzJ-64XlqXXX8xET8vYR-aZKkCtb7eQ');
}

function addScroller(){
  $(window).load(function(){
        $("#quiz").mCustomScrollbar();
              console.log("scroller loaded");

      });

}

//Tooltip
$(document).ready(function() {
         $('.tooltip').tooltipster();
     });

function sayName(){
$(document).ready(function(sayname) {
  $('.tooltip').tooltipster({
     animation: 'fade',
     delay: 200,
     theme: 'tooltipster-default',
     trigger: 'hover',
     position: 'bottom'
  });


  });
}



function showpic(){
  document.getElementById('news').style.visibility = "visible"
  console.log("buton was clicked");

}
function hidebly(){
  document.getElementById('profile').style.visibility = "hidden"
}
function showtext(){
  document.getElementById('text').style.visibility = "visible"

}
function textout(){
document.getElementById('world-info1').style.visibility = "hidden"
document.getElementById('world-info2').style.visibility = "hidden"
}
function showbag(){
document.getElementById('bag').style.visibility = "visible"
    $(document).ready(function(showbag) {
        $('.tooltipster-arrow').tooltipster();
        var tooltipsterObjects = $('#bag').tooltipster({
            	content: '7 inches',
            	multiple: true,
            	position: 'left'
    });
});
        $('.tooltipster-arrow').tooltipster();
            var tooltipsterObjects = $('#bag').tooltipster({
                content: '16 inces',
                multiple: true,
                position: 'bottom'
        });
}
function textIn(){

  document.getElementById('world-info3').style.visibility = "visible"

}


jQuery(window).load(function(){
  console.info("main.js window load function");
  $('.slider').fractionSlider({
    'fullWidth':            true,
    'controls':             true,
    'pager':                true,
    'responsive':           true,
    'dimensions':        "1000,800",
    'increase':             false,
    'pauseOnHover':         false
    });
});
