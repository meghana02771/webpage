document.querySelectorAll('.keyboard button').forEach(button => {
  button.addEventListener('click', () => {
    const input = document.getElementById('textInput');
    const value = button.textContent;

    if (button.classList.contains('space')) {
      input.value += ' ';
    } else if (button.classList.contains('backspace')) {
      input.value = input.value.slice(0, -1);
    } else if (button.classList.contains('clear')) {
      input.value = '';
    } else {
      input.value += value;
    }
  });
});
