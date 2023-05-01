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
  input.focus();

  // Создаем контейнер клавиатуры
  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('keyboard');
  container.appendChild(keyboardContainer);

  const paragraph = document.createElement('p');
  paragraph.classList.add('text');
  paragraph.innerText = 'Для переключения языка используется сочетание клавиш ctrl + alt';
  container.appendChild(paragraph);

  const secondParagraph = document.createElement('p');
  secondParagraph.classList.add('text');
  secondParagraph.innerText = 'Калвиатура создана в операционной системе Mac OS';
  container.appendChild(secondParagraph);

  keyboardContainer.addEventListener('mousedown', event => {
    event.preventDefault();
  });

  // Создаем строки клавиатуры

  const keyboardLayouts = {
    en: {
      rows: [
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
        ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
        ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
        ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\u2191', 'Shift'],
        ['Ctrl', 'Alt', 'Cmd', 'Space', 'Cmd', '\u2190', '\u2193', '\u2192',  'Alt']
      ],
      language: 'en'
    },
    ru: {
      rows: [
        ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
        ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
        ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
        ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '\u2191', 'Shift'],
        ['Ctrl', 'Alt', 'Cmd', 'Space', 'Cmd', '\u2190', '\u2193', '\u2192',  'Alt']
      ],
      language: 'ru'
    }
  };

  let currentLayout = localStorage.getItem('currentLayout') || 'en';
  updateKeyboardLayout(currentLayout);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Control') {
      ctrlPressed = true;
    }
  
    if (event.key === 'Alt' && ctrlPressed) {
      currentLayout = currentLayout === 'en' ? 'ru' : 'en';
      updateKeyboardLayout(currentLayout);
      const lang = currentLayout === 'ru' ? 'ru-RU' : 'en-US';
      document.documentElement.lang = lang;
    }
  });
  
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Control') {
      ctrlPressed = false;
    }
  });

  function updateKeyboardLayout(layout) {
    keyboardContainer.innerHTML = '';
  
    keyboardLayouts[layout].rows.forEach(keys => {
      const row = document.createElement('div');
      row.classList.add('row');
      keyboardContainer.appendChild(row);
  
      keys.forEach((key, index) => {
        const button = document.createElement('button');
        button.innerText = key;
        button.classList.add('key');
  
        if (key === ';') {
          button.classList.add('key-Semicolon');
        } else if (key === '=') {
          button.classList.add('key-Equal');
        } else if (key === '/') {
          button.classList.add('key-Slash');
        } else if (key === '[') {
          button.classList.add('key-OpenBracket');
        } else if (key === ']') {
          button.classList.add('key-CloseBracket');
        } else if (key === '\\') {
          button.classList.add('key-Backslash');
        } else if (key === '\'') {
          button.classList.add('key-Apostrophe');
        } else if (key === ',') {
          button.classList.add('key-Comma');
        } else if (key === '.') {
          button.classList.add('key-Period');
        } else {
          button.classList.add(`key-${key}`);
        }  
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
          } else if (key === 'Shift') {
            
          } else if (key === 'Tab') {
            currentValue += '    ';
          } else if (key === 'Space') {
            currentValue += ' ';
          } else if (key === 'Ctrl') {

          } else if (key === 'Alt') {

          } else if (key === 'Cmd') {

          } else if (key === 'Del') {
            currentValue = '';
          } else {
            currentValue += key;
          } 
      
          input.value = currentValue;
        });
      });
    });
  }

  
  document.addEventListener('keydown', event => {
    const key = event.key;
    let virtualKey;
  
    if (key === ';') {
      virtualKey = document.querySelector('.key-Semicolon');
    } else if (key === '/') {
      virtualKey = document.querySelector('.key-Slash');
    } else if (key === '=') {
      virtualKey = document.querySelector('.key-Equal');
    } else if (key === '[') {
      virtualKey = document.querySelector('.key-OpenBracket');
    } else if (key === ']') {
      virtualKey = document.querySelector('.key-CloseBracket');
    } else if (key === '\\') {
      virtualKey = document.querySelector('.key-Backslash');
    } else if (key === '\'') {
      virtualKey = document.querySelector('.key-Apostrophe');
    } else if (key === ',') {
      virtualKey = document.querySelector('.key-Comma');
    } else if (key === '.') {
      virtualKey = document.querySelector('.key-Period');
    } else if (key === ' ') { 
      virtualKey = document.querySelector('.key-Space');
    } else {
      virtualKey = document.querySelector(`.key-${key}`);
    }
  
    if (virtualKey) {
      virtualKey.classList.add('active');
    }
  });
  
  document.addEventListener('keyup', event => {
    const key = event.key;
    let virtualKey;
  
    if (key === ';') {
      virtualKey = document.querySelector('.key-Semicolon');
    } else if (key === '/') {
      virtualKey = document.querySelector('.key-Slash');
    } else if (key === '=') {
      virtualKey = document.querySelector('.key-Equal');
    } else if (key === '[') {
      virtualKey = document.querySelector('.key-OpenBracket');
    } else if (key === ']') {
      virtualKey = document.querySelector('.key-CloseBracket');
    } else if (key === '\\') {
      virtualKey = document.querySelector('.key-Backslash');
    } else if (key === '\'') {
      virtualKey = document.querySelector('.key-Apostrophe');
    } else if (key === ',') {
      virtualKey = document.querySelector('.key-Comma');
    } else if (key === '.') {
      virtualKey = document.querySelector('.key-Period');
    } else if (key === ' ') { // добавлено условие для клавиши "Space"
      virtualKey = document.querySelector('.key-Space');
    } else {
      virtualKey = document.querySelector(`.key-${key}`);
    }
  
    if (virtualKey) {
      virtualKey.classList.remove('active');
    }
  });
  

}

createKeyboardContainer(document.body);