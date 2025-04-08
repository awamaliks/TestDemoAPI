// Vanilla JavaScript: Changing text content of an element
document.getElementById('header').textContent = "Updated DOM Manipulation";
document.getElementById('header').textContent = "Updated DOM Content By Me";

// Vanilla JavaScript: Changing HTML content of an element
document.getElementById('container').innerHTML = "<p>Content updated using vanilla JS!</p>";
document.getElementById('container2').innerHTML = "<p>Content updated By Me!</p>";


// Vanilla JavaScript: Changing the background color of the header
document.getElementById('header').style.backgroundColor = "#333";

// Traversing the DOM in Vanilla JS: Select first .button element and change its text
const firstButton = document.querySelector('.button');
firstButton.textContent = "Vanilla JS Button";

// Traversing the DOM in Vanilla JS: Change text of all buttons
//const allButtons = document.querySelectorAll('.button');
//allButtons.forEach(button => {
//    button.textContent = "Click Me!";
//});

// Event handling in Vanilla JS: Button click event
document.querySelector('.button').addEventListener('click', function () {
    console.log("Hey first button is clicked")
    $("#container2").html("<p>Content Added by Jquery!</p>")
    alert("Vanilla JS Button Clicked!");
});

// jQuery: Changing the text of all buttons using jQuery
//$('.button').text("jQuery Button");

// jQuery: Changing background color of the header using jQuery
$('#header').css("background-color", "#4CAF50");

// jQuery: Dynamically adding elements to the page
$('#addElementBtn').click(function () {
    const newElement = $('<div>').text("Hi I am dynamically created!");   

    $('#dynamic-content').append(newElement);

    //$('#dynamic-content').append('<div>New Element</div>')
});

// jQuery: Removing the last dynamically added element
$('#removeElementBtn').click(function () {
    $('#dynamic-content div:first-child').remove();
});

// jQuery: Button click event handling
$('.button').click(function () {
    alert("jQuery Button Clicked!");
});






$(document).ready(function () {
   
    // jQuery function to traverse table rows
    $('#traverseBtn').click(function () {
        // Select all rows in the table body
        $('#myTable tbody tr').each(function (index) {
            // Get each cell in the row
            var name = $(this).find('td').eq(0).text(); // Get the Name (1st column)
            var age = $(this).find('td').eq(1).text();  // Get the Age (2nd column)
            var location = $(this).find('td').eq(2).text();  // Get the Location (3rd column)
            var education = $(this).find('td').eq(3).text();

            // Log the data to the console
            console.log(`Row ${index + 1}: ${name}, ${age}, ${location}, ${education}`);
        });
    });
});
