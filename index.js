document.addEventListener("DOMContentLoaded", function() {
  const questionsArray = [
  {
    questionNumber: 1,
    questionText: "What number of materials is a bishop worth? (Material value refers to how much the piece is worth or how useful it is, for example, a pawn is worth 1)",
    answerOptions: [
      "5 - 5.5",
      "3 - 3,25",
      "2 - 2.5",
      "1.75 - 2",
    ],
    correctAnswer: "3 - 3,25"
  },
  {
    questionNumber: 2,
    questionText: "How many squares are there on a standard chessboard?",
    answerOptions: [
      "64",
      "72",
      "56",
      "81",
    ],
    correctAnswer: "64"
  },
  {
    questionNumber: 3,
    questionText: "What is the most powerful piece on the chessboard?",
    answerOptions: [
      "Pawn",
      "Rook",
      "Queen",
      "Bishop",
    ],
    correctAnswer: "Queen"
  },
  {
    questionNumber: 4,
    questionText: "How many squares can a rook attack from its starting position on an empty chessboard?",
    answerOptions: [
      "14",
      "15",
      "21",
      "27",
    ],
    correctAnswer: "14"
  },
  {
    questionNumber: 5,
    questionText: "What is the term used to describe a move in chess where a pawn captures an opponent's pawn that has just moved two squares forward from its starting position?",
    answerOptions: [
      "En passant",
      "Castling",
      "Promotion",
      "Stalemate",
    ],
    correctAnswer: "En passant"
  },
  {
    questionNumber: 6,
    questionText: "In chess, what is the name of the popular opening move where the player moves the pawn in front of the queen two squares forward?",
    answerOptions: [
      "Ruy Lopez",
      "Caro-Kann Defense",
      "French Defense",
      "Queen's Pawn Opening",
    ],
    correctAnswer: "Queen's Pawn Opening"
  },
  {
    questionNumber: 7,
    questionText: "What is the name of the complex chess opening that begins with the moves 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7?",
    answerOptions: [
      "King's Indian Defense",
      "Caro-Kann Defense",
      "Ruy Lopez",
      "Queen's Pawn Opening",
    ],
    correctAnswer: "King's Indian Defense"
  },
  {
    questionNumber: 8,
    questionText: "What is the name of the chess opening that starts with the moves 1. e4 e5 2. Nf3 Nc6 3. Bb5?",
    answerOptions: [
      "Sicilian Defense",
      "Caro-Kann Defense",
      "Ruy Lopez",
      "French Defense",
    ],
    correctAnswer: "Ruy Lopez"
  },
  {
    questionNumber: 9,
    questionText: "What are four rare moves or positions in chess?",
    answerOptions: [
      "En passant, Morphing to Bishop, Morphing to Knight, Castling",
      "Promotion to Rook, Queen Sacrifice, Double Check, Stalemate",
      "Fool's Mate, Scholar's Mate, Zugzwang, Perpetual Check",
      "Skewer, Pin, Discovered Attack, Fork",
    ],
    correctAnswer: "Fool's Mate, Scholar's Mate, Zugzwang, Perpetual Check"
  },
  {
    questionNumber: 10,
    questionText: "What is the maximum number of moves a king can make on an empty chessboard without visiting the same square twice?",
    answerOptions: [
      "63",
      "64",
      "65",
      "66",
    ],
    correctAnswer: "64"
  },

];

  const buttons = document.querySelectorAll(".buttons");
  const questionCard = document.querySelector(".question-card");
  const answerCorrect = document.querySelector(".answer-correct");
  const answerWrong = document.querySelector(".answer-wrong");
  const nextQuestionButton = document.querySelector(".next-answer");

  let currentQuestionIndex = -1;

  function rightAnswer() {
    questionCard.style.display = "none";
    answerCorrect.style.display = "flex";
  }

  function wrongAnswer() {
    questionCard.style.display = "none";
    answerWrong.style.display = "flex";
  }

  function displayNextQuestion() {
    questionCard.style.display = "none";
    answerCorrect.style.display = "none";
    answerWrong.style.display = "none";

    currentQuestionIndex++;
    if (currentQuestionIndex < questionsArray.length) {
      questionCard.style.display = "flex";

      const nextQuestion = questionsArray[currentQuestionIndex];

      const questionNumberElement = document.querySelector(".question-number");
      questionNumberElement.textContent = `Question ${nextQuestion.questionNumber}`;

      // Update the buttons with answer options
      const buttonsQuestionCard = document.querySelector(".buttons-question-card");
      buttonsQuestionCard.innerHTML = nextQuestion.answerOptions.map(option => `<button class="buttons">${option}</button>`).join("");
    } else {
      questionCard.style.display = "none";
      nextQuestionButton.style.display = "none";
      console.log("Quiz completed!");
    }
  }

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      if (this.textContent.trim() === questionsArray[currentQuestionIndex].correctAnswer) {
        rightAnswer();
      } else {
        wrongAnswer();
      }
    });
  });

  nextQuestionButton.addEventListener("click", displayNextQuestion);

  displayNextQuestion(); // Initialize the display with the first question
});