// Array with starting values
let list = [
    "Task 1",
    "Task 2"
];

// Function that updates the ul list
function updateList() {

    // Get ul element
    let ul = document.getElementById("todoList");

    ul.innerHTML = "";

    for (let item of list) {

        let li = document.createElement("li");

        li.innerHTML = item;

    
        ul.appendChild(li);
    }
}

function add() {

   
    let input = document.getElementById("taskInput");

    list.push(input.value);


    updateList();

  
    input.value = "";
}