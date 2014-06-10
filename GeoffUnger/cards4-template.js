/* Revisit your playing card functions from homework #1.  Repackage them in a Toolkit pattern,
 as methods of a single master object.  You may assign that object to any variable you like,
 but that variable should not appear in the definitions of your methods.

 You'll need to change both your method definitions and their calls to other methods,
 but their logic will remain the same.
 */

//1)

var makeCard = (function () {

    var makeCard = function (id) {
        if ((id < 0) || (id > 51)) return undefined;
        var card = {id: id};

        card.fn = function () {
            console.log("fn called");
        }
        card.checkInput = checkInput;
        card.rank = rank;
        card.suit = suit;
        card.cardID = cardID;
        card.color = color;
        card.cardName = cardName;
        card.precedes = precedes;
        card.sameColor = sameColor;
        card.nextInSuit = nextInSuit;
        card.prevInSuit = prevInSuit;


        return card;
    }

    checkInput = function (val, min, max) {
        if ((typeof val) != "number") return NaN;
        if (val < min) return undefined;
        if (val > max) return undefined;
        return true;
    }

    rank = function () {


        result = Math.ceil(((this.id + 1) / 4));
        return result;
    }

    suit = function () {

        var suit = 0;
        var cardSuits = [];
        for (i = 0; i <= 51; i++) {
            suit++;
            cardSuits[i] = suit;
            if (suit == 4) suit = 0;
        }

        return cardSuits[this.id];
    }

    cardID = function (rank, suit) {
        if (rank == undefined || suit == undefined) return this.id;
        var index = 0;
        for (j = 1; j <= 13; j++) {
            for (k = 1; k <= 4; k++) {
                if ((suit == k) && (rank == j)) return index;
                index++;
            }
        }
    }

    color = function () {

        if ((this.suit() == 1) || (this.suit() == 2)) return "red";
        else return "black";
    }

    cardName = function () {

        var cardSuit = "";
        var cardRank = "";
        var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
        var ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        cardSuit = suits[this.suit() - 1];
        cardRank = ranks[this.rank() - 1];
        if (this.rank() == 13) cardRank = "King";

        return(cardRank + " of " + cardSuit);
    }

    precedes = function (cardObj) {

        if ((cardObj.rank() == 1) && (this.rank() == 13)) return true;
        if (cardObj.rank() == (this.rank() + 1)) return true;
        else return false;
    }

    sameColor = function (cardObj) {


        if (this.color() == cardObj.color()) return true;
        else return false;
    }

    nextInSuit = function () {
        var cardASuit = this.suit();
        var cardARank = this.rank();
        var cardBRank;
        if (cardARank == 13) cardBRank = 1;
        else cardBRank = cardARank + 1;
        result = this.cardID(cardBRank, cardASuit);
        return result;
    }

    prevInSuit = function () {

        var cardASuit = this.suit();
        var cardARank = this.rank();
        var cardBRank;
        if (cardARank == 1) cardBRank = 13;
        else cardBRank = cardARank - 1;
        result = this.cardID(cardBRank, cardASuit);
        return result;
    }
    return makeCard;

})();
// TESTING:
//var makeCard() = cardReader;//change as needed

//b)

function assert(claim, message) {
    if (!claim) console.error(message);
}
assert(makeCard(0).rank() === 1, "Test 1 failed");
assert(makeCard(3).rank() === 1, "Test 2 failed");
assert(makeCard(51).rank() === 13, "Test 3 failed");
assert(makeCard(0).suit() === 1, "Test 4 failed");
assert(makeCard(5).suit() === 2, "Test 5 failed");
assert(makeCard(51).suit() === 4, "Test 6 failed");

assert(makeCard(0).color() === 'red', "Test 10 failed");
assert(makeCard(2).color() === 'black', "Test 11 failed");
assert(makeCard(5).cardName() === 'Two of Diamonds', "Test 12 failed");
assert(makeCard(51).cardName() === 'King of Clubs', "Test 13 failed");
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

// Extra testing!
// These tests check that invalid arguments produce invalid output.
// They may need rewriting for certain error-reporting schemes.
assert(!makeCard(-1), "Test 26 failed");
assert(!makeCard(52), "Test 27 failed");

//c)

assert((makeCard(1).rank === makeCard(1).rank), "Objects are not sharing 'rank' method!");
assert((makeCard(1).suit === makeCard(1).suit), "Objects are not sharing 'suit' method!");
assert((makeCard(1).fn !== makeCard(1).fn), "Fn method is shared but should not be");





