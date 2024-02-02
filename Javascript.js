let firstName = document.getElementById('firstname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

let firstNameError = document.getElementById('fNameError');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');
let confirmPasswordError = document.getElementById('confirmPasswordError');


let form = document.querySelector('form');

let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

firstName.addEventListener('input', function() {
    if(firstName.value.length <= 0) {
        firstNameError.innerHTML = '* First Name is required';
        firstName.setCustomValidity("mm");
    }
    else if(firstName.value.length < 2) {
        firstNameError.innerHTML = 'First Name must be at least 2 characters';
        firstName.setCustomValidity("mm");
    } 
    else {
        firstNameError.innerHTML = '';
        firstName.setCustomValidity("");
    }
});

email.addEventListener('input', function() {
    if (email.value.length <= 0) {
        emailError.innerHTML = '* Email is required';
        email.setCustomValidity("mm");
    }
    else if(!emailRegex.test(email.value)) {
        emailError.innerHTML = 'Please enter a valid email';
        email.setCustomValidity("mm");
    } else {
        emailError.innerHTML = '';
        email.setCustomValidity("");
    }
});

password.addEventListener('input', function() {
    if (password.value.length <= 0) {
        passwordError.innerHTML = '* Password is required';
        password.setCustomValidity("mm"); //red box styling - makes css input:valid to input:invalid
    }
    else if(!passwordRegex.test(password.value)) {
        passwordError.innerHTML = 'Password must contain at least <br>8 characters, 1 number, 1 uppercase and 1 lowercase';
        password.setCustomValidity("mm");
    } else {
        passwordError.innerHTML = '';
        password.setCustomValidity("");
    }
});

confirmPassword.addEventListener('input', function() {
    if (confirmPassword.value.length <= 0) {
        confirmPasswordError.innerHTML = '* Confirm Password is required';
        confirmPassword.setCustomValidity("mm");
    }
    else if(confirmPassword.value != password.value) {
        confirmPasswordError.innerHTML = 'Passwords do not match';
        confirmPassword.setCustomValidity("mm");
    } else {
        confirmPasswordError.innerHTML = '';
        confirmPassword.setCustomValidity("");
    }
});



form.addEventListener('submit', function(event) {
    if (firstName.value.length <= 0) {
        firstNameError.innerHTML = '* First Name is required';
        event.preventDefault();
    } else if (firstName.value.length < 2) {
        firstNameError.innerHTML = 'First Name must be at least 3 characters';
        event.preventDefault();
    }

    if (email.value.length <= 0) {
        emailError.innerHTML = '* Email is required';
        event.preventDefault();
    } else if (!emailRegex.test(email.value)) {
        emailError.innerHTML = 'Please enter a valid email';
        event.preventDefault();
    }

    if (password.value.length <= 0) {
        passwordError.innerHTML = '* Password is required';
        event.preventDefault();
    } else if (!passwordRegex.test(password.value)) {
        passwordError.innerHTML = 'Password must contain at least <br>8 characters, 1 number, 1 uppercase and 1 lowercase';
        event.preventDefault();
    }

    if (confirmPassword.value.length <= 0) {
        confirmPasswordError.innerHTML = '* Confirm Password is required';
        event.preventDefault();
    } else if (password.value !== confirmPassword.value) {
        confirmPasswordError.innerHTML = 'Passwords do not match';
        event.preventDefault();
    }
});