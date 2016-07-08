// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var message;
var qoutes;

qoutes =  [
     {
      qoute: "Computers themselves, and software yet to be developed, will revolutionize the way we learn",
      source: "Steve Jobs"
      citation:
      year:
     },
     {
      qoute:"Treat your password like your toothbrush. Don't let anybody else use it, and get a new one every six months.",
      source:"Clifford Stoll"
      citation:
      year:
      },
     {
       qoute: "Computers are magnificent tools for the realization of our dreams, but no machine can replace the human spark of spirit, compassion, love, and understanding.",
       source: "Louis V. Gerstner, Jr."
       citation:
       year:
     },
     {
       qoute:"Nanotechnology will let us build computers that are incredibly powerful. We'll have more power in the volume of a sugar cube than exists in the entire world today.",
       source:"Ralph Merkle"
       citation:
       year:
     }
];


function getRandomQoute(){
    var i;
    var selectedQoute;
    var selectedSource;
    var selectedCitation;
    var selectedYear;
       for(i = 0; i < qoutes.length; ++i){
         
       }

}


function printQuote(){
    var box = document.getElementById('qoutes');
    box.innerHTML =  message;
}
