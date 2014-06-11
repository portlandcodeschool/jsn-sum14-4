
// Part a

var makeDeque = (function() {
  var queue, stash = [];

  function dequeFactory(values) {
    queue = values.slice();

    return {
      // allows access to the queue array from dequeInstance.queue
      get queue() {
        return queue;
      },
      top: top,
      bottom: bottom,
      push: push,
      pop: pop,
      shift: shift,
      unshift: unshift,
      cut: cut,
      sort: sort,
      map: map,
      shuffle: shuffle
    }
  };

  function top() {
    return queue[0];
  };

  function bottom() {
    return queue[queue.length - 1];
  };

  function canPush(val) {
    var placeInStash;
    stash.forEach(function(value, i) {
      // check for primitives and objects
      if (typeof value === 'object' && equal(val, value)) {
        placeInStash = i;
      } else if (val === value) {
        placeInStash = i;
      }
    });
    // not in stash, must be in the queue already or was not in the
    // original deque
    if (placeInStash === undefined) return false;
    // remove val from the stash
    stash.splice(placeInStash , 1);
    return true;
  };

  function push(val) {
    if (canPush(val)) {
      return queue.push(val);
    }
    throw new Error('Item is already in the deque or is not part of the original deque');
  };

  function pop() {
    var lastItem = queue.pop();
    if (lastItem) stash.push(lastItem);
    return lastItem;
  };

  function shift() {
    var firstItem = queue.shift();
    if (firstItem) stash.push(firstItem);
    return firstItem;
  };

  function unshift(val) {
    if (canPush(val)) {
      return queue.unshift(val);
    }
    throw new Error('Item is already in the deque or is not part of the original deque');
  };

  function cut(offset) {
    var offset = offset || 0,
        size = queue.length,
        middle = Math.floor(size / 2),
        top;

    // checks if the offset is a number and an integer
    if (!Number.isInteger(offset)) throw new Error('Invalid offset');
    // the offset is greater than half
    if (Math.abs(offset) > (size / 2)) throw new Error('Invalid offset');

    // no offset and the queue length is odd, split just above the middle
    if (!offset && !(size % 2 === 0)) offset++

    top = queue.splice(0, middle + offset);
    return queue = queue.concat(top);
  };

  function sort(fn) {
    return queue.sort(fn);
  };

  function map(fn) {
    if (fn.length === 3) throw new Error("Sorry, you don't have access to the array.");
    return queue.map(fn);
  };

  function shuffle(array) {
    var m = queue.length, t, i;

    while(m) {
      i = Math.floor(Math.random() * m--);
      t = queue[m];
      queue[m] = queue[i];
      queue[i] = t;
    }

    return queue;
  };

  return dequeFactory;

})();

// Testing

function assert(claim, msg) {
  if (!claim) console.error(msg);
}

// Part b
// you can modify the deque through the map function's array argument

assert(deque.queue.length === 8, 'Test 1 failed');

// You can protect the map method by checking the length of the anonymous
// function, which represents how many arguments are being passed into the
// function. If the length is 3, someone might be trying to tamper with the
// orginal array. The map method above has been modified to lock down access.
// The following code throw an error.

var array = [1,2,3,4];

var deque = makeDeque(array);
deque.map(function(val, i, array) {
  return array.push(1);
});


