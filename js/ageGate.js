// ageGate.js — логіка 18+ перевірки через localStorage

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('age-modal');
  const btnYes = document.getElementById('btn-yes');
  const btnNo = document.getElementById('btn-no');

  // Перевіряємо, чи користувач вже підтвердив повноліття
  const isAdult = localStorage.getItem('ageConfirmed');

  if (isAdult === 'true') {
    // Якщо вже підтверджено — не показуємо попап
    modal.style.display = 'none';
  } else {
    // Інакше — показуємо модальне вікно
    modal.style.display = 'flex';
  }

  // Якщо натиснуто "Так" — зберігаємо відповідь і ховаємо попап
  btnYes.addEventListener('click', () => {
    localStorage.setItem('ageConfirmed', 'true');
    modal.style.display = 'none';
  });

  // Якщо натиснуто "Ні" — редірект на зовнішній сайт (наприклад, Google)
  btnNo.addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
  });
});
localStorage.clear()