//-------
// Part a): build a deque factory
function makeDeque(cardArray) {
  var newDeque = {}, array = [], removed = [], i = 0;
  for ( i; i < cardArray.length; i++) { array[i] = cardArray[i]; }
      
  newDeque.top = function () {
    return array[0];
  };
  newDeque.bottom = function () {
    return array[(array.length - 1)];
  };

  newDeque.pop = function () {
    removed.push(array[array.length-1]);
    return array.pop();
  };
  newDeque.push = function (val) {
    if (!this.removedCard(val)) {
      return false;
    }
    array.push(val);
      return;
  };

  newDeque.shift = function () {
    removed.push(array[0]);
    return array.shift();
  };
  newDeque.unshift = function (val) {
    if (!this.removedCard(val)) {
      return false;
    }
    array.unshift(val);
      return;
  };

  newDeque.cut = function (offset) {
    var newFirst = [], newSecond = [], newArray = [];
    if (!offset) { offset = 0; }
    offset = Math.floor((array.length)/2) - offset;
    newFirst = array.slice(offset);
    newSecond = array.slice(0, offset); 
    array = newArray.concat(newFirst, newSecond);
  };

  newDeque.map = function (convertValFn) {
    if(convertValFn.length > 2) {
      console.log('Hands off the array!');
      return false;
    }
    return array.map(convertValFn);
  };

  newDeque.sort = function (compareValsFn) {
    array.sort(compareValsFn);
  };

  newDeque.shuffle = function() {
    array = array.sort(function(a,b) {return (0.5 - Math.random());});
  }

  newDeque.FYshuffle = function() {
    var m = array.length, t, i;

    while(m) {
      i = Math.floor(Math.random() * m--);
      
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  newDeque.removedCard = function(card) {
    if (removed.indexOf(card) == -1) {
      return false;
    } else {
      delete removed[removed.indexOf(card)];
      return true;
    }
  }

    return newDeque;
}
// Simple version (no error-detection)

// function()--> possible return values

var makeCard = (function() {

  function cardFactory (idNum) {
    var newCard = { };
    if(!inRange(idNum, 0, 51)) { return false; }
    newCard.idNum = idNum;
    newCard.rank = rank;
    newCard.suit = suit;
    newCard.color = color;
    newCard.cardID = cardID;
    newCard.cardName = cardName;
    newCard.precedes = precedes;
    newCard.sameColor = sameColor;
    newCard.nextInSuit = nextInSuit;
    newCard.prevInSuit = prevInSuit;
    newCard.inRange = inRange;
    return newCard;
  } 

  function inRange (number, min, max) {
    if (typeof (number) !== "number") {
      console.error('validation error! "' + number + '" is not a number');
      return NaN;
    } else if ((number <= max) && (number >= min)) {
        return true;
    } else {
      console.error('validation error! "' + number + '" is outside the given range');
      return undefined;
    }
  }
  

  rank = function() { // --> 1..13
    return (Math.floor(this.idNum/4) + 1);
  }
  suit = function(card) { // --> 1..4
    return ((this.idNum) % 4) + 1;
  }
  cardID = function() { // --> 0..51
    return this.idNum;
  }
  color = function(card) { // -->"red","black"
    if (this.suit() < 3) {
        return "red";
    } else {
        return "black";
    }
  }
  cardName = function() { // --> string
    var nameString = "";
    switch (this.rank()) {
      case 1:
        nameString = nameString.concat("Ace");
        break;
      case 2:
        nameString = nameString.concat("Two");
        break;
      case 3:
        nameString = nameString.concat("Three");
        break;
      case 4:
        nameString = nameString.concat("Four");
        break;
      case 5:
        nameString = nameString.concat("Five");
        break;
      case 6:
        nameString = nameString.concat("Six");
        break;
      case 7:
        nameString = nameString.concat("Seven");
        break;
      case 8:
        nameString = nameString.concat("Eight");
        break;
      case 9:
        nameString = nameString.concat("Nine");
        break;
      case 10:
        nameString = nameString.concat("Ten");
        break;
      case 11:
        nameString = nameString.concat("Jack");
        break;
      case 12:
        nameString = nameString.concat("Queen");
        break;
      case 13:
        nameString = nameString.concat("King");
        break;
    }
    nameString = nameString.concat(" of ");
    switch (this.suit()) {
      case 1:
        nameString = nameString.concat("Hearts");
        break;
      case 2:
        nameString = nameString.concat("Diamonds");
        break;
      case 3:
        nameString = nameString.concat("Spades");
        break;
      case 4:
        nameString = nameString.concat("Clubs");
      break;
    }
    return nameString;
  }
  precedes = function(cardB) { //-->false,true
   if (this.inRange(cardB.cardID(), 0, 51)) {
      if (cardB.rank() - this.rank()    ===    1) {
        return true;
      } else if ((cardB.rank() == 1) && (this.rank() == 13)) {
        return true;
      } else {
        return false;
      }
   } else {
       return;
   }
  }
  sameColor = function(cardB) { //-->false,true
    if (this.inRange(cardB.cardID(), 0, 51)) {
      if (cardB.color() === this.color()) {
        return true;
      } else {
        return false;
      }
   } else {
     return;
   }
  }
  nextInSuit = function() {//--> 0..51
    if (this.idNum< 48) {
      return (this.idNum + 4);
    } else {
      return (this.idNum + 4 - 52);
    }
  }
  prevInSuit = function() {//--> 0..51
    if (this.number > 3) {
      return (this.idNum - 4);
    } else {
      return (this.idNum - 4 + 52);
    }
  }

  return cardFactory;

})()

/*
var x = makeCard(18);
console.log(x.rank());
console.log(x.suit());
console.log(x.color());
console.log(x.cardID());
console.log(x.cardName());
var y = makeCard(44);
console.log(y.rank());
console.log(y.suit());
console.log(y.color());
console.log(y.cardID());
console.log(y.cardName());
console.log(y.sameColor(x));
*/

var someCards = []; 
for ( var i = 0; i < 52; i++ ) {
  someCards.push(makeCard(i));
}

var otherCards = [];
for ( var i = 0; i < 10; i++) {
  otherCards.push(makeCard(i));
}
var deckOfCards = makeDeque (someCards);
var otherDeck = makeDeque(otherCards);
deckOfCards.sort (function(a,b) {return (b.number - a.number);});
//deckOfCards.array[1].color = 'blue';
//console.log(deckOfCards.array[1]);
deckOfCards.cut(1);
deckOfCards.sort (function(a,b) {
  if(a.cardName() < b.cardName()) {
    return -1;
  }
  if (b.cardName() < a.cardName()) {
    return 1;
  } else {
    return 0;
  }
});

deckOfCards.map(function(x,y,z) {z.push(makeCard(1))});// will add an extra ace
deckOfCards.sort();
for (var i = 0; i < 52; i++) { console.log(deckOfCards.pop()) }// will show all cards in the array, including the extra ace
