var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        var usernameInput = document.getElementById('username');
        console.log('from login() usernameInput', usernameInput);
        var passwordInput = document.getElementById('password');
        var username = usernameInput.Value;
        var password = passwordInput.Value;
        console.log('username', username);
        username = usernameInput.value;
        console.log('password', password);
        if (username === 'mguadiana' && password === 'abc123') {
            this.goToHome();
        }
        else {
            this.displayError();
        }
        displayError();
        {
        }
    };
    return Login;
}());
goToHome();
{
    window.location.href = 'index.html';
}
var login = new Login();
