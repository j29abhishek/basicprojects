let score = 0;
var button=document.getElementById("btn");
button.addEventListener("click",checkAnswer)
function checkAnswer(questionNumber, correctOption) {
    const options = document.querySelectorAll(`#question${questionNumber} .option`);

    options.forEach(option => {
        option.addEventListener('click', function() {
            if (option.textContent.trim() === correctOption) {
                option.style.backgroundColor = 'lightgreen';
                score += 4;
            } else {
                option.style.backgroundColor = 'lightcoral';
            }

            // Disable only the clicked option
            option.style.pointerEvents = 'none';
        });
    });
}

function calculateScore() {
    document.getElementById('totalScore').textContent = score;
}
