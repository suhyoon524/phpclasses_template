function init() {
   if (arguments.callee.done === true) return;
  arguments.callee.done = true;
  if (_timer) clearInterval(_timer);
  
  var form = document.querySelector("#loginForm");
  form.addEventListner('submit', validateForm);
};

function validateForm(event) {
  var username = document.querySelector"(#username").value;
  var errorDiv = document.getElementById("errorDiv");
  errorDiv.innerHTML = "";
  console.log("username is " + username);
  if (username == "") {
    errorDiv.innerHTML += "Username is not good";
    event.preventDefault();
  }
}      
     
