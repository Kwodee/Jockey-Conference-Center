
function loginValidasi() {
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("inputEmail").value;
  var phone = document.getElementById("phoneNum").value;
  var contactChoice1 = document.getElementById("contactChoice1");
  var contactChoice2 = document.getElementById("contactChoice2");
  var message = document.getElementById("messageBox").value;

  if (firstName == "") {
      alert("first name can't be empty.");
  }
  else if (lastName == "") {
      alert("last name can't be empty.");
  }
  else if (!IsValidEmail(email)) {
      alert("Invalid email address.");
  }
  else if(!IsValidPhone(phone)){
    alert("Invalid phone number.");    
  }
  else if(!contactChoice1.checked && !contactChoice2.checked){
    alert("please select your Preffered Contact Method.");
  }
  else if(message == ""){
    alert("message can not be empty.");
  }
  else{
    alert("Thank You for contacting us!");
  }
}

function IsValidEmail(email) {
  //Because a + @ + . + c + o + m = 6
  if (email.length <= 6) {
      return false;
  }
  else if (email.indexOf("@") == -1) {
      return false;
  }
  else if(!email.endsWith(".com") && !email.endsWith(".id")){
     return false;
  }

  var parts = email.split("@");
  var dot = parts[1].indexOf(".");
  var len = parts[1].length;
  var dotSplits = parts[1].split(".");
  var dotCount = dotSplits.length - 1;

  //Check whether Dot is present, and that too minimum 1 character after @.
  if (dot == -1 || dot < 2 || dotCount > 2) {
      return false;
  }

  //Check whether Dot is not the last character and dots are not repeated.
  for (var i = 0; i < dotSplits.length; i++) {
      if (dotSplits[i].length == 0) {
          return false;
      }
  }

  return true;
};

function IsValidPhone(phone) {  
    if(!phone.startsWith("+") && !phone.startsWith("0") && phone.length < 10){
        return false;
     }   

     return true;
}