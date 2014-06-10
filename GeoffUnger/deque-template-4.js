//-------
// Part a): build a deque factory
function makeDeque(values) {

    var deque = {};
    deque.removedCards = [];
    var data = new Array();

    if (values != null) {
        for (i = 0; i < values.length; i++) {
            data[i] = values[i];
        }
    }


    deque.top = function () {
        return data[(data.length - 1)];
    };
    deque.bottom = function () {
        return data[0];
    };
    deque.pop = function () {
        this.removedCards.push(data[data.length - 1]);
        return data.pop();

    };
    deque.push = function (val) {
        if (this.checkRemoved(val)) {
            data.push(val);
            this.removedCards.splice(this.removedCards.indexOf(val), 1);
        }
        else console.log("That item was never removed from the deque!");
    };

    deque.shift = function () {
        this.removedCards.push(data[0]);
        return data.shift();
    };
    deque.unshift = function (val) {

        if (this.checkRemoved(val)) {
            data.unshift(val);
            this.removedCards.splice(this.removedCards.indexOf(val), 1);
        }
        else console.log("That item was never removed from the deque!");
    };
    deque.cut = function (offset) {
        var cutDeque = [];
        var center = Math.ceil(data.length / 2);
        offset = offset || 0;
        center += offset;
        cutDeque = (data.slice(center, data.length));
        frontHalf = (data.slice(0, center));
        cutDeque = cutDeque.concat(frontHalf);
        data = cutDeque;

    };
    deque.map = function (convertValFn) {
        var returnMap = new Array();
        for(i = 0; i < data.length; i++){
            returnMap[i] = data[i];
        }
            return(returnMap.map(convertValFn));
        };

    deque.sort = function (compareValsFn) {
        data.sort(compareValsFn);
    };
    deque.shuffle1 = function () {
        this.sort(function (item1, item2) {
            var rand = Math.random();
            if (rand > 0.6) return 1;
            else if (rand > 0.3) return 0;
            else return -1;
        });
    }
    deque.shuffle2 = function () {

        var m = data.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = data[m];
            data[m] = data[i];
            data[i] = t;
        }
    }

    deque.checkRemoved = function (item) {
        if (this.removedCards.indexOf(item) > -1) return true;
        else return false;
    }

    deque.logOut = function (functionName) {
        for (var i in data) {
            console.log(data[i].id + " " + data[i].cardName());
        }


    }
    return deque;
};

//Part b) has been deleted from below. Reinstate from homework 3 if needed


var someCards2 = new Array();
for (var i = 0; i < 52; i++) {
    someCards2[i] = makeCard(i);
}
var deckOfCards2 = makeDeque(someCards2);
//deckOfCards2.shuffle2();
deckOfCards2.map(function (item) {
    //console.log(item.id); Commenting out to free up console space
});



deckOfCards2.map(function(item, index, arr){ //HW 2) b) Try to slip another ace into the deck array - works!
    var secretAce = makeCard(0);
    if(index == 0){
        arr.push(secretAce);
    }
});

deckOfCards2.map(function (item) {
    console.log(item.cardName()); //Commenting out for now to free up console space
});


