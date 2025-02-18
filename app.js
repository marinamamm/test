let currentPage = 0;
let answers = {};

function clearAnswers() {
    answers = {};
    console.log("Answers cleared");
}

function renderPage(pageIndex) {
    console.log("Current page:", pageIndex);
    console.log("Current answers:", answers);
    const page = questions[pageIndex];
    const container = document.getElementById('questionPage');
    container.innerHTML = '';

    page.forEach(question => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <p>${question.text}</p>
            <div class="options">
                ${question.options.map(option => `
                    <div class="option ${answers[question.id] === option.value ? 'selected' : ''}"
                         onclick="selectAnswer(${question.id}, '${option.value}')">
                        ${option.text}
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(questionDiv);
    });

    updateProgressBar();
    updateNavigationButtons();
}

function selectAnswer(questionId, value) {
    console.log(`Question ${questionId} answered with ${value}`);
    answers[questionId] = value;
    renderPage(currentPage);
}

function nextPage() {
    if (currentPage < questions.length - 1) {
        currentPage++;
        renderPage(currentPage);
    } else {
        showAccessCodePrompt();
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        renderPage(currentPage);
    }
}

function updateProgressBar() {
    const progress = document.getElementById('progress');
    const percentage = ((currentPage + 1) / questions.length) * 100;
    progress.innerHTML = `<div class="progress-bar-fill" style="width: ${percentage}%"></div>`;
}

function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = currentPage === 0;
    document.getElementById('nextBtn').innerHTML = 
        currentPage === questions.length - 1 ? 'Finish' : 'Next';
}

function showAccessCodePrompt() {
    document.getElementById('questionContainer').classList.add('hidden');
    document.getElementById('accessCodeContainer').classList.remove('hidden');
}

function checkAccessCode() {
    const code = document.getElementById('accessCode').value;
    if (code.toLowerCase() === 'edge') {
        showResults();
    } else {
        alert('Invalid access code');
    }
}

function calculateResults() {
    let scores = {
        D: 0,
        I: 0,
        O: 0,
        S: 0
    };

    console.log("Current answers:", answers);

    Object.values(answers).forEach(value => {
        scores[value]++;
    });

    console.log("Calculated DIOS scores:", scores);

    const typeScores = {
        Controller: scores.D + scores.S,
        Performer: scores.D + scores.O,
        Engineer: scores.S + scores.O,
        Counsellor: scores.I + scores.O
    };

    const dominantType = Object.entries(typeScores)
        .sort(([,a], [,b]) => b - a)[0][0];

    return {
        scores: scores,
        dominantType: dominantType
    };
}

function getDominantPersonalityType(scores) {
    return calculateResults().dominantType;
}

function showResults() {
    const results = calculateResults();
    document.getElementById('accessCodeContainer').classList.add('hidden');
    document.getElementById('resultsContainer').classList.remove('hidden');
    
    const typeScores = {
        Controller: results.scores.D + results.scores.S,
        Performer: results.scores.D + results.scores.O,
        Engineer: results.scores.S + results.scores.O,
        Counsellor: results.scores.I + results.scores.O
    };

    const sortedTypes = Object.entries(typeScores)
        .sort(([,a], [,b]) => b - a);
    
    console.log("Sorted type scores:", sortedTypes);
    
    const dominantTypeDiv = document.getElementById('dominantType');
    dominantTypeDiv.innerHTML = `
        <h3>Your Dominant Type: ${results.dominantType}</h3>
        <p>${personalityTypes[results.dominantType].traits}</p>
    `;
    
    const scoresDiv = document.getElementById('scores');
    scoresDiv.innerHTML = `
        <h3>Your DIOS Scores:</h3>
        <div class="score-item">
            <span class="score-label">Direct (D):</span>
            <span class="score-value">${results.scores.D}</span>
        </div>
        <div class="score-item">
            <span class="score-label">Indirect (I):</span>
            <span class="score-value">${results.scores.I}</span>
        </div>
        <div class="score-item">
            <span class="score-label">Open (O):</span>
            <span class="score-value">${results.scores.O}</span>
        </div>
        <div class="score-item">
            <span class="score-label">Self-Contained (S):</span>
            <span class="score-value">${results.scores.S}</span>
        </div>

        <div class="type-scores">
            <h3>Score for each type from highest to lowest</h3>
            ${sortedTypes.map(([type, score]) => `
                <div class="type-score-item">
                    <span class="type-label">${type}:</span>
                    <span class="type-formula">${getTypeFormula(type)}= ${score}</span>
                </div>
            `).join('')}
        </div>
    `;
}

function getTypeFormula(type) {
    const formulas = {
        Controller: 'D+S',
        Performer: 'D+O',
        Engineer: 'S+O',
        Counsellor: 'I+O'
    };
    return formulas[type];
}

// Initialize the first page
renderPage(0); 