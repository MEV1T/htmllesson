const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'Запустить ПК') {
    button.value = 'Выключить ПК';
    paragraph.textContent = 'ПК запущен!';
  } else {
    button.value = 'Запустить ПК';
    paragraph.textContent = 'ПК выключен.';
  }
}
