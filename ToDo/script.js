// Initialize the array for the list
let theList = [];

// Add to list function
function addToList() {
    const value = document.getElementById('to-list').value;
    
    if (value.trim() !== "") {
        theList.push(value);
        document.getElementById('to-list').value = "";
    }

    displayList();
}

// Display list funtion
function displayList() {
    const listElement = document.getElementById('the-list');
    listElement.innerHTML = ""; // Empty list

    theList.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;

        // Change style for list item when clicked
        li.addEventListener("click", function() {
            li.classList.toggle("striked");
        });

        // Adding "Delete" to the list item
        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        // Event listener for the delete button on list items
        deleteBtn.addEventListener("click", function(event) {
            event.stopPropagation(); // Stopping the event from going upp the hierarchy 
            removeItem(index);
        });

        // Appending delete button to the list item
        li.appendChild(deleteBtn);
        listElement.appendChild(li);
    });
}

// Function to remove item from list
function removeItem(index) {
    theList.splice(index, 1);
    displayList();
}

// Event (click) listener for button, calls the addToList function 
document.getElementById("button").addEventListener("click", addToList);




