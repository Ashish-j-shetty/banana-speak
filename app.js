var btnTranslate = document.querySelector("#btn-translate");

var textArea = document.querySelector("#txt-area");

var outputDiv = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
  return encodeURI(url + "?text=" + text);
}

btnTranslate.addEventListener("click", clickHandler);

function clickHandler() {
  var inputText = textArea.value;

  fetch(getTranslationUrl(inputText))
    .then((res) => res.json())
    .then((json) => {
      outputDiv.innerText = json.contents.translated;
      console.log(json.contents.translated);
    })
    .catch((error) => console.log(error));
}

//var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"; //tanay's api
//var textArea = document.querySelector("#txt-area"); selection based on id
//var select_based_on_type_selector = document.querySelector("textarea"); //selection based on tag
//var select_based_on_class_selector = document.querySelector(".btn-primary");
//var select_based_on_attribute = document.querySelector("[name = 'translator']");
