// LOGIN / REGISTER FORM TOGGLE
let loginContainer = document.getElementById("loginContainer");
let registerContainer = document.getElementById("registerContainer");
let showRegister = document.getElementById("showRegister");
let showLogin = document.getElementById("showLogin");

if(showRegister){
    showRegister.addEventListener("click", function(){
        loginContainer.classList.add("hidden-form");
        registerContainer.classList.remove("hidden-form");
    });
}

if(showLogin){
    showLogin.addEventListener("click", function(){
        registerContainer.classList.add("hidden-form");
        loginContainer.classList.remove("hidden-form");
    });
}

let loginForm = document.getElementById("loginForm");

if(loginForm){
    loginForm.addEventListener("submit", function(event){
        event.preventDefault();

        let email = document.getElementById("loginEmail").value.trim();
        let password = document.getElementById("loginPassword").value.trim();

        if(email === "" || password === ""){
            alert("All login fields are required.");
            return;
        }

        if(!email.includes("@") || !email.includes(".")){
            alert("Please enter a valid email address.");
            return;
        }

        if(password.length < 6){
            alert("Password must be at least 6 characters.");
            return;
        }

        alert("Login Successful!");
        loginForm.reset();
    });
}


let registerForm = document.getElementById("registerForm");

if(registerForm){
    registerForm.addEventListener("submit", function(event){
        event.preventDefault();

        let name = document.getElementById("regName").value.trim();
        let email = document.getElementById("regEmail").value.trim();
        let password = document.getElementById("regPassword").value.trim();
        let confirmPassword = document.getElementById("regConfirmPassword").value.trim();

        if(name === "" || email === "" || password === "" || confirmPassword === ""){
            alert("All registration fields are required.");
            return;
        }

        if(!email.includes("@") || !email.includes(".")){
            alert("Please enter a valid email address.");
            return;
        }

        if(password.length < 6){
            alert("Password must be at least 6 characters.");
            return;
        }

        if(password !== confirmPassword){
            alert("Password and Confirm Password do not match.");
            return;
        }

        alert("Registration Successful!");
        registerForm.reset();

        // After successful registration, go back to login form
        registerContainer.classList.add("hidden-form");
        loginContainer.classList.remove("hidden-form");
    });
}


// CONTACT FORM VALIDATION
let contactForm = document.getElementById("contactForm");

if(contactForm){
    contactForm.addEventListener("submit", function(event){
        event.preventDefault();

        let name = document.getElementById("contactName").value.trim();
        let email = document.getElementById("contactEmail").value.trim();
        let message = document.getElementById("contactMessage").value.trim();

        if(name === "" || email === "" || message === ""){
            alert("All contact form fields are required.");
            return;
        }

        if(!email.includes("@") || !email.includes(".")){
            alert("Please enter a valid email address.");
            return;
        }

        alert("Inquiry Submitted Successfully!");
        contactForm.reset();
    });
}