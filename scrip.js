var datas = [
    {
        username: "yosuva",
        password: "1234"
    }
]

function login() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    var check = false
    for (let i of datas) {
        if (username == i.username && password == i.password) {
            check = true;
            break;
        }
    }
    if (check) {
        alert("login sucessfuly")
    } else {
        alert("login failed")
    }
}



