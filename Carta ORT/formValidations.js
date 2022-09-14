function emailValidation() {
    console.log("ingresa emailValidation()");
    const input =  document.getElementById("email").value;
    console.log("ingresa emailValidation() con el email: " + input);
    var pattern = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
    const isValidEmail = pattern.test(input);

    console.log("validando...");

    if (isValidEmail) {
        console.log("OK!");

        alert("Valid email address!");
        
        return true;
      } else {
        console.log("email mal formado");

        alert("Invalid email address!");
        setFocusInElement("email");
        return false;    
      }    
}

function setFocusInElement (element) {
    document.getElementById(element).focus();
}
