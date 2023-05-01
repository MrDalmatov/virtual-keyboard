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

  keyboardContainer.addEventListener('mousedown', event => {
    event.preventDefault();
  });

  // Создаем строки клавиатуры
  const rows = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\u2191', 'Shift'],
    ['Ctrl', 'Alt', 'Cmd', 'Space', 'Cmd', '\u2190', '\u2193', '\u2192',  'Alt']
  ];

  rows.forEach(keys => {
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
        } else if  (key === 'Shift') {
          toggleShift();
        } else if (key === 'CapsLock') {
          toggleCapslock();
        } else {
          currentValue += key;
        }
        
        
        input.value = currentValue;
      });
    });
  });

  
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
    } else {
      virtualKey = document.querySelector(`.key-${key}`);
    }
  
    if (virtualKey) {
      virtualKey.classList.remove('active');
    }
  });
  

}





createKeyboardContainer(document.body);