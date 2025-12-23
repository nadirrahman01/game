class FinanceAssessmentGame {
    constructor() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.categoryScores = {
            cognitive: { correct: 0, total: 0 },
            numerical: { correct: 0, total: 0 },
            logic: { correct: 0, total: 0 },
            situational: { correct: 0, total: 0 }
        };
        this.questions = this.generateQuestionSet();
        this.selectedAnswer = null;
        this.timer = null;
        this.timeRemaining = 60;
        
        this.initializeEventListeners();
    }

    generateQuestionSet() {
        const questions = [];
        const categories = ['cognitive', 'numerical', 'logic', 'situational'];
        
        categories.forEach(category => {
            const categoryQuestions = questionBank[category];
            const shuffled = this.shuffleArray([...categoryQuestions]);
            const selected = shuffled.slice(0, 5);
            selected.forEach(q => {
                questions.push({ ...q, category });
            });
        });
        
        return this.shuffleArray(questions);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    initializeEventListeners() {
        document.getElementById('start-game-btn').addEventListener('click', () => this.startGame());
        document.getElementById('submit-answer-btn').addEventListener('click', () => this.submitAnswer());
        document.getElementById('restart-btn').addEventListener('click', () => this.restart());
    }

    startGame() {
        this.showScreen('game-screen');
        this.displayQuestion();
        this.startTimer();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const categoryIcons = {
            cognitive: '🧠 Cognitive',
            numerical: '🔢 Numerical',
            logic: '🎯 Logic',
            situational: '💼 Situational'
        };

        document.getElementById('current-category').textContent = categoryIcons[question.category];
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        document.getElementById('total-questions').textContent = this.questions.length;
        document.getElementById('question-text').textContent = question.question;
        
        const contextEl = document.getElementById('question-context');
        if (question.context) {
            contextEl.textContent = question.context;
            contextEl.classList.add('visible');
        } else {
            contextEl.classList.remove('visible');
        }

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.onclick = () => this.selectOption(index);
            optionsContainer.appendChild(button);
        });

        this.selectedAnswer = null;
        this.updateProgress();
        this.resetTimer();
    }

    selectOption(index) {
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.querySelectorAll('.option-btn')[index].classList.add('selected');
        this.selectedAnswer = index;
    }

    submitAnswer() {
        if (this.selectedAnswer === null) {
            alert('Please select an answer before submitting.');
            return;
        }

        clearInterval(this.timer);
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = this.selectedAnswer === question.correct;
        
        if (isCorrect) {
            this.score += 100;
            this.categoryScores[question.category].correct++;
        }
        this.categoryScores[question.category].total++;

        document.getElementById('current-score').textContent = this.score;

        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === this.selectedAnswer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        setTimeout(() => {
            this.currentQuestionIndex++;
            if (this.currentQuestionIndex < this.questions.length) {
                this.displayQuestion();
                this.startTimer();
            } else {
                this.showResults();
            }
        }, 2000);
    }

    startTimer() {
        this.timeRemaining = 60;
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 10) {
                document.getElementById('timer').classList.add('warning');
            }
            
            if (this.timeRemaining <= 0) {
                this.submitAnswer();
            }
        }, 1000);
    }

    resetTimer() {
        clearInterval(this.timer);
        document.getElementById('timer').classList.remove('warning');
    }

    updateTimerDisplay() {
        document.getElementById('time-remaining').textContent = this.timeRemaining;
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex) / this.questions.length) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
    }

    showResults() {
        this.showScreen('results-screen');
        document.getElementById('final-score').textContent = this.score;

        const categories = ['cognitive', 'numerical', 'logic', 'situational'];
        categories.forEach(category => {
            const data = this.categoryScores[category];
            const percentage = data.total > 0 ? (data.correct / data.total) * 100 : 0;
            
            document.getElementById(`${category}-result`).style.width = percentage + '%';
            document.getElementById(`${category}-percentage`).textContent = Math.round(percentage) + '%';
        });

        setTimeout(() => {
            categories.forEach(category => {
                const data = this.categoryScores[category];
                const percentage = data.total > 0 ? (data.correct / data.total) * 100 : 0;
                document.getElementById(`${category}-result`).style.width = percentage + '%';
            });
        }, 100);

        this.displayFeedback();
    }

    displayFeedback() {
        const totalQuestions = this.questions.length;
        const correctAnswers = Object.values(this.categoryScores).reduce((sum, cat) => sum + cat.correct, 0);
        const percentage = (correctAnswers / totalQuestions) * 100;

        let feedback = '';
        
        if (percentage >= 90) {
            feedback = "🌟 Outstanding! You've demonstrated exceptional skills across all areas.";
        } else if (percentage >= 75) {
            feedback = "💪 Excellent work! You have strong capabilities with minor areas for improvement.";
        } else if (percentage >= 60) {
            feedback = "👍 Good effort! You show solid foundational skills. Focus on strengthening weaker areas to become more competitive.";
        } else {
            feedback = "📚 Keep practicing! Review fundamental concepts in your weaker areas. Consider additional study materials and practice assessments.";
        }

        document.getElementById('performance-feedback').textContent = feedback;
    }

    restart() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.categoryScores = {
            cognitive: { correct: 0, total: 0 },
            numerical: { correct: 0, total: 0 },
            logic: { correct: 0, total: 0 },
            situational: { correct: 0, total: 0 }
        };
        this.questions = this.generateQuestionSet();
        this.selectedAnswer = null;
        document.getElementById('current-score').textContent = '0';
        this.showScreen('start-screen');
    }
}

// Initialize the game when the page loads
let game;
document.addEventListener('DOMContentLoaded', () => {
    game = new FinanceAssessmentGame();
});
