const signUpButton = document.getElementById('signUpButton')
const signinbutton = document.getElementById('signinbutton')
const signInForm = document.getElementById('signIn')
const signUpForm = document.getElementById('signup')

signUpButton.addEventListener('click', function () {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
})
signinbutton.addEventListener('click',function(){
    signInForm.style.display="block";
    signUpForm.style.display="none"
})