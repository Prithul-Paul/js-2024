function setUserName(username){
    this.username = username;
    console.log(this.username);
}

function createUser(username, email, password){
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const user = new createUser("Prithul", "ptithulpaul@gmail.com", "123");
console.log(user);