// Automatic color change in the background of the body
var x = document.body;
var color = ["#6fb3b8", "#badfe7"];
setInterval(function() {
for(let y = 0; y < 4; y++){
x.style.backgroundColor = color[Math.floor(Math.random() * 3)];  
}
}, 1000) ;


function validate() {
    var name = document.forms["viewer"]["name"].value;
    var email = document.forms["viewer"]["email"].value;
    if (name == "") {
        alert("Please provide your name!");
        
    }
    else if (email == "") {
        alert("Please provide your Email!");
    }

    else {
        alert("Thank You")
    }      
}        