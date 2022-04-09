function rating(sender) {
    let x = sender.value;
    localStorage.setItem("value", x);
}


  let y = document.getElementById("your-selection");
  y.textContent = localStorage.getItem("value");

