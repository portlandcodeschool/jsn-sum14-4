/*
Used to separate the questions in the  console log
 */
var startQuestion = '\n' + "========================================== " + '\n';
console.log("1)" + startQuestion);

/*
Array rank names and array suit names store the ranks and suits needed to produce
 52  separate cards in a standard card deck
 */
var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
        'Jack','Queen','King'];
var suitNames = ['','Hearts','Diamonds','Spade','Clubs'];

/**
 * Card factory produces a card object with explicitly defined  functions
 * @param  {[type]} id [Pass in an integer between 0 and 52 to represent standard deck of cards]
 * @return {[type]}    [Returns a card object]
 */
function cardFactory (id) {
	return{
	ID: id,
	myRank: function (){
		var card = this.ID;
	 	return Math.floor(card/4 + 1);
	 },
	mySuit: function (){
		var card = this.ID;
	 	return card % 4 + 1;
	},
	myCardId: function (){
		return (rank-1) * 4 + (suit -1);
	},
	myColor: function (){
			 var theSuit = this.mySuit();
		return (theSuit <3)? "red":"black";
	},
	myName: function (){
		var string = "";
		string = (rankNames[this.myRank()] + " of "+ suitNames[this.mySuit()]);
		return string;
	},
	myPrecedes: function (){
		var diff = this.myRank() - CardB.myRank();
		if(diff === 0){ return false;}

		else { return true;}
	},
	mySameColor: function (){
		if(this.myColor() === CardB.myColor()){
			return true;
		}
		else{
			return false;
		}
	},
	myNextInSuit: function (){
		nextCard = cardA+4;
	    if (nextCard>51) nextCard-=52;
	    return nextCard;
	},
	myPrevInSuit: function (){
		prevCard = cardB-4;
	    if (prevCard<0) prevCard+=52;
	    return prevCard;
	}
 	};
 }

/*
Separator for question 2
 */
var startQuestion = '\n\n' + "========================================== " + '\n';
console.log("2)" + startQuestion);


/**
 * Make deck utilizes the card factory to produce a deck of cards with standard functions such as pop push cut etc.
 * @param  {[type]} values [Pass in an array of 52 cards]
 * @return {[type]}        [Returns a deck  of 52 cards]
 */
function makeDeque(values) {
	var array =values.slice(0);
	var delt=[];

		function top (){
			console.log("Top Card is: ", '\t\t\t', array[array.length -1].myName());
		}

		function bottom(){
			console.log("Bottom Card is: ", '\t\t', array[0].myName());
		}
		function pop (){
			var temp = array.pop();
			console.log("Removed the top card: ",'\t', temp.myName());
			if( temp !== undefined){
				delt.push(temp);
			}

		}
		function push (){
			if ( temp !== undefined)
			{
				array.push(val);
				console.log("Added ", val , " to the deque");
			}


		}
		function shift (){
			var temp = array.shift();
			console.log("Removed the bottom card: ",'\t', temp.myName());
			if( temp !== undefined)
				delt.push(temp);
			return temp;
		}

		function unshift(){
			array.unshift(val);

		}

		function cut(offset){
			var tempTop = array.slice(offset);
			var tempBot = array.slice(0, offset);
			array = [];
			array = tempTop.concat(tempBot);
		}

		function showDelt(){
			console.log('\n', "card Dealt: ", delt[delt.length -1].myName());
		}

		function arrayLength(){
			console.log("total deck length: ", array.length);
		}
		// naive map function, from HW3:
		function exploitableMap(convertFn) {
			return array.map(convertFn);
		}

		function safeMap(convertFn){
			return array.slice().map(convertFn);
		}
		//Actual card object returned with references to functions
		return {
			top: top,
			bottom: bottom,
			pop: pop,
			push: push,
			shift: shift,
			unshift: unshift,
			cut: cut,
			showDelt: showDelt,
			arrayLength: arrayLength,
			map: exploitableMap,
			safeMap: safeMap,
		};
}



var myArray = [];
/**
 * Standard if he to fill the variable my array with 52 integers
 * @return {[type]} [Returns an array with 52  integers]
 */
(function() {
	for(var i=0; i<52; ++i){
		myArray.push(i);
	}
})();

/**
 * Calls the make card factory for the number of array elements passed in
 * @param  {[type]} array [ array filled with integers]
 * @return {[type]}       [Returns an array of 52 cards objects]
 */
function  makeSomeCards(array){
	var myArray= [];
	for (var i =0; i < array.length; i++){
		 myArray[i] = cardFactory(array[i]);
	}
	return myArray;
}

/**
 * Function to generate one card based off of one ID passed in
 * @param  {[type]} id [An integer to represent a card between 0 and 52]
 * @return {[type]}    [Returns a single card object]
 */
function makeCard(id){
	var card = cardFactory(id);
	return card;
}


var someCards;


/*
Make 52 cards in store in somecards
 */
someCards = makeSomeCards(myArray);

var deckOfNames=[];

(function(){
	for( var i =0; i < someCards.length; i++){

	deckOfNames.push(someCards[i]);
	}
})();





//-------
// Part b): build a deque instance:
var deckOfCards = makeDeque(someCards);

deckOfCards.top();
deckOfCards.bottom();
deckOfCards.pop();
deckOfCards.top();
deckOfCards.showDelt();
deckOfCards.shift();

deckOfCards.showDelt();
deckOfCards.top();
console.log("\n-----------------Cutting the Deck ---------------");
deckOfCards.cut(20);
deckOfCards.top();
deckOfCards.bottom();
deckOfCards.arrayLength();


/**
 * Exploit the deck factory map function by injecting a function that adds 4 aces to the top of the deck
 * this is  possible because the map function of deck factory will take in a another function as a parameter
 *  that function can do pretty much whatever it wants to the available data array.
 * @param  {[type]} card  [Not used here]
 * @param  {[type]} i     [Not used here]
 * @param  {[type]} array [Passing an array Of cards from  the deck object]
 * @return {[type]}       [Returns a card]
 */
function duplicateAces(card,i,array) {
	array.push(cardFactory(0));//... push one extra copy
	return card;
}

/*
Generate a new deck and put aces on the top
This section should produce an ace on top of the deck
 */
var deck2 = makeDeque(someCards);
deck2.map(duplicateAces);
deck2.top();

/*
Using a safer map function that protects  the array data through creating a copy of the cards instead of
 changing the original array
 */
var deck3 = makeDeque(someCards);
console.log("Doing Safe Map");
deck3.safeMap(duplicateAces);
deck3.top();
