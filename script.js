const namn = "Sara";
const lösenord = "qwe123";

const customerName = document.getElementById("name");
const customerPassword = document.getElementById("password");
const logInButton = document.getElementById("logInBtn");
const logOutButton = document.getElementById("logOutBtn");

let text;
let container = document.getElementById("logInForm");
let messageDiv = document.createElement("div");
let messageText = document.createElement("p");
container.insertAdjacentElement("beforebegin", messageDiv);
messageDiv.appendChild(messageText);
messageDiv.classList.add("message");

if (localStorage.length !== 0) {
    changeButton();
    messageText.textContent = `Välkommen ${namn}, du är fortfarande inloggad`;
    messageDiv.style.backgroundColor = "#4aff4a";
}

function changeButton() {
    if (logInButton.classList.contains("display")) {
        logInButton.classList.remove("display");
        logOutButton.classList.add("display");
    } else {
        logInButton.classList.add("display");
        logOutButton.classList.remove("display");
    }
}


function message() {
    if (customerName.value === "") {
        text = "Skriv ditt namn och lösenord."
        messageDiv.style.backgroundColor = "#f2dede";
        messageDiv.style.color = "#b04442";
    } else if (customerName.value === namn) {

        if (customerPassword.value === lösenord) {
            text = `Välkommen ${namn}, du är nu inloggad.`;
            localStorage.setItem("User Nmae", customerName.value);
            localStorage.setItem("Password", lösenord);
            messageDiv.style.backgroundColor = "#4aff4a";
            changeButton();
        } else if (customerPassword.value === "") {
            text = `Hej ${namn}, du glömde att skriva ditt lösenord.`;
            messageDiv.style.backgroundColor = "#fffa46";
            customerName.value = null;
        } else {
            text = `Hej ${namn}, du har skrivit fel lösenord.`;
            messageDiv.style.backgroundColor = "#fffa46";
            customerName.value = null;
        }

    } else {
        text = "Du har inget konto. Du borde skapa ett konto för att fortsätta.";
        messageDiv.style.backgroundColor = "#f2dede";
        messageDiv.style.color = "#b04442";
        customerName.value = null;
    }

    messageText.textContent = text;
}




logInButton.addEventListener("click", function () {
    message();
})

logOutButton.addEventListener("click", function () {
    changeButton();
    messageText.textContent = "Du är nu utloggad.";
    messageDiv.style.backgroundColor = "#fffa46";
    customerName.value = null;
    customerPassword.value = null;
    localStorage.clear();
})

