// when email format is false then:
//     1) remove class hidden and display
//     2) add class input-false
//     3) addtext to class message: "Please provide a valid email"

const button = document.querySelector("button");
const message = document.querySelector(".message");
const input = document.querySelector("input");

const errorSign = document.querySelector(".error-sign");




function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
  
    if (validateEmail(email)) {
      return true
    } else {
        button.classList.remove("display");
        errorSign.classList.remove("hidden");
        input.classList.add("input-false");
        message.classList.remove("hidden");
    }
    return false;
  }
  
  button.addEventListener("click", validate)