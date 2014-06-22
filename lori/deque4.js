var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
        'Jack','Queen','King'];
var suitNames = ['','Hearts','Diamonds','Spade','Clubs'];
 
 function cardFactory(id) {
        return{
        ID: id,
        myRank: function (){
                var card = this.ID;
                return Math.floor(card/4 + 1);
         },
        mySuit: function (){
                var card = this.ID;
                return (card%4 + 1);
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
                string = (rankNames[this.myRank()] + " of "+ (suitNames[this.mySuit()]));
                return (string);
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
 
//console.log(myCard);///////////////////////////////////////////////////////function makeDeque(values) {
function makeDeque(values) {
        array = values.slice();
        delt=[];
        
                
                function top(){
                        console.log("Top Card is: ", '\t\t\t', array[array.length-1].myName());
                }
                function bottom(){
                        console.log("Bottom Card is: ", '\t\t', array[array.length-1].myName());
                }
                function pop(){
                        var temp = array.pop();
                        console.log("Removed the top card: ",'\t', temp.myName());
                        if( temp !== undefined)
                            delt.push(temp);
                        return temp;
 
                }
                function push(){
                        if ( temp !== undefined)
                        {
                                array.push(val);
                                console.log("Added ", val , " to the deque");
                        }
 
 
                }
                function shift(){
                        var temp = array.shift();
                        console.log("Removed the bottom card: ",'\t', temp.myName());
                        if( temp !== undefined)
                                delt.push(temp);
                        return temp;
                }
                function unshift(){
                        this.array.unshift(val);
 
                }
                function cut(){
                        var tempTop = array.slice();
                        var tempBot = array.slice();
                        this.array = [];
                        this.array = tempTop.concat(tempBot);
                }
                function map(sadPuppies)  {
                        return array.map(sadPuppies);
                }
                function safeMap(sadPuppies) {
                return array.slice().map(sadPuppies); // do map on copy of array
                }
                function showDelt() {
                    console.log(delt[delt.length-1]);
                }
                function showArray() {
                    console.log(array.length);
                }

                deque = {
                    top:top,
                    bottom: bottom,
                    pop: pop,
                    push: push,
                    shift: shift,
                    unsift: unshift,
                    cut: cut,
                    map: map,
                    safeMap: safeMap,
                    showArray: showArray,
                    showDelt: showDelt
                };
                return deque;

        }
 

 
 
var myArray=[];
 
(function() {
        for(var i=0; i<52; ++i){
                myArray.push(i);
        }
})();
 
function  makeSomeCards(array){
        var myArray= [];
        for (var i =0; i < array.length; i++){
                 myArray[i] = cardFactory(array[i]);
        }
        return myArray;
}
 
function makeCard(id){
        var card = cardFactory(id);
        return card;
}
 
 
var someCards;
 
 
 
someCards = makeSomeCards(myArray);
//console.log(someCards);
 
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
deckOfCards.cut(10);
deckOfCards.top();
deckOfCards.bottom();
deckOfCards.showArray();

function duplicateAces(card,i,array) {
   array.push(cardFactory(0));//... push one extra copy
   return card;
}

var deck = makeDeque(someCards);
deck.safeMap(duplicateAces); 
deck.top();


