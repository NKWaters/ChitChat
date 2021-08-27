function addUser() {
    username = document.getElementById("username").nodeValue;
    localStorage.setItem("Username", username);
    window.location = "chitchatroom.html";
}