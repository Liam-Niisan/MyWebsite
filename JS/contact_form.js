function validation() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    
     if(name.length <5) {
        alert('Please provide your name.')
        return false;
     }

     if(message.length <10) {
        alert('Please provide a message.')
        return false;
     }

     if(email.indexOf("@") == -1 || email.length < 6) {
         alert('Please provide a valid email address.')
         return false;
     }
     alert("Form Submitted Successfully!")
     return true;
}