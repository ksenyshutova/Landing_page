'use strict';

const thought = document.querySelector('.thought');
const tournament = document.querySelector('.tournament');
const arrow = document.querySelector('.arrow_button');
const btn = document.querySelector('.btn_info');
const person = Array.from(document.querySelectorAll('.person'));
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const mainContainer = document.querySelector('.main_container');
const subordinateContainer = document.querySelector('.subordinate_container');
const participants = document.querySelector('.participants');

if (window.screen.width > 640) {
    thought.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector('.lecture').scrollIntoView({ behavior: 'smooth' });
    });

    tournament.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector('.session').scrollIntoView({ behavior: 'smooth' });
    });

    function changeValue() {
        if (btn.innerHTML === '3') {
            btn.textContent = '6';
        } else {
            btn.textContent = '3';
        }
        person.forEach(el => {
            el.classList.toggle('person_hidden');
        });
    }

    leftArrow.addEventListener('click', event => {
        event.preventDefault();
        clearInterval(timer);
        if (btn.innerHTML === '3') {
            leftArrow.style.background = 'rgb(214, 214, 214)';
            return;
        } else {
            btn.textContent = '3';
            person.forEach(el => {
                el.classList.toggle('person_hidden');
            });
        }
        makeTimer();
    });

    rightArrow.addEventListener('click', event => {
        event.preventDefault();
        clearInterval(timer);
        if (btn.innerHTML === '6') {
            rightArrow.style.background = 'rgb(214, 214, 214)';
            return;
        } else {
            btn.textContent = '6';
            person.forEach(el => {
                el.classList.toggle('person_hidden');
            });
        }
        makeTimer();
    });

    let timer = 0;
    function makeTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            changeValue();
        }, 4000);
        leftArrow.style.background = 'rgb(49, 49, 49)';
        rightArrow.style.background = 'rgb(49, 49, 49)';
    }
    makeTimer();
}

if (window.screen.width <= 640) {
    mainContainer.innerHTML = `<h2 class="lecture title_main_post">Чтобы поддержать Международный васюкинский турнир</h2><img class="size_picture" src="images/people.png" alt="chessplayers"><h2 class="title_main_post">посетите лекцию на
тему: <a class="idea_link" href="#0">«Плодотворная дебютная идея»</a></h2>`;

    thought.addEventListener('touchend', event => {
        event.preventDefault();
        document.querySelector('.lecture').scrollIntoView({ behavior: 'smooth' });
    });

    tournament.addEventListener('touchend', event => {
        event.preventDefault();
        document.querySelector('.session').scrollIntoView({ behavior: 'smooth' });
    });

    let counter = 0;
    participants.append(arrow);

    function changeValue() {
        counter = Number(btn.innerHTML) - 1;
        if (counter > 4) {
            counter = 0;
            person.forEach(el => {
                el.classList.remove('person_active');
            });
            btn.textContent = `${counter + 1}`;
            person[counter].classList.add('person_active');
            return;
        }
        ++counter;
        person.forEach(el => {
            el.classList.remove('person_active');
        });
        btn.textContent = `${counter + 1}`;
        person[counter].classList.add('person_active');
    }

    leftArrow.addEventListener('touchend', event => {
        event.preventDefault();
        clearInterval(timer);
        counter = Number(btn.innerHTML) - 1;
        if (btn.innerHTML === '1') {
            leftArrow.style.background = 'rgb(214, 214, 214)';
            return;
        } else {
            --counter;
            person.forEach(el => {
                el.classList.remove('person_active');
            });
            btn.textContent = `${counter + 1}`;
            person[counter].classList.add('person_active');
        }
        makeTimer();
    });

    rightArrow.addEventListener('touchend', event => {
        event.preventDefault();
        clearInterval(timer);
        counter = Number(btn.innerHTML) - 1;
        if (btn.innerHTML === '6') {
            rightArrow.style.background = 'rgb(214, 214, 214)';
            return;
        } else {
            changeValue();
        }
        makeTimer();
    });

    let timer = 0;
    function makeTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            changeValue();
        }, 4000);
        leftArrow.style.background = 'rgb(49, 49, 49)';
        rightArrow.style.background = 'rgb(49, 49, 49)';
    }
    makeTimer();

    subordinateContainer.insertAdjacentHTML('afterend',
        `<article class="history history_active">
        <img class="airplane" src="images/airplane.png" alt="airplane">
			<div class="unit unit1">
				<div class="unit_info">1</div>Строительство железнодорожной магистрали Москва-Васюки
			</div>
			<div class="unit">
				<div class="unit_info">2</div>Открытие фешенебельной гостиницы «Проходная пешка» и других
				небоскрёбов
			</div>
		</article>
		<article class="history">
			<div class="unit">
				<div class="unit_info">3</div>Поднятие сельского хозяйства в радиусе на тысячу километров:
				производство
				овощей,
				фруктов, икры, шоколадных конфет
			</div>
		</article>
		<article class="history">
			<div class="unit">
				<div class="unit_info">4</div>Строительство дворца для турнира
			</div>
			<div class="unit">
				<div class="unit_info">5</div>Размещение гаражей для гостевого автотранспорта
			</div>
		</article>
		<article class="history">
			<div class="unit">
				<div class="unit_info">6</div>Постройка сверхмощной радиостанции для передачи всему миру
				сенсационных результатов
			</div>
		</article>
		<article class="history">
			<div class="unit airport">
				<div class="unit_info">7</div>Создание аэропорта «Большие Васюки» с регулярным отправлением
				почтовых самолётов и
				дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн
			</div>
		</article>
        <div class="scroll">
			<button type="button" class="btn prev_btn"></button>
			<a href="#" class="slider_dot slider_dot_active"></a>
			<a href="#" class="slider_dot"></a>
			<a href="#" class="slider_dot"></a>
			<a href="#" class="slider_dot"></a>
			<a href="#" class="slider_dot"></a>
			<button type="button" class="btn next_btn"></button>
		</div>`
    );

    const prev = document.querySelector('.prev_btn');
    const next = document.querySelector('.next_btn');
    const sliderDot = Array.from(document.querySelectorAll('.slider_dot'));
    const history = Array.from(document.querySelectorAll('.history'));

    let count = 0;
    prev.addEventListener('touchend', event => {
        event.preventDefault();
        if (count <= 0) {
            count = 0;
            prev.style.background = 'rgb(214, 214, 214)';
            return;
        }
        prev.style.background = 'rgb(49, 49, 49)';
        next.style.background = 'rgb(49, 49, 49)';
        sliderDot.forEach(el => {
            el.classList.remove('slider_dot_active');
        });
        --count;
        let currentDot = sliderDot[count];
        currentDot.classList.add('slider_dot_active');
        history.forEach(el => {
            el.classList.remove('history_active');
        });
        let currentHistory = history[count];
        currentHistory.classList.add('history_active');
    });

    next.addEventListener('touchend', event => {
        event.preventDefault();
        if (count >= 4) {
            count = 4;
            next.style.background = 'rgb(214, 214, 214)';
            return;
        }
        prev.style.background = 'rgb(49, 49, 49)';
        next.style.background = 'rgb(49, 49, 49)';
        sliderDot.forEach(el => {
            el.classList.remove('slider_dot_active');
        });
        ++count;
        let currentDot = sliderDot[count];
        currentDot.classList.add('slider_dot_active');
        history.forEach(el => {
            el.classList.remove('history_active');
        });
        let currentHistory = history[count];
        currentHistory.classList.add('history_active');
    });
}