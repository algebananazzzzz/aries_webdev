$(document).ready(function() {
  $('.sidenav').sidenav();
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left'
  });
});


$('.canvas-basic').each(function() {
  new Granim({
    element: this,
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: [
          ['#ff9966', '#ff5e62'],
          ['#00F260', '#0575E6'],
          ['#e1eec3', '#f05053']
        ]
      }
    }
  });
});

new Granim({
  element: '#canvas-image-blending',
  direction: 'top-bottom',
  isPausedWhenNotInView: true,
  image: {
    source: 'images/castle-home.jpg',
    stretchMode: ['stretch', 'stretch'],
    blendingMode: 'screen'
  },
  states: {
    "default-state": {
      gradients: [
        ['#29323c', '#485563'],
        ['#FF6B6B', '#556270'],
        ['#80d3fe', '#7ea0c4'],
        ['#f0ab51', '#eceba3']
      ],
      transitionSpeed: 7000
    }
  }
});
new Granim({
  element: '#canvas-preloader',
  direction: 'left-right',
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ['#ff9966', '#ff5e62'],
        ['#00F260', '#0575E6'],
        ['#e1eec3', '#f05053']
      ],
      transitionSpeed: 1200
    }
  }
});

$(document).ready(function() {
  $('#card-tab').tabs();
});