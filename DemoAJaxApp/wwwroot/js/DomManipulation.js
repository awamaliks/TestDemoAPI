// Vanilla JavaScript: Changing text content of an element
document.getElementById('header').textContent = "Updated DOM Manipulation";

// Vanilla JavaScript: Changing HTML content of an element
document.getElementById('container').innerHTML = "<p>Content updated using vanilla JS!</p>";

// Vanilla JavaScript: Changing the background color of the header
document.getElementById('header').style.backgroundColor = "#333";

// Traversing the DOM in Vanilla JS: Select first .button element and change its text
const firstButton = document.querySelector('.button');
firstButton.textContent = "Vanilla JS Button";

// Traversing the DOM in Vanilla JS: Change text of all buttons
const allButtons = document.querySelectorAll('.button');
allButtons.forEach(button => {
    button.textContent = "Click Me!";
});

// Event handling in Vanilla JS: Button click event
document.querySelector('.button').addEventListener('click', function () {
    alert("Vanilla JS Button Clicked!");
});

// jQuery: Changing the text of all buttons using jQuery
$('.button').text("jQuery Button");

// jQuery: Changing background color of the header using jQuery
$('#header').css("background-color", "#4CAF50");

// jQuery: Dynamically adding elements to the page
$('#addElementBtn').click(function () {
    const newElement = $('<div>').text("This is a dynamically created div!");
    $('#dynamic-content').append(newElement);
});

// jQuery: Removing the last dynamically added element
$('#removeElementBtn').click(function () {
    $('#dynamic-content div:last-child').remove();
});

// jQuery: Button click event handling
$('.button').click(function () {
    alert("jQuery Button Clicked!");
});
