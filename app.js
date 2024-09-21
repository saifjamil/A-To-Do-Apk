const inputBox = document.getElementById('inputBox');  // Change 'inputBox' to 'inputbox'
const list_container = document.getElementById('list_container');

function addTask(){
    if(inputBox.value === '') {
        alert("Please enter a task");
    }
    else {
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        list_container.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';  // Unicode for 'x'
        li.appendChild(span);
        inputBox.value = '';  // Clear the input after adding a task

        saveData();  // Save data after task is added
    }
}

list_container.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {  // Change 'li' to 'LI'
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {  // Change 'span' to 'SPAN'
        e.target.parentElement.remove();
        saveData();  // Save data after task is removed
    }
}, false);

function saveData() {
    localStorage.setItem("data", list_container.innerHTML);  // Use list_container consistently
}

// Optional: Load the saved data when the page loads
function loadData() {
    list_container.innerHTML = localStorage.getItem("data");
}
loadData();
