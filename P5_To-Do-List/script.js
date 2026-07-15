const inputField = document.getElementById("task-box");
const listContainer = document.getElementById("list_container");

function pressEnter() {
    if (inputField.value.trim() === '') {
        alert("Enter some task!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        li.appendChild(span);

        inputField.value = '';
        storeData();
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        storeData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeData();
    }
    
})

inputField.addEventListener("keydown", function(lame) {
    if (lame.key === "Enter") {
        pressEnter();
    } 
}, false);


function storeData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    if (localStorage.getItem("data")) {
        listContainer.innerHTML = localStorage.getItem("data");
    }
}

showList();



