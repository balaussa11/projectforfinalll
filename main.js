// Қарапайым интерактив: навигацияға шерткенде секцияға жылжу
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
// Аккордеон: карточка ашылу/жабылу, бірақ барлық контент көрініп тұрады
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});
// Бет толық жүктелген соң бағандар өсе бастайды
window.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const height = bar.getAttribute('data-height');
        setTimeout(() => {
            bar.style.height = height + '%';
        }, 100); // кішкене кідіріспен анимация басталады
    });
});
