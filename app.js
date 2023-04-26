function createKeyboardContainer(parentElement) {
  // Создаем главный-центрирующий контейнер
  const container = document.createElement('div');
  container.classList.add('container');
  parentElement.appendChild(container);

  // Заголовок клавиатуры
  const title = document.createElement('h1');
  title.classList.add('keyboard-title');
  title.innerText = 'RSS Виртуальная клавиатура';
  container.appendChild(title);

  // Создаем инпут для ввода букв
  const input = document.createElement('textarea');
  input.id = 'input';
  input.rows = '5';
  input.cols = '50';
  container.appendChild(input);

  // Создаем контейнер клавиатуры
  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('keyboard');
  container.appendChild(keyboardContainer);

  // Создаем строки клавиатуры
  const rows = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\u2191', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '\u2190', '\u2193', '\u2192',  'Ctrl']
  ];

  rows.forEach(keys => {
    const row = document.createElement('div');
    row.classList.add('row');
    keyboardContainer.appendChild(row);

    keys.forEach((key, index) => {
      const button = document.createElement('button');
      button.innerText = key;
      button.classList.add('key');
      button.classList.add(`key-${key}`);
      row.appendChild(button);

      if (key === 'Shift') {
        if (index === 0) {
          button.classList.add('shift-left');
        } else {
          button.classList.add('shift-right');
        }
      }

      button.addEventListener('click', () => {
        let currentValue = input.value;

        if (key === 'Backspace') {
          currentValue = currentValue.slice(0, -1);
        } else if (key === 'Enter') {
          currentValue += '\n';
        } else {
          currentValue += key;
        }

        input.value = currentValue;
      });
    });
  });
}



createKeyboardContainer(document.body);