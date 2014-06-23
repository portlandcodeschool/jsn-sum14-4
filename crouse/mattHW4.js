/**
 * Start question is  a visual divider for consul output that separates
 * questions
 * @type {String}
 */
var startQuestion = '\n' + "========================================== " + '\n';
console.log("1)" + startQuestion);

/**
 * Rank names is an array that  stores the various ranks of a 52 card deck
 * @type {Array}
 */
var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
        'Jack','Queen','King'];

/*
Suit names stores the 4 different suits, the 1st cell is empty to adjust for offset
 */
var suitNames = ['','Hearts','Diamonds','Spade','Clubs'];

/**
 * Generates a card object
 * @param  {[type]} id [Pass in a number between 0 and 52 to represent cards]
 * @return {[type]}    [Returns a card object]
 */
var myCard = (function (id) {
	return{
	ID: id,
	myRank: function (){
		var card = this.ID;
	 	return Math.floor(card/4 + 1);
	 },
	mySuit: function (){
		var card = this.ID;
	 	return card%4 +1;
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
 })();

console.log(myCard);

var startQuestion = '\n\n' + "========================================== " + '\n';
console.log("2)" + startQuestion);
