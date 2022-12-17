(() => {
    const fortune = document.querySelector('.fortune');
    const wheel = document.querySelector('.wheel-fortune__active');
    const startButton = document.querySelector('.fortune__button');
    let deg = 0;
    let limit = 0;
  
    const surprises = [
      {
        id: 1,
        name: 'Сегодня вы ничего не выиграли :(',
        img:
          'prizes/empty.png',
      },
      {
        id: 2,
        name: 'Вкинь-ка (на выбор)',
        img:
          'prizes/snusik.png',
      },
      {
        id: 3,
        name: 'Сегодня вы ничего не выиграли :(',
        img:
          'prizes/empty.png',
      },
      {
        id: 4,
        name: 'Пика одноразка',
        img: 'prizes/pika.png',
      },
      {
        id: 5,
        name: 'Сегодня вы ничего не выиграли :(',
        img: 'prizes/empty.png',
      },
      {
        id: 6,
        name: 'Maskking',
        img:
          'prizes/cigone.png',
      },
      {
        id: 7,
        name: 'Жидкость ачонет?/xylinet?',
        img:
          'prizes/achonet.png',
      },
      {
        id: 8,
        name: 'Сегодня вы ничего не выиграли :(',
        img: 'prizes/empty.png',
      },
      {
        id: 9,
        name: 'Сегодня вы ничего не выиграли :(',
        img:
          'prizes/empty.png',
      },
      {
        id: 10,
        name: '100 Баллов',
        img:
          'prizes/empty.png',
      },
      {
        id: 11,
        name: 'Сегодня вы ничего не выиграли :(',
        img:
          'prizes/empty.png',
      },
      {
        id: 12,
        name: '50 Баллов',
        img:
          'prizes/empty.png',
      },
      {
        id: 13,
        name: 'Сегодня вы ничего не выиграли :(',
        img:
          'prizes/empty.png',
      },
      {
        id: 14,
        name: 'Сегодня вы ничего не выиграли :(',
        img:
          'prizes/empty.png',
      },
      {
        id: 15,
        name: 'Сегодня вы ничего не выиграли :(',
        img:
          'prizes/empty.png',
      },
      {
        id: 16,
        name: 'Сегодня вы ничего не выиграли :(',
        img:
          'prizes/empty.png',
      },
      {
        id: 17,
        name: 'Сегодня вы ничего не выиграли :(',
        img:
          'prizes/empty.png',
      },
      {
        id: 18,
        name: 'Сегодня вы ничего не выиграли :(',
        img:
          'prizes/empty.png',
      },
      {
        id: 19,
        name: 'Сегодня вы ничего не выиграли :(',
        img:
          'prizes/empty.png',
      },
      {
        id: 20,
        name: 'Сегодня вы ничего не выиграли :(',
        img:
          'prizes/empty.png',
      },
      {
        id: 21,
        name: 'Сегодня вы ничего не выиграли :(',
        img:
          'prizes/empty.png',
      },
    ];
  
    const spin = () => {
      startButton.setAttribute('disabled', 'disabled');
      deg = Math.floor(5000 + Math.random() * 5000);
      wheel.style.transition = 'all 10s cubic-bezier(.4,.09,0,1.00)';
      wheel.style.transform = `rotate(${deg}deg)`;
      limit += 1;
    };
  
    const createSurprise = (array) => {
      const surprise = array.map((el) => {
        return `
        <div class="suprise">
          <div class="suprise-overlay"></div>
          <div class="suprise__item">
            <div class="suprise__close">X</div>
            <div class="suprise__name">${el.name}</div>
            <div class="suprise__img"><img src=${el.img} alt=${el.name}></div>
          </div>
        </div>`;
      });
  
      fortune.insertAdjacentHTML(
        'beforeend',
        surprise[Math.floor(Math.random() * surprise.length)]
      );
  
      const supriseClose = document.querySelector('.suprise__close');
  
      supriseClose.addEventListener('click', () => {
        const suprise = document.querySelector('.suprise');
        suprise.remove();
        startButton.removeAttribute('disabled', 'disabled');
      });
    };
  
    const endAnimation = () => {
      wheel.style.transition = 'none';
      const actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
    }
  
    startButton.addEventListener('click', () =>
      limit <= 0 ? spin() : startButton.setAttribute('disabled', 'disabled')
    );
  
    wheel.addEventListener('transitionend', () => {
      endAnimation()
      createSurprise(surprises);
    });
  })();
  