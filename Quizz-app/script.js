const questions = [
  {
    question: "Which is largest animal in the world",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    question: "Which is largest tree in the world",
    answers: [
      { text: "Banyan", correct: false },
      { text: "Redwood", correct: true },
      { text: "Neem", correct: false },
      { text: "Peepal", correct: false }
    ]
  },
  {
    question: "Which is largest river in the world",
    answers: [
      { text: "Amazon", correct: true },
      { text: "Ganga", correct: false },
      { text: "Yangtze", correct: false },
      { text: "Nile", correct: false }
    ]
  },
  {
    question: "Which is largest zoo in the world",
    answers: [
      { text: "Bronx Zoo", correct: false },
      { text: "Sri Venkateswara Zoological Park", correct: true },
      { text: "London Zoo", correct: false },
      { text: "San Diego Zoo", correct: false }
    ]
  }
];
   const questionElement = document.getElementById("question");
   const answerButton = document.getElementById("answer-buttons");
   const nextButton = document.getElementById("next-btn");

   let currentQuestionIndex =0;
   let score= 0;

   function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML= "Next";
    showQuestion();
   }

   function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
   }

   function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
   }

   function selectAnswer(e) {
     const selectedBtn = e.target;
     const isCorrect = selectedBtn.dataset.correct === "true";
     if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
     }else{
        selectedBtn.classList.add("incorrect");
     }
     Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
     });
     nextButton.style.display = "block";
   }


   function showScore(){
      resetState();
      questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
      nextButton.innerHTML = "play Again";
      nextButton.style.display= "block";
   }

   function handleNextButton(){
      currentQuestionIndex ++;
      if(currentQuestionIndex < questions.length){
        showQuestion();
      }else{
        showScore();
      }
   };
  nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
  })


   startQuiz();