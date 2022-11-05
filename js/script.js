function init() {
//add your javascript between these two lines of code
  function myEventFunction() {
    var inp = document.getElementById('entryinput');
    alert('Eduardo Velasco: ' + inp.value);

    var textout = document.getElementById('textoutput');
    textout.innherHTML = inp.value;
  }

  var entrybut =document.getElementById('entrybutton');
  entrybut.addEventListener('click' myEventFunction());
}

window.addEventListener('load', init);
