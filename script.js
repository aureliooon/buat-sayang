function checkLogin() {
    const usernameInput = document.querySelector(".username");
    const passwordInput = document.querySelector(".password");

    const username = usernameInput.value;
    const password = passwordInput.value;

    console.log("Username:", username);
    console.log("Password:", password);

    let errorElement = document.querySelector(".error-message");
    if (!errorElement) {
        errorElement = document.createElement("p");
        errorElement.classList.add("error-message");
        errorElement.style.color = "red";
        errorElement.style.marginTop = "10px";
        document.querySelector(".wrapper").appendChild(errorElement);
    }

    errorElement.textContent = "";

    if (username === "" || password === "") {
        errorElement.textContent = "Username dan password tidak boleh kosong!";
        return;
    }

    const users = {
        "PACARDIKTA": "FLOREANPACARNYADIKTA",
        "pacardikta": "floreanpacarnyadikta",
        "pacarflorean": "rafipacarnyaflorean",
        "PACARFLOREAN": "RAFIPACARNYAFLOREAN",
    };

    if (users[username] === password) {
        errorElement.textContent = ""; 
        window.location.href = "primary.html";
    } else {
        errorElement.textContent = "Username atau password salah!";
    }
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    checkLogin();
});

document.querySelector(".username").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Mencegah form submit
        document.querySelector(".password").focus(); // Pindah fokus ke password
    }
});

document.querySelector(".password").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Mencegah form submit
        document.querySelector("index").submit(); // Melakukan submit form
    }
});
