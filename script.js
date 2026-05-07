const facts = [
    "Тараканы могут жить без головы неделю.",
    "В главном меню Minecraft есть шанс 0.01%, что вместо названия будет написано Minceraft.",
    "У коал отпечатки пальцев почти не отличаются от человеческих.",
    "Если ты будешь биться головой об стену, ты сожжешь 150 калорий в час.",
    "Огурцы — это ягоды."
];

const btn = document.getElementById('next-btn');
const factText = document.getElementById('fact');
const secSpan = document.getElementById('sec');

btn.addEventListener('click', () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factText.innerText = randomFact;
    // Можно добавить звук при клике, если хочешь
});

let seconds = 0;
setInterval(() => {
    seconds++;
    secSpan.innerText = seconds;
}, 1000);
