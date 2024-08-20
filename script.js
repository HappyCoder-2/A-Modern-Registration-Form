// Project - REGISTRATION FORM


goForward();
function goForward(){
        let firstName = document.getElementById("inputName").value;
        let lastName = document.getElementById("inputSurname").value;
        let emailAddress = document.getElementById("inputEmail").value;
        let password = document.getElementById("inputPassword").value;
        let passwordConfirm = document.getElementById("inputconfirmPassword").value;

        let confirmationPart = document.getElementById("confirmationPart");

        if(!firstName){
                confirmationPart.textContent = "Please enter your name";
        }
        else if(!lastName) {
                confirmationPart.textContent = "Please enter your last name";
        }
        else if(!emailAddress){
                confirmationPart.textContent = "Please enter your email address";
        }
        else if(!password){
                confirmationPart.textContent = "Please enter your password";
        }
        else if(!passwordConfirm){
                confirmationPart.textContent = "Please confirm your password";
        }
        else {
                confirmationPart.textContent = "All fields are filled!";
        }
}

resetFields();
function resetFields() {
        document.getElementById("inputName").value = "";
        document.getElementById("inputSurname").value = "";
        document.getElementById("inputEmail").value = "";
        document.getElementById("inputPassword").value = "";
        document.getElementById("inputconfirmPassword").value = "";
        document.getElementById("confirmationPart").textContent = "";
    }