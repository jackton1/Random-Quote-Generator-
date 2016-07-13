// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//event listener to stop the automatic load of quotes calling the 'clear()' function
//on mouse over the button
document.getElementById('loadQuote').addEventListener("mouseover", clear, false);
//event listener to start the automatic load of quotes calling the 'start()' function after it has been stopped
//on mouse out of the button
document.getElementById('loadQuote').addEventListener("mouseout", start, false);


var quotes;

// An array of objects to hold the different quotes data .
// Comprises of the quote property the source ,citation, year and the tags
quotes =  [

     {
      quote: "Software is the user experience. As the iPod and iTunes prove, it has become the driving technology not just of computers but of consumer electronics",
      source: "Steve Jobs",
      citation:"Fortune",
      year:2005,
      tags:"Technology, Software, User-Experience"
     },
     {
      quote:"Wisdom is of God... Genius is the decay of Wisdom. To Shakespeare, Wisdom was offered; but he did not accept it, and so he died away into Genius",
      source:"Jones Very",
      citation:"paraphrase from Emerson's journal",
      year:1838,
      tags:"Literature, Religion, Shakespeare"
      },
     {
       quote: "Computers are magnificent tools for the realization of our dreams, but no machine can replace the human spark of spirit, compassion, love, and understanding.",
       source: "Louis V. Gerstner, Jr.",
       citation:"Springer",
       year:"",
       tags:"Technology"
     },
     {
       quote:"Nanotechnology will let us build computers that are incredibly powerful. We'll have more power in the volume of a sugar cube that exists in the entire world today.",
       source:"Ralph Merkle",
       citation:"",
       year:2007,
       tags:"Nanotechnology, Technology"
     },
     {
       quote:"A friend is someone who knows all about you and still loves you",
       source:"Elbert Hubbard",
       citation:"",
       year:"",
       tags:"Friendship, Life"
     },
     {
       quote:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that",
       source:"Martin Luther King",
       citation:"A Testament of Hope: The Essential Writings and Speeches",
       year:"",
       tags:""
     },
     {
      quote:"Give me six hours to chop down a tree and I will spend the first four sharpening the axe",
       source:"Abraham Lincoln",
       citation:"",
       year:"1809-65",
       tags:"Planning, Life"
     }

];

 var singlequote = 0;

// The quote is randomly selected  using the function getRandomQuote (), which returns a random quote from the array of quote objects
function getRandomQuote(){
    /*
     * Using the Math.Random() function which returns a random value from 0 - 1 and multiplying it by the length of the quotes array
     * This will return a random value from 0 - size of the array in this case 7. Using the Math.floor function to round the random value down.
     * Since the index of the array object doesnt exceed the lenght and the index starts from 0.
    */
    var i;
    var chosenquote;
    var randomnumber;
    //randomnumber = Math.floor(Math.random() * quotes.length);              //Comment out this section
    //chosenquote = quotes[randomnumber];                                    //to get one quote without repetition

    /*Comment out the randomnumber and chosenquote above and Uncomment this secion
     *to get a single quote once and it will reset to the beginning when the end of the quotes have been reached */

    chosenquote = quotes[singlequote];
    singlequote += 1;
    if (singlequote == quotes.length){
      delete singlequote;
      singlequote = 0;
    }

    return chosenquote;
}


function printQuote(){
    var selectedQuote;
    var selectedSource;
    var selectedCitation;
    var selectedYear;
    var selectedTag;
    var quoteLocation;
    var quoteData = "";

    var message = getRandomQuote();     //Call the getRandomQuote() funciton which returns a random quote object from the quotes array of objects

    //Change the Background color each time the button is clicked rgb(111,111,111) using the Math.random() to get a random value from 0-1 and Math.floor() to round it down
    var colors = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    document.getElementsByTagName('body')[0].style.backgroundColor = colors; //select the body tag name and using [0] selects the first body tag in the document


    quoteLocation= document.getElementById('quote-box');    //select the quote-box div

    selectedQuote = message.quote;      //selecting the quote property from the randomly chosen Quote object

    selectedSource = message.source;      //selecting the source property from the randomly chosen Quote object

    selectedCitation = message.citation;    //selecting the citation property from the randomly chosen Quote object

    selectedYear = message.year;      //selecting the year property from the randomly chosen Quote object

    selectedTag =  message.tags;     //selecting the tags property from the randomly chosen Quote object

     //format the quoteData with the tags the quote, source year and citation from the quotes array of objects
    if (selectedTag === ""){
      //Dont add the tag span
    }
    if (selectedTag !== ""){
      quoteData = '<p class="tag">'+selectedTag+'</p>';   //add the tag span if its not an empty string
    }

    quoteData += '<p class="quote">'+selectedQuote +'</p>';
    quoteData += '<p class="source">'+  selectedSource ;

    //Strict Comparison of the citation that has been randomly selected and checking if its an empty string and not displaying the citation span element.
    if (selectedYear === "" && selectedCitation === "" ){
      //Don't add the span tags for both Year and Citation
    }
    if (selectedCitation === "" && selectedYear !== ""){
      quoteData += '<span class="year">'+selectedYear+'</span></p>';
    }
    //Strict Comparison of the year that has been randomly selected and checking if its an empty string and not displaying the year span element.
    if (selectedYear === "" && selectedCitation !== ""){
      quoteData += '<span class="citation">'+ selectedCitation +'</span></p>';
    }
    if (selectedYear !== "" && selectedCitation !== "" ) {
      //Display all the span elements for both the citation and year if both the year and citation are not empty strings
      quoteData += '<span class="citation">'+ selectedCitation +'</span>';
      quoteData += '<span class="year">'+selectedYear+'</span></p>';
    }

    quoteLocation.innerHTML =  quoteData;      //and using the innerHTML property to write the quote data to webpage
}

var IntervalId;
function start(){
  IntervalId = setInterval(function(){printQuote()}, 30000);    //refresh to print a new Quote after 30000 milliseconds (30 seconds)
}

start();  //Start function which changes the quote

function clear(){
  clearInterval(IntervalId);    // clear the auto refresh t manaully change the quote on mouse over the load quote button
}
