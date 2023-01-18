var button = document.getElementById("save");
var textarea = document.getElementById("note");
var ul = document.querySelector("ul");

function textareaLength(){
    return textarea.value.length;
}
function createListElement(){
     var li = document.createElement("li");
     
    li.appendChild(document.createTextNode(textarea.value));
    ul.appendChild(li);
    textarea.value = "";
}
function addListAfterClick(){
    if(textareaLength() > 0){
        createListElement();
}
}

function addListAfterKeypress(event){
    if(textareaLength() > 0 && event.keyCode === 13){
        var li = document.createElement("li");
        createListElement();
}
}

button.addEventListener("click", addListAfterClick);

textarea.addEventListener("keypress", addListAfterKeypress );