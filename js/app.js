var addContainer = document.getElementById("addContainer"),
    addInput = document.getElementById("addInput"),
    addButton = document.getElementById("addButton"),
    tasksList = document.getElementById("tasksList"),
    compTasksList = document.getElementById("compTasksList");

// Begin createTask

var createTask = function(taskString) {
    
    // Create Elements
    var listItem = document.createElement("li"),
        checkbox = document.createElement("input"),
        span = document.createElement("span"),
        editInput = document.createElement("input"),
        editButton = document.createElement("button"),
        delButton = document.createElement("button");
    
    // Add Attributes and Text to the Elements
    checkbox.type = "checkbox";
    editInput.type = "text";
    span.textContent = taskString;
    editButton.textContent = "Edit";
    delButton.textContent = "Delete";
    
    // Add Event Listeners
    checkbox.addEventListener("change", markTask);
    editButton.addEventListener("click", editTask);
    delButton.addEventListener("click", delTask);
    
    // Append the Elements to the List Item
    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    listItem.appendChild(editInput);
    listItem.appendChild(delButton);
    listItem.appendChild(editButton);
    
    return listItem;
}

// End createTask

// Begin addTask

var addTask = function() {
    
    var error = document.createElement("p");
    error.id = "error";
    error.textContent = "Error: You forgot to enter a task!";
    
    var newTask = addInput.value;
    var noInput = (newTask == "");
    
    if (noInput && !checkError()) {
        /*  If the user didn't enter anything and there isn't currently an error message displayed,
            then display the error message. */
        addContainer.appendChild(error);
    } else if (noInput && checkError()) {
        /*  If the user didn't enter anything and there's already an error message being displayed,
            then do nothing. */
        return;
    } else {
                
        switch (!noInput && checkError()) {
            case true:
                /*  If the user entered something and there's an error message being displayed,
                    then remove the error message and continue to case false. */
                var error = document.getElementById("error");
                addContainer.removeChild(error);
            case false:
                // Call the createTask function, then append the task to the list.
                var listItem = createTask(newTask);
                tasksList.appendChild(listItem);
                break;
        };
    };
};

addButton.addEventListener("click", addTask);

// End addTask

// Begin checkError

var checkError = function() {
    /*  Return true if #error is found.
        Return false if it is not found. */
    if (document.getElementById("error")) {
        return true;
    } else {
        return false;
    };
};

// End checkError


// Placeholders:
var markTask = function() {};
var editTask = function() {};
var delTask = function() {};