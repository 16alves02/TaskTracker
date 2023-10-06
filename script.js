document.addEventListener("DOMContentLoaded", function () {
    // Clock
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    // Update the clock every second
    setInterval(updateClock, 1000);
    updateClock();

    // To-Do List
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value;
        if (taskText) {
            const listItem = document.createElement("li");

            // Add a checkbox for task selection
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            listItem.appendChild(checkbox);

            // Add the task text
            listItem.innerHTML += ` ${taskText}`;

            // Add a button to remove the task
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            listItem.appendChild(removeButton);

            taskList.appendChild(listItem);
            taskInput.value = "";

            // Event listener for the remove button
            removeButton.addEventListener("click", function () {
                listItem.remove();
            });
        }
    });

    // Expense Tracker
    const expenseInput = document.getElementById("expenseInput");
    const expenseAmount = document.getElementById("expenseAmount");
    const addExpenseButton = document.getElementById("addExpense");
    const expenseList = document.getElementById("expenseList");
    const totalExpense = document.getElementById("totalExpense");
    let total = 0;

    addExpenseButton.addEventListener("click", function () {
        const expenseText = expenseInput.value;
        const expenseValue = parseFloat(expenseAmount.value);

        if (expenseText && !isNaN(expenseValue)) {
            const listItem = document.createElement("li");
            listItem.textContent = `${expenseText} - ${expenseValue.toFixed(2)}€`;
            expenseList.appendChild(listItem);

            total += expenseValue;
            totalExpense.textContent = `Total Expense: ${total.toFixed(2)}€`;

            expenseInput.value = "";
            expenseAmount.value = "";
        }
    });
});
