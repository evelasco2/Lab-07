function init() {
//add your javascript between these two lines of code
  function event() {
    var inp = document.getElementById('entryinput');
    alert('Eduardo Velasco: ' + inp.value);

    var textout = document.getElementById('textoutput');
    textout.innherHTML = inp.value;
  }

  var entrybut =document.getElementById('entrybutton');
  entrybut.addEventListener('click' event);
}

window.addEventListener('load', init);
