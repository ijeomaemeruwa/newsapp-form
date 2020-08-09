
const form = document.querySelector('#form');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const signIn = document.querySelector('#sign-in');
const resetPassword = document.querySelector('#reset');


form.addEventListener('submit', (e) => {
e.preventDefault()  // Prevents the form from submitting

checkInput();
});

function checkInput() {
// Get input values and remove white spaces with trim method 
const firstNameInput = firstName.value.trim(); 
const lastNameInput = lastName.value.trim(); 
const emailInput = email.value.trim(); 
const passwordInput = password.value.trim();
      
//Set Error for Empty fields
//Firstname
if (firstNameInput === '') {
    setErrorFor(firstName);
} else {
    setSuccessFor(firstName);
}

//LastName
if (lastNameInput === '') {
     setErrorFor(lastName);
} else {
    setSuccessFor(lastName);
}
//Email
if (emailInput === '') {
    setErrorFor(email);
} else if(!validEmail(emailInput)) {
    setErrorFor(email);
} else {
    setSuccessFor(email);
}    

//Password
if (passwordInput === '') {
    setErrorFor(password);
} else {
    setSuccessFor(password);
}    
}

//Error Field
function setErrorFor(input) {
    const formDetails = input.parentElement; 
    formDetails.className = 'form-input error';
} 

//Success Field
function setSuccessFor(input) {
    const formDetails = input.parentElement;
    formDetails.className = 'form-input success';
}

//Email Validation
function validEmail(email) {
    var auth = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return auth.test(email);
}

function signInSuccess() {
    alert('Sign In Success!!');
}

function accountCreated() {
    alert('Account Created Successfully!!')
}

function resetPasswordSuccess() {
    alert('Link sent to your email address!');
}

//Add event Listeners to Button
signIn.addEventListener('click', signInSuccess);
newAccount.addEventListener('click', accountCreated);
resetPassword.addEventListener('click', resetPasswordSuccess);