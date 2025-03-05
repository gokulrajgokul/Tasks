function appendValue(value) {
  var input= document.getElementById('display').value+= value;
   
}
function clearDisplay() {
  var input= document.getElementById('display').value = '';
}
function calculateResult() {
     
        document.getElementById('display').value = eval(document.getElementById('display').value);
    
}
