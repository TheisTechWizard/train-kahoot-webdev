if(window.location.href.includes("index.html")) {
    loginBtn = document.querySelector(".loginbtn")
    loginBtn.addEventListener("click", () => {
        username = document.querySelector("#username").value
        password = document.querySelector("#password").value
        sessionStorage.setItem("username", username)
    
        
        if (username == "" || password == "") {
            alert("Please input username and password")
        } else {
            window.location = "1.html"
        }
    });
}

if(window.location.href.includes("1.html")) {
    hostGameBtn = document.querySelector(".hostGameBtn")
    joinGameBtn = document.querySelector(".joinGameBtn")
    hostGameBtn.addEventListener("click" , hostJoinGame)
    joinGameBtn.addEventListener("click" , hostJoinGame)
    
    function hostJoinGame() {
        window.location = "2.html"
    }
}
