(function($) {
  $(function() {

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

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