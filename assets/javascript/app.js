var questions = [{
    q: "Pumpkin calls his girlfriend, Honey Bunny in the restaurant before they rob it.",
    ans: ["true","false"],
    name: "honeyBunny",
    correct: "1987",
    divClass: ".honeyBunny"
},
{
    q: "The theme song to this movie was Jungle Boogie.",
    ans: ["true","false"],
    name: "miserlou",
    correct: "false",
    divClass: ".miserlou"
},
{
    q: "Quentin Tarantino is the director of Pulp Fiction.",
    ans: ["true","false"],
    name: "quentin",
    correct: "true",
    divClass: ".quentin"
},
{
    q: "The quarter pounder in Europe is called a Quarter Pounder with cheese",
    ans: ["true","false"],
    name: "royal",
    correct: "false",
    divClass: ".royal"
},
{
    q: "John Travolta plays Jules Winnfield.",
    ans: ["true","false"],
    name: "samuel",
    correct: "false",
    divClass: ".samuel"
},
{
    q: "John Tavolta plays Vincent Vega.",
    ans: ["true","false"],
    name: "john",
    correct: "true",
    divClass: ".john"
},
{
    q: "The Bible passage Jules 'preached' to his victim before he killed him was Ezekiel 25:17.",
    ans: ["true","false"],
    name: "ezekiel",
    correct: "true",
    divClass: ".ezekiel"
},
{
    q: "Mia Wallace Overdosed on cocaine.",
    ans: ["true","false"],
    name: "heroin",
    correct: "false",
    divClass: ".heroin"
},
{
    q: "Mia ordered a $5 milkshake that surprised Vincent by the cost at the resturant.",
    ans: ["true","false"],
    name: "milkshake",
    correct: "true",
    divClass: ".milkshake"
},
{
    q: "Jimmie's (Quentin Tarentino) wife's name was Hillary in the movie.",
    ans: ["true","false"],
    name: "bonnie",
    correct: "false",
    divClass: ".bonnie"
}
]
var labels = ["first", "second"];

var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
    
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].q + '</div>');
        
        for (var i = 0; i <= 1; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}



var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            
            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();

            
            clearInterval(timer);
            return;
        }
    }, 1000);

    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
}; 


var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    
    countdown();
    $('.container').fadeOut(500);
    $('#answerScreen').show();
    $('#correctScreen').append(correctAnswers);
    $('#wrongScreen').append(wrongAnswers);

});
