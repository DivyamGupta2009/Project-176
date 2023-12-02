let words = [
    {
        "inputs": 6,
        "category": "sports",
        "word": "tennis"
    },
    {
        "inputs": "10",
        "category": "sports",
        "word": "basketball"
    },
    {
        "inputs": "5",
        "category": "musical instrument",
        "word": "piano"
    },
    {
        "inputs": "6",
        "category": "musical instrument",
        "word": "guitar"
    }
]

$(document).ready(function(){
    displayLetters();
})

function displayLetters(){
    const randomWord = words[Math.floor(Math.random()*words.length)];
    $("#blanks").empty();

    for(let i = 0; i<randomWord.inputs; i++){
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`;
        $("#blanks").append(input_html);
    }

    $("#hint").html(randomWord.category)
    var gameStatus = false;
    $(".clickable").click(function(){
        var correctGuess = false;
        let id = $(this).attr("id");
        var life = parseInt($("#life").text());

        for(var i = 0; i < randomWord.word.length; i++){
            if(randomWord.word.charAt(i).toLowerCase() == id){
                if(life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)){
                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;

                    if($("#blanks").text() === randomWord.word.toLowerCase()){
                        $("#result").text("You Win!")
                        correctGuess = true;
                        gameStatus = true
                    }
                }                
            }
            
        }

        if(life>0 && correctGuess!=true && gameStatus!=true){           
            life = life - 1
            $("#life").text(life)
        }

        else if(life == 0){
            $("#result").text("You Lost!")
        }
    })
}