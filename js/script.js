// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes;


// An array of objects to hold the different quotes data .
// Comprises of the quote property the source ,citation  and the year
quotes =  [
     {
      quote: "Software is the user experience. As the iPod and iTunes prove, it has become the driving technology not just of computers but of consumer electronics",
      source: "Steve Jobs",
      citation:"Fortune",
      year:2005,
      tags:""
     },
     {
      quote:"Wisdom is of God... Genius is the decay of Wisdom. To Shakespeare, Wisdom was offered; but he did not accept it, and so he died away into Genius",
      source:"Jones Very",
      citation:"paraphrase from Emerson's journal",
      year:1838,
      tags:""
      },
     {
       quote: "Computers are magnificent tools for the realization of our dreams, but no machine can replace the human spark of spirit, compassion, love, and understanding.",
       source: "Louis V. Gerstner, Jr.",
       citation:"Springer",
       year:"",
       tags:""
     },
     {
       quote:"Nanotechnology will let us build computers that are incredibly powerful. We'll have more power in the volume of a sugar cube than exists in the entire world today.",
       source:"Ralph Merkle",
       citation:"",
       year:2007,
       tags:""
     }
];


// This is randomly selected  using the function getRandomQuote (), which returns a random quote from the array of quote objects
function getRandomQuote(){
    var i;
    var chosenquote;
    var randomnumber;

    randomnumber = Math.floor(Math.random() * quotes.length);
    chosenquote = quotes[randomnumber];
    return chosenquote;

    //var number = [];
    // for(i = 0; i < qoutes.length ; i++){
    //    var newNumber = Math.floor(Math.random() * quotes.length);
    //    number.push(newNumber);
    // }
    //
    // value = number.sort(function(){
    //
    // })
    /*
     * Using the Math.Random() function which returns a random valu from 0 - 1 and multiplying it be the lenght of the quotes array
     * This will return a random value from 0 - size of the array in this case 3. Using the Math.floor function to round the random value down.
     * Since the index of the array object doesnt exceed the lenght and the index starts from 0.
    */
}


function printQuote(){
    var selectedQuote;
    var selectedSource;
    var selectedCitation;
    var selectedYear;
    var quoteLocation;
    var quoteData;
    //Call the getRandomQuote() funciton which returns a random qoute object from the qoutes array of objects
    var message = getRandomQuote();
    //Change the Background color each time the button is clicked
    var colors = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    document.getElementsByTagName('body')[0].style.backgroundColor = colors;
    //select the qoute-box div and using the innerHTML property to write the qoute data to webpage
    quoteLocation= document.getElementById('quote-box');
    //selecting the quote property from the randomly chosen Quote object
    selectedQuote = message.quote;
    //selecting the source property from the randomly chosen Quote object
    selectedSource = message.source;
    selectedCitation = message.citation;
    selectedYear = message.year;

    quoteData = '<p class="quote">'+selectedQuote +'</p>';
    quoteData += '<p class="source">'+  selectedSource ;

    //Strict Comparison of the citation that has been randomly selected and checking if its an empty string and not displaying the citation span element.
    if (selectedCitation === "" || selectedCitation === null){
      quoteData += '<span class="year">'+selectedYear+'</span></p>';
    }
    //Strict Comparison of the year that has been randomly selected and checking if its an empty string and not displaying the year span element.
    if (selectedYear === "" || selectedYear === null ){
      quoteData += '<span class="citation">'+ selectedCitation +'</span></p>';
    }
    if (selectedYear !== "" && selectedCitation !== "" ) {
      //Display all the quoteData if both the year and citation are present
     quoteData += '<span class="citation">'+ selectedCitation +'</span>';
      quoteData += '<span class="year">'+selectedYear+'</span></p>';
    }

    quoteLocation.innerHTML =  quoteData;
}

var IntervalId;

function startAutoload(){
   IntervalId = window.setInterval(printQuote(), 1000);
}

setTimeout(startAutoload(), 1000);
//window.addEventListener('load',startAutoload, false);

//body.onload = startAutoload();
