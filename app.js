var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(txtInput);

function clickhandler() {
  outputDiv.innerText = "asfsfsfsffs    " + txtInput.value;
}

btnTranslate.addEventListener("click", clickhandler);
