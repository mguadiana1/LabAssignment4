
class Login {


    constructor () {

    }

    login() {
       const usernameInput = document.getElementById ('username');
       console.log ('from login() usernameInput', usernameInput);
       const passwordInput = document.getElementById ('password');

       let username = usernameInput.Value;
       let password = passwordInput.Value;



       console.log('username', username);
       username = usernameInput.value;
       console.log('password', password);
        if (username === 'mguadiana' && password === 'abc123') {
            this.goToHome ();
        } else {
            this.displayError();
        }
        displayError(){
            
        }


    }
}
goToHome () {
    window.location.href = 'index.html'
}


}

const login = new Login();