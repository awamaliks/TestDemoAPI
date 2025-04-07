$(document).ready(function() {
    // Slide 3: Add Task - DOM Manipulation to Add Task
    $('#add-task-btn').click(function() {
        // Get the task input from the user
        const task = $('#task-input').val();
        
        // Check if the input is not empty
        if (task) {
            // Create a new list item for the task
            const listItem = $('<li>').text(task);

            // Slide 6: Remove Task Button
            // Add a button that will remove the task from the list
            const removeBtn = $('<button>').text('Remove').click(function() {
                $(this).parent().remove(); // Remove the task item
            });

            // Append the remove button to the list item
            listItem.append(removeBtn);

            // Add the new task to the task list
            $('#task-list').append(listItem);

            // Clear the input field after adding the task
            $('#task-input').val('');
        }
    });

    // Slide 7: Toggle Task Completion - Changing Style
    $('#task-list').on('click', 'li', function() {
        // Toggle the 'completed' class to mark a task as done or undone
        $(this).toggleClass('completed');
    });
});