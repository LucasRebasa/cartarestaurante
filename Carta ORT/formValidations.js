function emailValidation() {
  console.log("ingresa emailValidation()");
  const input =  document.getElementById("email");
  console.log("ingresa emailValidation() con el email: " + input);
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValidEmail = pattern.test(input.value);
  
  console.log("validando...");
  
  if (isValidEmail) {
    console.log("Valido")
    if(input.nextElementSibling !== null){
      input.nextElementSibling.remove()
    }
    return true;
  } else {
    console.log("Invalido")
    const errorMsg = document.createElement('h4');
    errorMsg.innerHTML = "Mail invalido";
    errorMsg.classList.add('error')
    if(!input.nextElementSibling.classList.contains('error')) input.after(errorMsg)
    setFocusInElement("email");
    return false;    
  }    
}

function selectValidation(){
  const select = document.getElementById('referencia')
  const errorMsg = document.createElement('h4');

  if(select.selectedIndex === 0){
    errorMsg.innerHTML = "Seleccione una opcion";
    errorMsg.classList.add('error');
    if(!select.nextElementSibling.classList.contains('error')) select.after(errorMsg)
    return false;
  }else if(select.nextElementSibling.classList.contains('error')){
    select.nextElementSibling.remove()
    return true;
  }
}

function setFocusInElement (element) {
  document.getElementById(element).focus();
}

document.getElementById('submit').addEventListener('click', e =>{
  let email = emailValidation();
  let selectV = selectValidation()
  if(email == false || selectV == false) e.preventDefault()
})
