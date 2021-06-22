let quiz = [
    {
        question: 'Как расшифровывается HTML?',
        a: 'HyperText Markup Language',
        b: 'Hyper Markup Language',
        c: 'HyperText Mark Language',
        correct: 'a'
    },

    {
        question: 'Какой сейчас год?',
        a: '2020',
        b: '2021',
        c: '2019',
        correct: 'b'
    },

    {
        question: 'Сколько лет Путину?',
        a: '69',
        b: '67',
        c: '68',
        correct: 'c'
    },

    {
        question: 'Как расшифровывается CSS?',
        a: 'Cascading Style Sheet',
        b: 'Cascading Style Sheets',
        c: 'Cascad Style Sheets',
        correct: 'b'
    },

    {
        question: 'Год выхода JavaScript...',
        a: '1995',
        b: '2001',
        c: '1996',
        correct: 'a'
    }
];

let ques = document.querySelector('.js-question');
let answerArr = document.querySelectorAll('.js-answer');
let var_a = document.getElementById('var_a');
let var_b = document.getElementById('var_b');
let var_c = document.getElementById('var_c');
let submit = document.querySelector('.submit');

let i = 0;
let count = 0;

function load(){
    delAnswers();

    ques.innerText = quiz[i].question;
    var_a.innerText = quiz[i].a;
    var_b.innerText = quiz[i].b;
    var_c.innerText = quiz[i].c;
}

function delAnswers(){
    answerArr.forEach(answerEl => 
        answerEl.checked = false)
}

function getAnswer()
{
    let answer = '';

    answerArr.forEach(answerEl => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function buttonClick(){
    let answer = getAnswer();

    if (answer){
        if (answer === quiz[i].correct){
            count++;
        }

        i++;
        
        if (i < quiz.length){
            load();
        } else {
            document.querySelector('.quiz').innerHTML = `<h2>Вы ответили правильно на ${count}/${quiz.length} вопросов!!!</h2>
            <button class="submit" onclick="location.reload()">Пройти заново</button> `
        }
    }
}

load();
submit.addEventListener('click', buttonClick);
