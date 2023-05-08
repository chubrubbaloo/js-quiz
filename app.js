const correctAnswers = ['B', 'A', 'C', 'C', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

const clearRadioButtons = () => {
    var ele = document.querySelectorAll("input[type=radio]");
    for (var i = 0; i < ele.length; i++) {
        ele[i].checked = false;
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();


    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1;
        }

    });

    // show the result

    window.scrollTo(0, 0);
    result.classList.remove('d-none');

    let scoreAnimation = 0;
    const timer = setInterval(() => {

        result.querySelector('span').textContent = `${scoreAnimation}`;
        if (scoreAnimation === score) {
            clearInterval(timer);
        } else {
            scoreAnimation++;
        }
    }, 250);

    const restart = document.querySelector('.restart')

    restart.addEventListener('click', () => {
        result.classList.add('style', 'd-none');
        clearRadioButtons();

    });


});