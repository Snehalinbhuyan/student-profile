// Greeting Message
window.onload = function () {
    let name = document.getElementById("studentName").innerText;
    alert("Welcome, " + name + "!");
};

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    let name = document.getElementById("name").value;
    let studentClass = document.getElementById("class").value;
    let message = document.getElementById("message").value;

    if (name === "" || studentClass === "" || message === "") {
        alert("All fields are required!");
        e.preventDefault();
    } else {
        alert("Form Submitted Successfully!");
    }
});

// Dark Mode Toggle
function toggleMode() {
    document.body.classList.toggle("dark");
}

// Calculate Average Marks
function calculateAverage() {
    let table = document.getElementById("marksTable");
    let rows = table.rows;
    let total = 0;

    for (let i = 1; i < rows.length; i++) {
        total += parseInt(rows[i].cells[1].innerText);
    }

    let avg = total / (rows.length - 1);
    document.getElementById("average").innerText = "Average Marks: " + avg;
}