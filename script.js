function check() {
    let name = document.getElementById("name").value;
    let regno = document.getElementById("regno").value;
    let email = document.getElementById("email").value;
    let check = 0;

    for (let i = 0; i < name.length; i++) {
        if (name[i] == " ") {
            check = 1;
        }
    }
    if (check !== 1) {
        let e1 = document.getElementById("e1");
        e1.innerHTML = "Please enter full name";
        return false;
    }
    else {
        e1.innerHTML = " ";
    }

    if (!regno.match(/^[0-9]{2}[A-Z a-z]{3}[0-9]{4}$/)) {
        let e2 = document.getElementById("e2");
        e2.innerHTML = "Incorrect Reg no.";
        return false;
    }
    else {
        e2.innerHTML = " ";
    }

    if (!email.endsWith('@vitstudent.ac.in')) {
        let e3 = document.getElementById("e3");
        e3.innerHTML = "Enter VIT email only";
        return false;
    }
    else {
        e3.innerHTML = " ";
    }
    alert("Thank you ,Your details are submitted succesfully");
}

let categorySelect = document.getElementById("category");
let eventSelect = document.getElementById("event");

categorySelect.addEventListener("change", function () {
    let selectedCategory = categorySelect.value;
    let eventOptions = [];
    switch (selectedCategory) {
        case "gravitas":
            eventOptions = ["Hexathon", "Hack Battle", "Pygame", "ForkThis", "Robowars"];
            break;
        case "rivera":
            eventOptions = ["Rivera 1st day", "Rivera 2nd day", "Rivera 3rd day", "Night Party", "Singing Show"];
            break;
        case "general":
            eventOptions = ["Diwali celebration", "Holi celebration", "Pongal celebration", "Match screening"];
            break;
        case "tournament":
            eventOptions = ["Cricket", "Football", "Volleyball", "Kabaddi", "Chess"];
            break;
        case "sports":
            eventOptions = ["Cricket match", "Football match", "Volleyball match", "Kabaddi match"];
            break;
        default:
            eventOptions = [];
            break;
    }
    updateEventOptions(eventOptions);
});

function updateEventOptions(options) {
    eventSelect.innerHTML = "";
    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "--Select event--";
    eventSelect.add(defaultOption);

    options.forEach(function (option) {
        let newOption = document.createElement("option");
        newOption.value = option;
        newOption.text = option;
        eventSelect.add(newOption);
    });
}
  



