const correctAnswers = ['B', 'A', 'C'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();


    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1;
        }
    });

    // show the result
    result.querySelector('span').textContent = `${score}`;
    result.classList.remove('d-none');
    window.scrollTo(0, 0);
});