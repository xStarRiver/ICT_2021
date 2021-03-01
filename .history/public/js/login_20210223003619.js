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
const submitBtn = document.querySelector('#submit');

let Login = document.querySelector('#user');
let Password = document.querySelector('#password');

document.getElementById("submit").addEventListener("click", function() {

    Firestore.collection("data").where("Username", "==", Login.value)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                window.compare_noA = (doc.id);
                console.log(compare_noA);
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });

    Firestore.collection("data").where("Phone_number", "==", Login.value)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                window.compare_noA = (doc.id);
                console.log(compare_noA);
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });

    Firestore.collection("data").where("Password", "==", Password.value)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doco) {
                window.compare_noB = (doco.id);
                console.log(compare_noB);
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });


})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
document.getElementById("submit").addEventListener("click", function() {


    sleep(1200).then(() => {
        try {
            if (compare_noA === compare_noB) {
                console.log("pass")
                var senddata = "?" + compare_noA;
                window.location.href = "profile.html" + senddata;
            }
        } catch (err) {
            alert("Wrong username or password !");
            window.location.replace("http://127.0.0.1:5500/login.html");
        }

    });
})