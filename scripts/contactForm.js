var form = document.getElementById("contactForm");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("messageBox");
var submitButton = document.getElementById("submitButton");

var sending = false;


form.addEventListener("submit", function (event) {

    event.preventDefault();

    if(!sending){
        SendMessage();
    }

});

function MessageSent(){
    messageInput.value = "Thank you";
    emailInput.value = "Message Sent";

    setTimeout(function(){

        messageInput.className = "";
        emailInput.className = "";

        submitButton.innerHTML = "Submit";

        messageInput.value = "";
        emailInput.value = "";

        sending = false;
    }, 3000);
}

function MessageSending(){
    sending = true;

    messageInput.className = "sending";
    emailInput.className = "sending";

    submitButton.innerHTML = "Sending...";

    messageInput.value = "Sending Message";
    emailInput.value = "Please Wait";
}

function SendMessage(){
    var http = new XMLHttpRequest();
    var url = "https://formspree.io/contact@matthewmeade.me";

    var email = emailInput.value;
    var message = messageInput.value;

    var params = "Email=" + email + "&Message=" + message;
    http.open("POST", url, true);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {
        if(http.readyState == 4) {
            MessageSent();
        }
    };

    MessageSending();
    http.send(params);

}