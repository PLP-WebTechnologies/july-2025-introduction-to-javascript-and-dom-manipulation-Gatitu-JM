// =========================
// Part 1: JavaScript Basics
// =========================

// Variable declarations
let userName = "Tito";
let userAge = 20;
let isMember = true;

// Conditionals
if (userAge >= 18 && isMember) {
    console.log("Welcome, " + userName + "! You have full access.");
    document.getElementById("output").textContent = `Welcome, ${userName}! You have full access.`;
} else {
    console.log("Access denied. You must be 18+ and a member.");
    document.getElementById("output").textContent = "Access denied. You must be 18+ and a member.";
}

// =========================
// Part 2: JavaScript Functions
// =========================

// Custom function 1: Calculate total price
function calculateTotal(price, quantity) {
    // Returns the total cost
    return price * quantity;
}

// Custom function 2: Format a greeting
function formatGreeting(name) {
    return `Hello, ${name}! Have a great day!`;
}

// Display function results in console
console.log("Total: $" + calculateTotal(15, 3));
console.log(formatGreeting(userName));

// =========================
// Part 3: JavaScript Loops
// =========================

// Loop 1: for loop to create a list of items
const items = ["Apple", "Banana", "Cherry"];
const listElement = document.getElementById("dynamicList");
for (let i = 0; i < items.length; i++) {
    let li = document.createElement("li");
    li.textContent = items[i];
    listElement.appendChild(li);
}

// Loop 2: while loop for countdown
function startCountdown() {
    let count = 5;
    const output = document.getElementById("output");
    const interval = setInterval(() => {
        if (count > 0) {
            output.textContent = `Countdown: ${count}`;
            count--;
        } else {
            output.textContent = "Countdown finished!";
            clearInterval(interval);
        }
    }, 1000);
}

// =========================
// Part 4: DOM Manipulation
// =========================

// DOM Interaction 1: Toggle message on button click
let showMessage = true;
document.getElementById("toggleBtn").addEventListener("click", function() {
    showMessage = !showMessage;
    document.getElementById("output").textContent = showMessage ? "Message is visible!" : "Message is hidden!";
});

// DOM Interaction 2: Start countdown on button click
document.getElementById("countdownBtn").addEventListener("click", startCountdown);

// DOM Interaction 3: Dynamically add a new item to the list
function addItemToList(item) {
    let li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
}
addItemToList("Dragonfruit"); // Example usage

// =========================
// End of Assignment
// =========================
