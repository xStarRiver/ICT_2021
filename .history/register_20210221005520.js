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

function previewFile(input) {
  var file = $("input[type=file]").get(0).files[0];

  if (file) {
      var reader = new FileReader();

      reader.onload = function() {
          $("#previewImg").attr("src", reader.result);
      }

      reader.readAsDataURL(file);
  }
}

document.getElementById("name").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});

document.getElementById("phone").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});

document.getElementById("password").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});

document.getElementById("confirm_password").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});

document.getElementById("engname").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});

document.getElementById("gender").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});


document.getElementById("Birth").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});


document.getElementById("level").addEventListener("input", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


});

document.getElementById("previewImg").addEventListener("load", function() {
    let userNameInput = userName.value;
    let userNoInput = userNo.value;
    let userPassInput = userPass.value;
    let userPasswordInput = userPassword.value;
    let userEngNameInput = userEngName.value;
    let userGenderInput = userGender.value;
    let userBirthInput = userBirth.value;
    let userLevelInput = userLevel.value;
    const dataUrl = getDataUrl(img);
    let userPictureInput = dataUrl;

    if ((userNameInput != "") && (isNaN(userNoInput) === false) && (userNoInput.length === 8) && (userPasswordInput != "") && (userPassInput === userPasswordInput) && (userEngNameInput != "") && (userGenderInput != "") && (userBirthInput != "") && (userPictureInput != photo)) {
        submitBtn.setAttribute('type', 'button');
        console.log("ali");
    }


