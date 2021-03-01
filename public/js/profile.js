var AHAHA = decodeURIComponent(window.location.search);
AHAHA = AHAHA.substring(1);
console.log(AHAHA);

var firebaseConfig = {
    apiKey: "AIzaSyBfSG6VCJwfllop4J_r3fZgTu_ya7R-SGo",
    authDomain: "ict2021-firebase.firebaseapp.com",
    projectId: "ict2021-firebase",
    storageBucket: "ict2021-firebase.appspot.com",
    messagingSenderId: "106280681194",
    appId: "1:106280681194:web:2382b60585987ba0396193",
    measurementId: "G-DCBP00BZR8"
  };

firebase.initializeApp(firebaseConfig);
var Firestore = firebase.firestore();

let cityRef = Firestore.collection('data').doc(AHAHA)
cityRef.get().then(docSnapshot => {
    if (docSnapshot.exists) {
        let datac = docSnapshot.data()
        Usernamedata = datac.Username
        Engnamedata = datac.Full_name
        Birthdata = datac.Birth
        Genderdata = datac.Gender
        Phonedata = datac.Phone_number
        ELdata = datac.Education_level
        PWdata = datac.Password
        imagedata = datac.Profile_picture
        console.log(Birthdata)
        document.getElementById("User Name").innerHTML = Usernamedata;
        document.getElementById("EngName").innerHTML = Engnamedata;
        document.getElementById("genderdata").innerHTML = Genderdata;
        document.getElementById("phoneno").innerHTML = Phonedata;
        document.getElementById("DOB").innerHTML = Birthdata;
        document.getElementById("EL").innerHTML = ELdata;
        document.getElementById("BT").innerHTML = PWdata;
        document.getElementById("icon").src = imagedata;


    }
})


