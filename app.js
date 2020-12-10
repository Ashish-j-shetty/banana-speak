var btnTranslate = document.querySelector("#btn-translate");

var textArea = document.querySelector("#txt-area");

var outputDiv = document.querySelector("#output");

btnTranslate.addEventListener("click", clickHandler);
function clickHandler() {
  outputDiv.innerText = "translated :  " + textArea.value;
}

//var textArea = document.querySelector("#txt-area"); selection based on id
//var select_based_on_type_selector = document.querySelector("textarea"); //selection based on tag
//var select_based_on_class_selector = document.querySelector(".btn-primary");
//var select_based_on_attribute = document.querySelector("[name = 'translator']");
