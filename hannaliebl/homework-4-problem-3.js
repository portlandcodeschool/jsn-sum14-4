//part a:

function makeUser (username, password) {
    var user = {};
    user.getname = function getName () {
        return username;
    }
    user.validate = function validate(str) {
        if (str === password) {
            return true;
        } else {
            return false;
        }
    }
    return user;
}

user1 = makeUser("hanna", "password");
user1.validate("pass"); //false
user1.validate("password"); //true
user1.getname(); //"hanna"
user1.password; //undefined (private)