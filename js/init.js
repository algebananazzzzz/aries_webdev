(function($) {
  $(function() {

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

new Granim({
  element: '#canvas-basic',
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

var granimInstance = new Granim({
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

// new Granim({
//   element: '#bottom-navbar-granim',
//   name: 'bottom-navbar-granim',
//   elToSetClassOn: '.bottom-navbar-wrapper',
//   direction: 'diagonal',
//   isPausedWhenNotInView: true,
//   stateTransitionSpeed: 500,
//   states: {
//     "default-state": {
//       gradients: [
//         ['#B3FFAB', '#12FFF7'],
//         ['#ADD100', '#7B920A'],
//         ['#1A2980', '#26D0CE']
//       ],
//       transitionSpeed: 7500
//     },
//     "violet-state": {
//       gradients: [
//         ['#9D50BB', '#6E48AA'],
//         ['#4776E6', '#8E54E9']
//       ],
//       transitionSpeed: 1750
//     },
//     "orange-state": {
//       gradients: [
//         ['#FF4E50', '#F9D423']
//       ],
//       loop: false
//     }
//   }
// });

// $('#default-state-cta').on('click', function(event) {
//   event.preventDefault();
//   granimInstance.changeState('default-state');
//   setClass('#default-state-cta')
// });
// $('#violet-state-cta').on('click', function(event) {
//   event.preventDefault();
//   granimInstance.changeState('violet-state');
//   setClass('#violet-state-cta')
// });
// $('#orange-state-cta').on('click', function(event) {
//   event.preventDefault();
//   granimInstance.changeState('orange-state');
//   setClass('#orange-state-cta')
// });
//
// function setClass(element) {
//   $('.canvas-interactive-wrapper a').removeClass('active');
//   $(element).addClass('active');
// };
