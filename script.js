document.getElementById("exploreBtn").addEventListener("click", function () {
  alert("Exploring the Web3 space...");
});

let q = document.getElementById("questions").innerHTML;
let i = 0;
let questions = ["What is Web3?",
    "What is the difference between Web2 and Web3?",
    "What is a Blockchain?",
    "What is a Smart Contract?",
    "What is a Decentralized Finance?",
    "What is a Non-Fungible Token?"
];

setInterval(() => {
  document.getElementById("questions").innerHTML = questions[i++];
  if (i == questions.length) i = 0;
}, 2000);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("more-btn");

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