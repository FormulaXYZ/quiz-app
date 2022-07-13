var startButton = document.getElementById('start-btn')
var questionContainer = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElent = document.getElementById('answer-btn')
var time = 20; 
var answerone = document.getElementById('ans1')
var answertwo = document.getElementById('ans2')
var answerthree = document.getElementById('ans3')
var answerfour = document.getElementById('ans4')


startButton.addEventListener('click' , startGame)

function startTime(){

  if (time > 0) { 
    time -= 1;
    document.getElementById('timer').innerHTML = time
  }  
  else {
    clearInterval(timerId);
    alert('Time is up')
  }
}
var  currentQuestionIndex = 0;
function startGame(){ 
    console.log('Started')
    startButton.classList.add('hide')
    
   
    questionContainer.classList.remove('hide');
    timerId = setInterval(startTime, 1000)
    setNextQuestion()

}
function setNextQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

answerone.textContent = questions [currentQuestionIndex].answer[0];
answertwo.textContent = questions [currentQuestionIndex].answer[1];
answerthree.textContent = questions [currentQuestionIndex].answer[2];
answerfour.textContent = questions [currentQuestionIndex].answer[3];
}






function selectAnswer(selectedAnswer){
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        alert("Correct!");
        time += 5;
        console.log(selectedAnswer)

    
      }
      else {
        alert("Incorrect");
        time -= 5;
    };
    if (currentQuestionIndex === questions.length - 1) {
      alert("Your score is " + score);
      endQuiz();
    } else {
      currentQuestionIndex++;
      setNextQuestion();
    };
};

var questions = [
    {
        
        question: 'what is the capital city of california ?',
        answer: [
            'sacramento', 
            'san francisco', 
            'Emeryvill', 
            'Los Angeles' 
        ],
        correctAnswer: 'sacramento',
    },
    {
        
        question: ' 10 * 5  ?',
        answer: [
            '15', 
            '150', 
            '50', 
            '500'
        ],
        correctAnswer: '50'
    },
    {
        
        question: 'what is the largest ocean on earth ?',
        answer: [
            'Atlantic Ocean', 
            'Arctic Ocean', 
            'Indian Ocean', 
            'Pacific Ocean'
        ],
        correctAnswer: 'Pacific'
    },
    {
        
        question: ' Cameroon is a country located in   ?',
        answer: [
            'South America', 
            'Africa', 
            'Asia', 
            'Europe'
        ],
        correctAnswer: 'Africa'
    },

];
answerone.addEventListener("click", function () {
    selectAnswer(answerone.textContent);
  });
  answertwo.addEventListener("click", function () {
    selectAnswer(answertwo.textContent);
  });
  answerthree.addEventListener("click", function () {
    selectAnswer(answerthree.textContent);
  });
  answerfour.addEventListener("click", function () {
    selectAnswer(answerfour.textContent);
  });