
//1 IFFY cards
var makeCard = (function(){

function rank() {
        var id = this.id;
        var ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        var index = Math.floor(id / 4);
        return (ranks[index]);
  }
function suit() {
        var id = this.id;
        var suits = [1, 2, 3, 4];
        return (suits[(id % 4)]);
  }
function cardId() {
        var id = this.id;
        return(id);
  }
function color() {
        var colors = ["red", "red", "black", "black"];
        var id = this.id;
        return(colors[(id % 4)]);
  }
function cardName() {
       var ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
       var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
       var rank = ranks[(this.rank()-1)];
       var suit = suits[(this.suit()-1)];
       return (rank + " of " + suit);
  }
function precedes(cardObj) {
       var A = this.rank();
       var B = cardObj.rank();
       if (A === (B-1)){
          return (true);
       }else if ((A === 13) && (B === 1)){
          return(true);
         }
        return(false);        
  }
function sameColor(cardObj) {
        return(this.color()===cardObj.color());
  }

function nextInSuit() {
    if (this.id<48){
       return(this.id+4);
    }else{
       return(this.id-48);
       }
  }

function prevInSuit() {
    if (this.id>3){
       return(this.id-4);
    }else{
        return(this.id+48);
         }
  }

function factory(id){
	var card = {id:id};
	card.rank = rank;
	card.suit = suit;
	card.cardID = cardId;
	card.color = color;
	card.cardName = cardName;
	card.precedes = precedes;
	card.sameColor = sameColor;
	card.nextInSuit = nextInSuit;
	card.prevInSuit = prevInSuit;
  return card;
}

return factory;
})();

//2 all hands off deque

var testDeque = (function(){
var values = [];

function makeDeque(inputValues){
  var deque = {};
  for (var i = 0; i < inputValues.length; i++){
    values[i] = inputValues[i];
  }
  deque.top = function() {
  o = values[(values.length)-1]
  return o;
}
  deque.bottom = function() {
  o = values[0]
  return o;
}
  deque.push = function(val) {
  values.push(val);
}
  deque.pop = function() {
  return (values.pop());
}
  deque.shift = function() {
  return (values.shift());
}
  deque.unshift = function(val) {
  values.unshift(val);
}
  deque.cut = function(offset) {
  if (!offset) {
    var mid = (Math.ceil(values.length/2));
  }
    else if (offset>=0) { 
        var mid = (Math.ceil(values.length/2)+offset);
         }
    else if (offset<0) { 
        var mid = (Math.ceil(values.length/2)-(Math.abs(offset)));
         }
    var arr1 = values.slice(0, mid);
  var arr2 = values.slice(mid, values.length);
    return arr2.concat(arr1);
}
  deque.sort = function(sortFn) {
  return array.sort(sortFn);

}
  deque.map = function(convertFn) {
  if (convertFn.length>2){return;} //steps the 3rd argument in map() from messing with the otherwise protected array (ex 2B)
  return array.map(convertFn);
}
return values;
}
  return makeDeque;

})();

