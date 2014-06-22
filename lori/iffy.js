var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
        'Jack','Queen','King'];
var suitNames = ['','Hearts','Diamonds','Spade','Clubs'];
 
var myCard = (function (id) {
        return{
        ID: id,
        myRank: function (){
                var card = this.ID;
                return Math.floor(card/4 + 1);
         },
        mySuit: function (){
                var card = this.ID;
                return Math.floor(card/4 + 1);
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
 })(2);
 
console.log(myCard);