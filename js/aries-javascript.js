$(document).ready(function() {
  $('.sidenav').sidenav();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

$(document).ready(function() {
  $('.slider').slider({
    duration: 500
  });
});

$(document).ready(function() {
  $('.modal').modal();
});

$(document).ready(function() {
  $('.parallax').parallax();
});

$(document).ready(function() {
  $('.materialboxed').materialbox();
});

$(document).ready(function() {
  $('.scrollspy').scrollSpy();
});


$('.canvas-basic').each(function() {
  new Granim({
    element: this,
    direction: 'left-right',
    states: {
      "default-state": {
        gradients: [
          ['#F45C43', '#EB3349'],
          ['#FF8008', '#FFC837'],
          ['#3CD3AD', '#4CB8C4'],
          ['#24C6DC', '#514A9D'],
          ['#DD2476', '#FF512F'],
          ['#DA22FF', '#9733EE'],
        ],
        transitionSpeed: 5000
      }
    }
  });
});