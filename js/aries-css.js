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

ci = document.getElementById("contract-in")
eo = document.getElementById("expand-out")
fi = document.getElementById("focus-in")
bo = document.getElementById("blur-out")

function play_text() {
  ci.classList.remove("contract-in");
  eo.classList.remove("expand-out");
  fi.classList.remove("focus-in");
  bo.classList.remove("blur-out");

  void ci.offsetWidth;


  ci.classList.add("contract-in");
  eo.classList.add("expand-out");
  fi.classList.add("focus-in");
  bo.classList.add("blur-out");

}

si = document.getElementById("swirl-in");
slo = document.getElementById("slide-out");
boi = document.getElementById("bounce-in");
ro = document.getElementById("roll-out");
pi = document.getElementById("puff-in");
so = document.getElementById("swirl-out");
sli = document.getElementById("slide-in");
boo = document.getElementById("bounce-out");
ri = document.getElementById("roll-in");
po = document.getElementById("puff-out");

$("a").click(function() {
  id_name = this.id
  this.classList.remove(id_name);
  void this.offsetWidth;
  this.classList.add(id_name);
})

var waterize_checkbox = document.getElementById('waterize_checkbox')

waterize_checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    $('head').append('<link rel="stylesheet" type="text/css" href="css/dark.css">')
  } else {
    $('link[rel=stylesheet][href~="css/dark.css"]').remove();
  }
})