/* kalder 
*/
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var pw = document.getElementById('pw');
var email = document.getElementById("email");
var birthday = document.getElementById("birthday");
var genderFemale = document.getElementById("female");
var genderMale = document.getElementById("male");
var genderOther = document.getElementById("other");
var intFemale = document.getElementById("Female");
var intMale = document.getElementById("Male");
var intOther = document.getElementById("Other");

function store() { //definerer localstorage
    var gender = null;
    if (document.getElementById("male").checked) {
      gender = document.getElementById("male").value;
    }
    if (document.getElementById("female").checked) {
      gender = document.getElementById("female").value;
    }
    if (document.getElementById("other").checked) {
      gender = document.getElementById("other").value;
    }
    
    var interest = null;
    if (document.getElementById("Male").checked) {
      interest = document.getElementById("Male").value;
    }
    if (document.getElementById("Female").checked) {
      interest = document.getElementById("Female").value;
    }
    if (document.getElementById("Other").checked) {
      interest = document.getElementById("Other").value;
    }

    localStorage.setItem('fname', fname.value);
    localStorage.setItem("lname", lname.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("birthday", birthday.value);
    localStorage.setItem("gender",gender);
    localStorage.setItem("interest",interest);
}

function check() {
    var storedEmail = localStorage.getItem('email');
    var storedPw = localStorage.getItem('pw');

    var userEmail = document.getElementById('useremail');
    var userPw = document.getElementById('userpassword');

    // tjek om det det gemte data fra sign up er ligmed data til login
    if(userEmail.value == storedEmail && userPw.value == storedPw) {
        alert('You are logged in.');
    }else {
        alert('ERROR.'); 
    }
}