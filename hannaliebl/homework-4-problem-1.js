var makeCard = (function () {
    function factory (id) {
        return {
            id: id,
            isValid: isValid,
            rank: rank,
            suit: suit,
            color: color,
            cardName: cardName,
            precedes: precedes,
            sameColor: sameColor,
            nextInSuit: nextInSuit,
            prevInSuit: prevInSuit
        };
    }
    isValid = function (num, low, high) {
        if ((typeof num) != "number")
            return NaN;
        if (!Number.isInteger(num))
            return NaN;
        if (num < low || num > high)
            return NaN;
        return true;
    }
    rank = function () {
        return this.isValid(this.id, 0, 51) && Math.floor(this.id / 4) + 1;
    }
    suit = function () {
       return this.isValid(this.id, 0, 51) && (this.id % 4) + 1;
    }
    color = function () {
        var suit = this.suit();
        if (isNaN(suit))
            return NaN;
        if (suit < 3) {
            return "red";
        }
        if (suit > 2 && suit < 5) {
            return "black";
        }
    }
    cardName = function () {
        var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
        var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];
        var rank = this.rank();
        var suit = this.suit();
        return rank && suit && (rankNames[rank]+' of '+suitNames[suit]);
    }
    precedes = function (testCard) {
        var diff = (testCard.rank() - this.rank());
        if (isNaN(diff))
            return NaN;
        if (diff > 1 && diff < 13) {
            return true;
        } else {
            return false;
        }
    }
    sameColor = function(testCard) {
        var colorA = this.color();
        var colorB = testCard.color();
        if (Number.isNaN(colorA) || Number.isNaN(colorB))
            return NaN;
        return colorA == colorB;
    }
    nextInSuit = function () {
        var nextCardId = this.isValid(this.id, 0, 51) && this.id + 4;
        if (nextCardId > 51) nextCardId -= 52;
        return nextCardId;
    }
    prevInSuit = function () {
        var prevCardId = this.isValid(this.id, 0, 51) && this.id - 4;
        if (prevCardId < 0) prevCardId += 52;
        return prevCardId;
    }
    return factory;
})();

var card1 = makeCard(1);
card1.rank();
card1.suit();
card1.color();
card1.cardName();
card1.precedes(card50);
card1.sameColor(card50);
card1.nextInSuit();
card1.prevInSuit();

var card50 = makeCard(50);
card50.rank();
card50.suit();
card50.color();
card50.cardName();
card50.precedes(card1);
card50.sameColor(card1);
card50.nextInSuit();
card50.prevInSuit();


//ask re: this and other module patterns, what is best, etc.
//trade off is that you have many copies of each function (per object)
var makeCard = (function () {
    function factory(id) {
        return {
            id: id,
            rank: function rank() {
                return Math.floor(this.id / 4) + 1;
            },
            suit: function suit() {
                return (this.id % 4) + 1;
            }
        };
    }
    return factory;
}());