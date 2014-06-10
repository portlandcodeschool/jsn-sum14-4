/**
 * Created with PhpStorm.
 * User: geoffreyunger
 * Date: 6/7/14
 * Time: 12:05 PM
 */

userRegister = (function(){

    var logData = [];
    function userRegister(name,password){
        var user = {};
        function getUser(){
            var userName = name;
            return userName;
        }

        function validate(str){
            var pass = password;
            if(str === pass) return true;
            else return false;
        }

        user.getUser = getUser;
        user.validate = validate;
        user.record = function( message){
            if(message){
                log(this.getUser() + ": " + message);
                return true;
            }
            else return undefined;
        }

        return user;

    }
    function log(message){
        logData.push(message);
    };

    userRegister.getLog = function(username){
        var logs = new String();
        logData.map(function(item){
            var entry = item.split(": ")[1] + "\n";
            if(!username){
                logs += entry;
            }
            else if(item.split(":")[0] == username){
                logs += entry;
            }
        })
        return logs;
    }
return userRegister;

})()
