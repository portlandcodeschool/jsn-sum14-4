
// helpers

function print(msg) {
  console.log(msg);
};

// formats date to 6-10-13 10:43
function formatDate(date) {
  return date.getMonth() + 1 + '-' +
         date.getDate() + '-' +
         date.getFullYear() + ' ' +
         date.getHours() + ':' +
         date.getMinutes();
};

var system = (function() {
  var log = [];

  function getLog(username) {
    print('===========');
    print('System Log:');
    print('===========');

    if (!log.length) return print('No entries.');

    if (username) {
      log.forEach(function() {
        if (username === entry.username) {
          print(formatDate(entry.timestamp) + ' ' +
                entry.username + ': ' + entry.message);
        }
      });
    } else {
      log.forEach(function(entry) {
        print(formatDate(entry.timestamp) + ' ' +
              entry.username + ': ' + entry.message);
      });
    }
  };

  var signup = (function() {
    var username = '';
    var password = '';

    function user(username, password) {
      username = username;
      password = password;

      return {
        getName: function() {
          return username;
        },

        validate: function(str) {
          return password === str;
        },

        record: function(message) {
          if (!message) return;
          log.push({
            timestamp: new Date(),
            username: username,
            message: message
          });
          print(username + ': ' + message);
          return true;
        }
      }
    }

    return user;
  })();

  return {
    signup: signup,
    getLog: getLog
  };

})();

//console.log(system)

function assert(claim, msg) {
  if (!claim) console.error(msg);
};

var user1 = system.signup('wayne', 'abc123');
var user2 = system.signup('garth', '123');

assert(user1.getName() === 'wayne', 'test 1 failed');
assert(user2.getName() === 'garth', 'test 2 failed');
assert(user1.validate('abc123'), 'test 3 failed');
assert(!user2.validate('1234'), 'test 4 failed');
assert(user1.record('party on, garth.'), 'test 5 failed');
assert(user2.record('party on, wayne.'), 'test 6 failed');

console.log(system.getLog());


