let f=()=>{
    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("logout-button").onclick = function () {
    location.href = "../Login/login.html";
};

}
// var app = angular.module("myApp", []);
// app.controller("ItemsController", function($scope) {
//     $scope.firstName = "John";
//     $scope.lastName = "Doe";
// });
