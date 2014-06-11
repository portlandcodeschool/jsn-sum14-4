
var makeCard = (function() {

  function cardFactory(id) {

    if (!isValid(id)) {
      throw new Error('Not a valid card id.');
    }

    return {
      id: id,
      ranks: ranks,
      suits: suits,
      rank: rank,
      suit: suit,
      cardID: cardID,
      color: color,
      name: cardName,
      precedes: precedes,
      sameColor: sameColor,
      nextInSuit: nextInSuit,
      prevInSuit: prevInSuit
    }
  };

  function isValid(num) {
    if (typeof num !== 'number') return false;
    if (!Number.isInteger(num)) return false;
    if (num < 0 || num > 51) return false;
    return true;
  };

  var ranks = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten', 'Jack','Queen','King'];

  var suits = ['Hearts','Diamonds','Spades','Clubs'];

  function rank() {
    return Math.floor(this.id / 4) + 1;
  };

  function suit() {
    return (this.id % 4) + 1;
  };

  function cardID() {
    return this.id;
  };

  function color() {
    return this.suit() < 3 ? 'red' : 'black';
  };

  function cardName() {
    return this.ranks[this.rank() - 1] + ' of ' + this.suits[this.suit() - 1];
  };

  function precedes(cardObj) {
    var diff = cardObj.rank() - this.rank();
    return diff == 1 || diff == -12;
  };

  function sameColor(cardObj) {
    return this.color() === cardObj.color();
  };

  function nextInSuit() {
    var next = this.id + 4;
    if (next > 51) return next - 52;
    return next;
  };

  function prevInSuit() {
    var prev = this.id - 4;
    if (prev < 0) return prev + 52;
    return prev;
  };

  return cardFactory;

})();

// Part b

// TESTING:
function assert (claim, message) {
  if (!claim) console.error(message);
}

assert(makeCard(0).rank() === 1, "Test 1 failed");
assert(makeCard(3).rank() === 1, "Test 2 failed");
assert(makeCard(51).rank() === 13, "Test 3 failed");
assert(makeCard(0).suit() === 1, "Test 4 failed");
assert(makeCard(5).suit() === 2, "Test 5 failed");
assert(makeCard(51).suit() === 4, "Test 6 failed");
assert(makeCard(1).cardID() === 1, "Test 7 failed");
assert(makeCard(51).cardID() === 51, "Test 8 failed");
assert(makeCard(30).cardID() === 30,"Test 9 failed");
assert(makeCard(0).color() === 'red', "Test 10 failed");
assert(makeCard(2).color() === 'black', "Test 11 failed");
assert(makeCard(5).name() === 'Two of Diamonds', "Test 12 failed");
assert(makeCard(51).name() === 'King of Clubs', "Test 13 failed");
assert(!makeCard(0).precedes(makeCard(1)), "Test 14 failed");
assert(makeCard(0).precedes(makeCard(5)), "Test 15 failed");
assert(makeCard(51).precedes(makeCard(0)), "Test 16 failed");
assert(makeCard(50).precedes(makeCard(2)), "Test 17 failed");
assert(makeCard(0).sameColor(makeCard(1)), "Test 18 failed");
assert(!makeCard(1).sameColor(makeCard(2)), "Test 19 failed");
assert(makeCard(0).nextInSuit() === 4, "Test 20 failed");
assert(makeCard(51).nextInSuit() === 3, "Test 21 failed");
assert(makeCard(48).nextInSuit() === 0, "Test 22 failed");
assert(makeCard(0).prevInSuit() === 48, "Test 23 failed");
assert(makeCard(3).prevInSuit() === 51, "Test 24 failed");
assert(makeCard(5).prevInSuit() === 1, "Test 25 failed");
