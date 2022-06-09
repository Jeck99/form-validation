function clickSubmit() {
    if (checkFirstName() && checkPhone() && checkEmail() && checkPasswords()) {
        return true;
    }
    return false;
}
// פונקציה לבדיקת אות גדולה ראשונה בשם הפרטי
function checkFirstName() {
    if (firsName.value[0] == firsName.value[0].toUpperCase()) {
        return true;
    }
    fName_label.innerHTML += "*<span>First latter <b>MUST</b> be uppercase</span>";
    fName_label.style.color = "red";
    return false;
}
// פונקציה לבדיקת אימייל
function checkEmail(){
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email.value)) {
        return true;
    }
    email_label.innerHTML += "*<span>Enter a valid email</span>";
    return false;
}
// פונקציה לבדיקת טלפון
function checkPhone() {
    // var phoneRegex = /^(?=.*[0-9])(?=.{10})/;
    var phoneRegex = /^\d{10}/;
    if (phoneRegex.test(phone.value)) {
        return true;
    }
    phone_label.innerHTML += "*<span>Phone length <b>MUST</b> 10 digits</span>";
    return false;
}
//פונקציה לבדיקת ססמאות
function checkPasswords() {
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,10})/;
    if (password1.value == password2.value) {
        if (strongRegex.test(password2.value)) {
            return true;
        }
        password1_label.innerHTML += "*<span>Password is not strong enough</span>";
        password1_label.style.color = "red";
        return false;
    }
    password2_label.innerHTML += "*<span>Passwords not match</span>";
    password2_label.style.color = "red";
    return false;
}