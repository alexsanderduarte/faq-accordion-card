const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");

const lightGrayishBlue = "hsl(240, 5%, 91%)";

questions.forEach((question, index) =>{

    const answer = answers[index];
    const arrow = arrows[index];

    question.addEventListener("click", event => {

        onlyOneQuestion(question);
        event.preventDefault();
        if (answer.style.display == "block"){
            // ESCONDE RESPOSTA
            hideAnswer(question, answer, arrow);

        } else {
            // MOSTRA RESPOTA
            showAnswer(question, answer, arrow);
        }
    });

});

function showAnswer(question, answer, arrow){
    question.style.border = "0";
    question.style.fontWeight = "700";

    answer.style.display = "block"; 
    answer.style.animation = "show-answer 0.5s backwards";       

    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "0.5s";

};

function hideAnswer(question, answer, arrow){

    answer.style.animation = "hide-answer 0.5s backwards";
    setTimeout(function(){
        answer.style.display = "none";

        question.style.borderBottom = "1px solid " + lightGrayishBlue;
        question.style.fontWeight = "400";
    
    
        arrow.style.transform = "rotate(0)";
        arrow.style.transition = "0.5s";
    }, 400);
};

function onlyOneQuestion(clickedQuestion){

    questions.forEach((question, index) =>{

        const answer = answers[index];
        const arrow = arrows[index];

        if (clickedQuestion === question){
            // RIGHT QUESTION - CAN OPEN ANSWER
        } else if (answer.style.display == "block") {
            // WRONG ANSWER OPEN - HIDING ANSWER 
            hideAnswer(question, answer, arrow);
        };

    });

};