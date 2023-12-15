
   // chatbot.js

const chatCircle = document.getElementById('chat-circle');
const chatBox = document.getElementById('chat-box');
const chatList = document.getElementById('chat-list');
const backBtn = document.getElementById('back-btn');

chatCircle.addEventListener('click', () => {
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
    showQuestions();
});

function showAnswer(answer, question) {
    // Remove any existing answers
    const existingAnswer = document.querySelector('.answer');
    if (existingAnswer) {
        existingAnswer.remove();
    }

    const answerDiv = document.createElement('div');
    answerDiv.classList.add('answer');
    answerDiv.innerHTML = `<strong>${question}</strong><br>${answer}`;
    
    // Insert answer in the chat box
    chatList.innerHTML = '';
    chatList.appendChild(answerDiv);

    // Show back button
    backBtn.style.display = 'block';
}

function showQuestions() {
    // Clear the chat box and hide the back button
    chatList.innerHTML = '';
    backBtn.style.display = 'none';

    // Show the list of questions
    const questions = [
        { question: 'Departments', answer: ' <a href="./math.html">Mathematics department </a><br> <a href="./cs.html">Computer Science department </a>' },
        { question: 'Bachelor programs', answer: '<a href="./bachelor.html">Bachelor programs </a>' },
        { question: 'Master programs', answer: '<a href="./bachelor.html">Master programs</a>' },
        { question: 'Documents', answer: '<a href="./login.html">Log in to your account</a>' }
    ];

    questions.forEach(item => {
        const questionBtn = document.createElement('div');
        questionBtn.classList.add('chat-btn');
        questionBtn.innerHTML = item.question;
        questionBtn.onclick = () => showAnswer(item.answer, item.question);
        chatList.appendChild(questionBtn);
    });
}

