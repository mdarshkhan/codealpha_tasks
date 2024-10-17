const flashcards = [];
let currentFlashcard = 0;
let correctAnswers = 0;
let totalQuestions = 0;  // Keep track of total number of questions

// Handle adding flashcards
document.getElementById('flashcard-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const question = document.getElementById('question').value;
  const answer = document.getElementById('answer').value;
  
  flashcards.push({ question, answer });
  
  document.getElementById('question').value = '';
  document.getElementById('answer').value = '';
  
  alert('Flashcard added successfully!');
});

// Handle starting the quiz
document.getElementById('start-quiz').addEventListener('click', function() {
  if (flashcards.length === 0) {
    alert('Please add flashcards first!');
    return;
  }

  currentFlashcard = 0;
  correctAnswers = 0;
  totalQuestions = flashcards.length;
  
  document.getElementById('quiz-section').style.display = 'block';
  document.getElementById('add-flashcard').style.display = 'none';
  document.getElementById('start-quiz').style.display = 'none';
  loadFlashcard();
});

// Load current flashcard question
function loadFlashcard() {
  document.getElementById('quiz-question').innerText = flashcards[currentFlashcard].question;
  document.getElementById('user-answer').value = '';
}

// Handle answer submission
document.getElementById('submit-answer').addEventListener('click', function() {
  const userAnswer = document.getElementById('user-answer').value.trim();
  const correctAnswer = flashcards[currentFlashcard].answer.trim();

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    correctAnswers++;
    alert("Correct!");
  } else {
    alert(`Wrong! The correct answer is: ${correctAnswer}`);
  }

  currentFlashcard++;
  
  if (currentFlashcard < flashcards.length) {
    loadFlashcard();
  } else {
    endQuiz();
  }
});

// End the quiz and display the score
function endQuiz() {
  document.getElementById('quiz-section').style.display = 'none';
  document.getElementById('quiz-score').innerText = `You got ${correctAnswers} out of ${totalQuestions} correct!`;
  document.getElementById('quiz-score').style.display = 'block';
  document.getElementById('start-quiz').style.display = 'block';
  document.getElementById('add-flashcard').style.display = 'block';
}
