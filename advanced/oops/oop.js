const user = {
    username: "Prithul Paul",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log(`Username is ${this.username}`);
        console.log(this);
    }
}
// console.log(user.getUserDetails());

function userDetails(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;
}

const userOne = new userDetails("Prithul Paul", 6, true);
const userTwo = new userDetails("Pradip Paul", 16, false);
console.log(userOne);
console.log(userTwo);