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
    }
    else if(firstName.value.length < 3) {
        firstNameError.innerHTML = 'First Name must be at least 3 characters';
    } 
    else {
        firstNameError.innerHTML = '';
    }
});

email.addEventListener('input', function() {
    if (email.value.length <= 0) {
        emailError.innerHTML = '* Email is required';
    }
    else if(!emailRegex.test(email.value)) {
        emailError.innerHTML = 'Please enter a valid email';
    } else {
        emailError.innerHTML = '';
    }
});

password.addEventListener('input', function() {
    if (password.value.length <= 0) {
        passwordError.innerHTML = '* Password is required';
    }
    else if(!passwordRegex.test(password.value)) {
        passwordError.innerHTML = 'Password must contain at least <br>8 characters, 1 number, 1 uppercase and 1 lowercase';
    } else {
        passwordError.innerHTML = '';
    }
});

confirmPassword.addEventListener('input', function() {
    if (confirmPassword.value.length <= 0) {
        confirmPasswordError.innerHTML = '* Confirm Password is required';
    }
    else if(confirmPassword.value != password.value) {
        confirmPasswordError.innerHTML = 'Passwords do not match';
    } else {
        confirmPasswordError.innerHTML = '';
    }
});

form.addEventListener('submit', function(event) {
    if (firstName.value.length < 3 || 
        !emailRegex.test(email.value) || 
        !passwordRegex.test(password.value) || 
        password.value !== confirmPassword.value) {
        event.preventDefault();
        alert('Please correct the errors before submitting the form');
    }
});