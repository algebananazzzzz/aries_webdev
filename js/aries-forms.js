$(document).ready(function() {
  $('.sidenav').sidenav();
});

function toastaction() {
  var toastHTML = '<span>I am toast content</span><a href="#"><button class="toast-action-btn">Undo</button></a>';
  M.toast({
    html: toastHTML
  });
}

$('.canvas-basic').each(function() {
  new Granim({
    element: this,
    direction: 'left-right',
    states: {
      "default-state": {
       gradients: [
         ['#F45C43', '#EB3349' ],
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
  $('.timepicker').timepicker();
});
$(document).ready(function() {
  $('input#input_text, textarea#textarea2').characterCounter();
});
$(document).ready(function() {
  $('.carousel').carousel();
});
