var output = ''
var a = 0
var b = 0
var result = 0
var operation = ''


function add(value) {
   output += value;
   document.getElementById("output").value = output
}

function plus() {
   operation = '+'
   a = parseInt(output)
   output = ''
}

function minus() {
   operation = '-'
   a = parseInt(output)
   output = ''
}

function multiply() {
   operation = '*'
   a = parseInt(output)
   output = ''
}

function divide() {
   operation = '/'
   a = parseInt(output)
   output = ''
}

function equal() {
   b = parseInt(output)
   if (operation == '+') {
      result = a + b
      document.getElementById("output").value = result
   }
   else if (operation == '-') {
      result = a - b
      document.getElementById("output").value = result
   }
   else if (operation == '*') {
      result = a * b
      document.getElementById("output").value = result
   }
   else if (operation == '/') {
      if (b == 0) {
         document.getElementById("output").value = 'Ты тупой?'
      } else {
         result = a / b
         document.getElementById("output").value = result
      }
   }
   if (result == 31){
      document.getElementById("output").value = "Эльдар"
   }
   if (result == 72){
      document.getElementById("output").value = "Тогрул"
   }
   if( result == 8){
      document.getElementById("output").value = "Офелия"
   }
   if( result == 13){
      document.getElementById("output").value = "Мурад"
   }
}

document.getElementById("clear").addEventListener('click', function clear() {
   output = ''
   document.getElementById("output").value = output
})