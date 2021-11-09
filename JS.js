
// organizing the page
var start = document.getElementById("start");
var form1 = document.getElementById("form1");
form1.style.visibility = "hidden";


//variables for calculating the results
var scoreBoard = [
    {result: "homeScore", 
    score: 0,
    image1: "https://homestratosphere.s3.amazonaws.com/wp-content/uploads/2016/02/29182351/1-Backyard-Tree-Ideas-iStock-870x579.jpg",
    image2: "https://cdn.vox-cdn.com/thumbor/U42EwG9jGVvzm3Urv-8vUllbDu8=/0x0:6000x4000/1200x800/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/66752682/GettyImages_1163453757.0.jpg",
    text: "Nothing wrong with staying at home and enjoying the comforts of your own bed."},
    {result: "localScore", 
    score: 0,
    image1: "https://www.planetware.com/photos-large/CDN/canada-banff-national-park-moraine-lake-2.jpg",
    image2: "https://tropicaldiscovery.com/wp-content/uploads/2017/08/iStock-489906091-1024x678.jpg",
    text: "Who wants to deal with a language barrier anyway? Have some adventure, but play it safe and enjoy something not too exotic."},
    {result: "notLocalScore", 
    score: 0,
    image1: "https://blog.goway.com/gowayagent/wp-content/uploads/2016/09/Kakslauttanen-Arctic-Resort-Glass-Igloos-Finnish-Lapland-Finland.jpg",
    image2: "https://cdn1.matadornetwork.com/blogs/1/2011/05/japan-1200x729.jpg",
    text: "Don't hold back. Go out there and try something amazing. But, nothing too extreme of course."},
    {result: "exoticScore", 
    score: 0,
    image1: "https://www.telegraph.co.uk/content/dam/Travel/2017/june/cycling%20131314241_Cultura%20Exclusive_Madagascar-xlarge.jpg",
    image2: "https://whyweseek.com/wp-content/uploads/2019/06/registan-square-sunset-samarkand-uzbekistan.jpg",
    text: "OuterSpace will be available soon, but until then, get off the beaten path and try something truly adventurous."}
]





var homeScore = "your own backyard for a Staycation";
var localScore = "Canada or Belize";
var notLocalScore = "Finland or Japan";
var exoticScore = "Madagascar or Uzbekistan";

 
var whichQuestion = 0;
var answerX = "";
var scores = document.getElementById("scores");
var saveInitials = document.getElementById("initials");



//Questions that will generate
var theQuestions = [
    {question: "How comfortable are you with going out there and trying something new?",
    answer1: "Hard pass",
    answer2: "Depends on what it is",
    answer3: "Bring it on",
    answer4: "I've done it all, but am eager for more",
    home: "Hard pass", 
    local: "Depends on what it is",
    notLocal: "Bring it on",
    exotic: "Going to be pretty hard to find something I haven't already done"},
    
    {question: "Are you willing to try new foods?",
    answer1: "I'll try just about anything",
    answer2: "I might try something new, if it looks good",
    answer3: "Nope, I'll stick with saltines and water", 
    answer4: "I'll eat anything you put in front of me",
    home: "Nope, I'll stick with saltines and water", 
    local: "I might try something new, if it looks good",
    notLocal: "I'll try just about anything",
    exotic: "I'll eat anything you put in front of me"},
    
    {question: "Are you okay with a long layover?",
    answer1: "Layovers are like a vacation within a vacation",
    answer2: "I won't even fly in the first place",
    answer3: "I'd rather get right to the fun part",
    answer4: "As long as it isn't too bad",
    home: "I won't even fly in the first place", 
    local: "I'd rather get right to the fun part",
    notLocal: "As long as it isn't too bad",
    exotic: "Layovers are like a vacation within a vacation"},
    
    {question: "Are you a linguaphile?",
    answer1: "Not so much; I took a year of spanish in highschool and it did not go well",
    answer2: "For sure. I'm already fluent in 4 languages and counting",
    answer3: "Am I a what???",
    answer4: "You could say that. Even if I don't understand, language is beautiful",
    home: "Am I a what???", 
    local: "Not so much; I took a year of spanish in highschool and it did not go well",
    notLocal: "You could say that. Even if I don't understand, language is beautiful",
    exotic: "For sure. I'm already fluent in 4 languages and counting"},

    {question: "How stir crazy are you after surviving 2020?",
    answer1: "I guess it has been a while since I left the house",
    answer2: "I am getting pretty desperate for a change of scenery",
    answer3: "Must travel or will die!",
    answer4: "Not stir crazy at all.",
    home: "Not stir crazy at all.", 
    local: "I guess it has been a while since I left the house",
    notLocal: "I am getting pretty desperate for a change of scenery",
    exotic: "Must travel or will die!"},

]



//The button that starts everything,
start.addEventListener("click", test);
function test() {
    start.remove();
    form1.style.visibility = "visible";
    question(whichQuestion);
}

var result = document.getElementById("result");

    //End of the game, either time ran out or the last question was answered
    function end() {
        $(".card-body").remove()
            //Calculates the winner
        var arrange = [];
        for (let i = 0; i < scoreBoard.length; i++) {
            arrange.push(scoreBoard[i])};
        arrange.sort(function (a,b) { return b.score - a.score});
        var winner = arrange[0];

            //Adds the winning info to the page
        result.innerHTML = "You should travel to " + eval(winner.result);
        $("#resultImage").attr("src", winner.image1)
        $("#resultImage2").attr("src", winner.image2)
        $("#resultText").text(winner.text)
        

        //Hides the questions and adds a restart button
        form1.style.visibility = "hidden";
        var restartButton = $("<button>").text("Try again?")
        $("#restartBtn").append(restartButton)
        $(restartButton).attr("onClick", "window.location.reload()").attr("class", "regularButton")
    }
    
    
    //Displays the questions one at a time
    function question(x) {
        if (whichQuestion > theQuestions.length -1) {
        end();
    }
    else {
        document.getElementById("q1").innerHTML = theQuestions[x].question;
        document.getElementById("a1").innerHTML = theQuestions[x].answer1;
        document.getElementById("a2").innerHTML = theQuestions[x].answer2;
        document.getElementById("a3").innerHTML = theQuestions[x].answer3;
        document.getElementById("a4").innerHTML = theQuestions[x].answer4;
    }
}


//Waits for the response, and compares that response to the correct answer
function answer1() {
    checkAnswer(1)}
function answer2() {
    checkAnswer(2)}
function answer3() {
    checkAnswer(3)}
function answer4() {
    checkAnswer(4)}
document.getElementById("a1").addEventListener("click", answer1);
document.getElementById("a2").addEventListener("click", answer2);
document.getElementById("a3").addEventListener("click", answer3);
document.getElementById("a4").addEventListener("click", answer4);
//document.getElementById(“a1”).addEventListener(“click”, () => { checkAnswer(1) })
//This was told to me and it does work, but I have no idea why, so I didn't use it.


function checkAnswer(x) {
    answerX = eval("theQuestions[" + whichQuestion + "].answer" + x);
    if (answerX == theQuestions[whichQuestion].home) {
        scoreBoard[0].score = scoreBoard[0].score + 1;
        whichQuestion++;
        question(whichQuestion);
    }
    else if (answerX == theQuestions[whichQuestion].local) {
        scoreBoard[1].score = scoreBoard[1].score + 1;
        whichQuestion++;
        question(whichQuestion);
    }
    else if (answerX == theQuestions[whichQuestion].notLocal) {
        scoreBoard[2].score = scoreBoard[2].score + 1;
        whichQuestion++;
        question(whichQuestion);
    }
    else {
        scoreBoard[3].score = scoreBoard[3].score + 1;
        whichQuestion++;
        question(whichQuestion)}
}

