(function($) {
  $(function() {

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

new Granim({
  element: '#canvas-basic',
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

new Granim({
  element: '#top-navbar-granim',
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
new Granim({
  element: '#bottom-navbar-granim',
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