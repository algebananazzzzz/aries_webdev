$(document).ready(function() {
  $('.sidenav').sidenav();
});

$(".dropdown-trigger").dropdown({
  coverTrigger: false,
  hover: true,
});

$(document).ready(function() {
  $('.parallax').parallax();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

$('.pushpin').each(function() {
  var $this = $(this);
  var $target = $('#' + $(this).attr('data-target'));
  $this.pushpin({
    top: $target.offset().top,
    bottom: $target.offset().top + $target.outerHeight() - $this.height()
  });
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