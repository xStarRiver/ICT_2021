var PW = document.getElementById("password"),
    CPW = document.getElementById("confirm_password");

function validatePassword() {
    if (PW.value != CPW.value) {
        CPW.setCustomValidity("Passwords do not Match");
    } else {
        CPW.setCustomValidity('');
    }
}

PW.onchange = validatePassword;
CPW.onkeyup = validatePassword;


const input = document.getElementById('example');
const datepicker = new TheDatepicker.Datepicker(input);
datepicker.render();


function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
