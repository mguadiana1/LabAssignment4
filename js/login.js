var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        var usernameInput = document.getElementById('username');
        console.log('from login() usernameInput', usernameInput);
        var passwordInput = document.getElementById('password');
    };
    return Login;
}());
var login = new login();
