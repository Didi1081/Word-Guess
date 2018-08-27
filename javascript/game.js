var wins = 0;
var loses = 0;
var wrongGuess = [];
var words = ['cat', 'camel', 'elephant', 'dolphine'];
var dashes = [];

var currentWord = words[Math.floor((Math.random() * 4))];


function createDashes () {
    for( var i = 0; i < currentWord.length; i++ ) {
        dashes.push('_');
    }
    console.log(dashes);
}

createDashes();

// research objects 
//var didi = {
    //name : "Didi",
   // age : 21,
    //talk : function(){
      //  console.log('HELLO!')
    //}
//}


//didi.talk();




document.onkeyup = function (event){
        console.log(event.key);
}
    
