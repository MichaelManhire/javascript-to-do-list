var addInput = document.getElementById("addInput"),
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
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    
    return listItem;
}

// End createTask