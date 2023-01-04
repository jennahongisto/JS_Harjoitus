
let button = document.getElementById("btn");
let date = new Date();
let important = document.getElementById("important");
let body = document.querySelector("body");

button.addEventListener("click", buttonClicked);

function buttonClicked() {
    let nameValue = document.getElementById("name").value;
    let noteValue = document.getElementById("note").value;
    let p = document.createElement("p");
    let noteDiv = document.createElement("div");
    noteDiv.textContent = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + nameValue;
    p.textContent = noteValue;
    body.appendChild(noteDiv);
    noteDiv.appendChild(p);
    if (important.checked) {
        noteDiv.style.borderColor = "red";
    }  
}
