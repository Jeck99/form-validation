var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,10})/;
function checkPasswords() {
    if (password1.value == password2.value) {
        if (strongRegex.test(password2.value)) {
            return true;
        }
        // ססמה לא תקינה
        msg.innerHTML = "Password is not strong enough";
        password2.style.borderColor = "red";
        return false;
    }
    // ססמאות לא תואמות
    msg.innerHTML = "Passwords do not match";
    return false;
}