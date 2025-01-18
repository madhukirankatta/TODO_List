const listContainer = document.getElementById('list-container');
const inputBox = document.getElementById('input-box');


function addTask() {
    if (inputBox.value === '') {
        alert('Enter Some Data')
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask();
}

function saveTask() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

listContainer.addEventListener('click', function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('check');

        saveTask();
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveTask();
    }
});