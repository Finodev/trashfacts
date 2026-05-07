const facts = [
    "Свиньи не могут смотреть в небо физически.",
    "676767 ахахах бурмалда",
    "о будильник",
    "67-самая смехуятинка",
    "Венера вращается в другую сторону, не как остальные планеты.",
    "У медуз нет мозга, сердца и костей. Просто вода.",
    "Человек за всю жизнь съедает около 8 пауков во сне (но это миф, хотя звучит мерзко).",
    "Кетчуп в 1830-х продавали как лекарство от расстройства желудка.",
    "Лего производит больше шин в год, чем любая компания в мире.",
    "Улитка может спать три года.",
    "Штрих-коды сканируют белые промежутки, а не черные линии.",
    "Бегемоты бегают быстрее человека.",
    "Саудовская Аравия импортирует верблюдов из Австралии.",
    "В Майнкрафте шанс 0.01%, что в меню будет написано Minceraft.",
    "Коровы находят друзей и сильно грустят, когда их разлучают.",
    "Твой телефон в 10 раз грязнее, чем сиденье унитаза."
];

const btn = document.getElementById('next-btn');
const factDisplay = document.getElementById('fact');
const secDisplay = document.getElementById('sec');

btn.addEventListener('click', () => {
    // Добавляем эффект исчезновения перед сменой текста
    factDisplay.style.opacity = 0;
    
    setTimeout(() => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factDisplay.innerText = randomFact;
        factDisplay.style.opacity = 1;
    }, 200);
});

// Плавное появление текста
factDisplay.style.transition = "opacity 0.2s";

// Таймер жизни
let seconds = 0;
setInterval(() => {
    seconds++;
    secDisplay.innerText = seconds;
}, 1000);
