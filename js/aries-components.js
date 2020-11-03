$(document).ready(function() {
  $('.sidenav').sidenav();
});

function toastaction() {
  var toastHTML = '<span>I am toast content</span><a href="#"><button class="toast-action-btn">Undo</button></a>';
  M.toast({
    html: toastHTML
  });
}
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

$('.chips').chips();
$('.chips-initial').chips({
  data: [{
    tag: 'Apple',
  }, {
    tag: 'Microsoft',
  }, {
    tag: 'Google',
  }],
});
$(document).ready(function() {
  $('.datepicker').datepicker();
});
$(document).ready(function() {
  $('input#input_text, textarea#textarea2').characterCounter();
});
$(document).ready(function() {
  $('.carousel').carousel();
});