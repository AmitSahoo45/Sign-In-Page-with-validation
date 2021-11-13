document.getElementById("togglePassword").addEventListener("click", () => {
    const password = document.getElementById("password");
    const icon = document.getElementById("togglePassword");
    if (password.type === "password") {
        password.type = "text";
        icon.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
    }

})

{/* <i class="fas fa-eye-slash"></i> */ }

// const fname = document.getElementById("first-name");
// const lname = document.getElementById("last-name");
// const email = document.getElementById("email");
// const password = document.getElementById("password");

const inputform = document.querySelectorAll('.inputform');

inputform.forEach((input) => {
    input.addEventListener("invalid", () => {
        console.log("invalid");
        if (input.value == '') {
            input.nextElementSibling.classList.add("show");
            input.classList.add("inputbox");
        }
    });

    input.addEventListener('blur', (event) => {
        if (input.checkValidity()) {
            input.classList.remove("inputbox");
            input.nextElementSibling.classList.remove("show");
        }
    });

    input.addEventListener('focus', () => {
        input.classList.remove("inputbox");
        input.nextElementSibling.classList.remove("show");
    })


})