//0 ace of hearts 1 ace of diamonds 2 ace of spades 3 ace of clubs 
//4 two of hearts 5 two of diamonds 6 two of spades 7 two of clubs 
//8 three of hearts 9 three of diamonds 10 three of spades 11 three of clubs
//12 four of hearts 13 four of diamonds 14 four of spades 15 four of clubs
//16 five of hearts 17 five of diamonds 18 five of spades 19 five of clubs
//20 six of hearts 21 six of diamonds 22 six of spades 23 six of clubs
//24 seven of hearts 25 seven of diamonds 26 seven of spades 27 seven of clubs 
//28 eight of hearts 29 eight of diamonds 30 eight of spades 31 eight of clubs
//32 nine of hearts 33 nine of diamonds 34 nine of spades 35 nine of clubs 
//36 ten of hearts 37 ten of diamonds 38 ten of spades 39 ten of clubs
//40 jack of hearts 41 jack of diamonds 42 jack of spades 43 jack of clubs
//44 queen of hearts 45 queen of diamonds 46 queen of spades 47 queen of clubs
//48 king of hearts 49 king of diamonds 50 king of spades 51 king of clubs

var instance10 = (function(id){
      return{
          id:id,
          rankName:['', 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'],
          suitName:['', 'Hearts', 'Diamonds', 'Spade', 'Clubs'],
          fuckShitUp: function(number, min, max){
            if (typeof number !== 'number'){return NaN;} 
            else if (number<=max && number>=min){return true;}
            else {return false;}},
          cardId:function(){return this.id;},
          rank:function() {
            var card = this.id;
            return makeCard.fuckShitUp(card,0,51) && Math.floor(card/4)+1;},
          suit:function() {
            var card = this.id;
            return makeCard.fuckShitUp(card,0,51) && (card%4)+1},
          color:function() {
            var theSuit=this.suit();
            if (theSuit<3){return "red";}
            return "black";},
          cardName:function() {
            var rank = this.rank();
            var suit = this.suit();
            return (makeCard.rankName[rank]+" of "+makeCard.suitName[suit]);},
      }  
})(10); 
                                                                                                      
// function makeCard(id){
//     var newCard = {id:id}
   
//     newCard.cardId=makeCard.cardId;
//     newCard.rank=makeCard.rank;
//     newCard.suit=makeCard.suit;
//     newCard.color=makeCard.color;
//     newCard.cardName=makeCard.cardName;
//     newCard.precedes=makeCard.precedes;
//     newCard.sameColor=makeCard.sameColor;
//     newCard.nextInSuit=makeCard.nextInSuit;
//     newCard.fuckShitUp=makeCard.fuckShitUp;
//     newCard.rankName=makeCard.rankName;
//     newCard.suitName=makeCard.suitName;
    
//     return newCard;
// };

    makeCard.rankName = ['', 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    //rank is 1-13
    makeCard.suitName = ['', 'Hearts', 'Diamonds', 'Spade', 'Clubs'];
    //suit is 1-4, 1 and 2 are red, 3 and 4 are black

    makeCard.fuckShitUp = function(number, min, max){
      if (typeof number !== 'number'){return NaN;} 
      else if (number<=max && number>=min){return true;}
      else {return false;}
    };

    makeCard.cardId = function(){
        return this.id;
    };
    
	makeCard.rank = function() {
        var card = this.id;
        return makeCard.fuckShitUp(card,0,51) &&
            Math.floor(card/4)+1;
	};

	makeCard.suit = function() {
        var card = this.id;
        return makeCard.fuckShitUp(card,0,51) &&
           (card%4)+1
    };

	makeCard.color = function() {
       var theSuit=this.suit();
          if (theSuit<3){return "red";}
          return "black";
	};

	makeCard.cardName = function() {
        var rank = this.rank();
        var suit = this.suit();
        return (makeCard.rankName[rank]+" of "+makeCard.suitName[suit]);

	};

	makeCard.precedes = function(cardB) {
      var cardA=this.id
      if (cardA===51 && cardB===0){return "true";}
      else {
        if (this.rank(cardA)+1===this.rank(cardB)){return "true";}
        return false;
        }
       return;
    };
    
	makeCard.sameColor = function(cardB) {
        var cardA=this.id
        if (this.color(cardA)===this.color(cardB)){return true;}
          return false;
	};

	makeCard.nextInSuit = function() {
        var card=this.id; 
        if (this.fuckShitUp(card,0,51)){
           if (card>=48&&this.id<=51){return card-48;}
           return card+4;
        }
        return;
	};

	makeCard.prevInSuit = function() {
       var card=this.id;
       if (this.fuckShitUp(card,0,51)){
           if (card>=0&&card<=3){return card+48;}
           return card-4;
        }
        return; 
	};



