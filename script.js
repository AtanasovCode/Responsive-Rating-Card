function rating(sender) {
    let x = sender.value;
    localStorage.setItem("value", x);
}

let y = document.getElementById("your-selection");
y.textContent = localStorage.getItem("value");


document.getElementById("submit-btn").addEventListener("click", myFunction);  

function myFunction() {  
  window.location.href="https://frontendmentor.io/";  
}