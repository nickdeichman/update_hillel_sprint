function myFunction() {
    var x = document.getElementById("header");
    if (x.className === "header container") {
        x.className += " responsive";
    } else {
        x.className = "header container";
    }
}