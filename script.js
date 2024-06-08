var todoInput = document.getElementById("todo-input");
var addItem = document.getElementById("add-item");
var todoList = document.getElementById("todo-list");
var deleteAll = document.getElementById("delete-all");
var x = 2;

todoInput.addEventListener("keypress", function handleItem(e){
    if (e.key == "Enter") {
        var text = todoInput.value;
        
        if (text) {
            addListItem(text);
            todoInput.value = "";
        }
    }
});

addItem.addEventListener("click", function addThem(){
    var text = todoInput.value;
    if (text) {
        addListItem(text);
        todoInput.value = "";
    }
});


deleteAll.addEventListener("click", function deleteThem(){
    var listed = document.querySelectorAll(".list-item");
    listed.forEach(function (item){
        todoList.removeChild(item);
    })
    
});

function addListItem(text) {
    var listItem = document.createElement("li");
    listItem.className = "list-item";
    listItem.textContent = text;
    
    todoList.appendChild(listItem);
}
