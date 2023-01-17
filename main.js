(() => {
    const fortune = document.querySelector('.fortune');
    const wheel = document.querySelector('.wheel-fortune__active');
    const startButton = document.querySelector('.fortune__button');
    let deg = 0;
    let limit = 0;
  
    const surprises = [
      {
        id: 1,
        name: 'Удача где-то рядом, попробуйте еще раз',
        img:
          'empty.png',
      },
      {
        id: 2,
        name: 'Поздравляем! Вы выиграли: Вкинь-ка (на выбор)',
        img:
          'snusik.png',
      },
      {
        id: 3,
        name: 'Удача где-то рядом, попробуйте еще раз',
        img:
          'empty.png',
      },
      {
        id: 4,
        name: 'Поздравляем! Вы выиграли: Пика одноразка',
        img: 'pika.png',
      },
      {
        id: 5,
        name: 'Удача где-то рядом, попробуйте еще раз',
        img: 'empty.png',
      },
      {
        id: 6,
        name: 'Поздравляем! Вы выиграли: Maskking',
        img:
          'cigone.png',
      },
      {
        id: 7,
        name: 'Поздравляем! Вы выиграли: Жидкость ачонет?',
        img:
          'achonet.png',
      },
      {
        id: 8,
        name: 'Удача где-то рядом, попробуйте еще раз',
        img: 'empty.png',
      },
      {
        id: 9,
        name: 'Поздравляем! Вы выиграли: Жидкость xylinet?',
        img:
          'xylinet.png',
      },
      {
        id: 10,
        name: 'Поздравляем! \n Вы выиграли: 100 Баллов',
        img:
          'empty.png',
      },
      {
        id: 11,
        name: 'Удача где-то рядом, попробуйте еще раз',
        img:
          'empty.png',
      },
      {
        id: 12,
        name: 'Поздравляем! \n Вы выиграли: 50 Баллов',
        img:
          'empty.png',
      },
      {
        id: 13,
        name: 'Удача где-то рядом, \n попробуйте еще раз',
        img:
          'empty.png',
      },
      {
        id: 14,
        name: 'Удача где-то рядом, попробуйте еще раз',
        img:
          'empty.png',
      },
      {
        id: 15,
        name: 'Поздравляем! Вы выиграли: Товар по 100',
        img:
          'empty.png',
      },
      {
        id: 16,
        name: 'Удача где-то рядом, попробуйте еще раз',
        img:
          'empty.png',
      },
      {
        id: 17,
        name: 'Вы выиграли главный приз! Поздравляем!',
        img:
          'empty.png',
      },
    ];
  
    const spin = () => {
      startButton.setAttribute('disabled', 'disabled');
      deg = Math.floor(3000 + Math.random() * 3000);
      wheel.style.transition = 'all 5s cubic-bezier(.4,.09,0,1.00)';
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

  var timer = false;
  var reloadTime = 30000; // ms

function reloadTimer() {
  if (!!timer) clearTimeout(timer);
  timer = setTimeout(function(){ top.location.reload(); }, reloadTime);
  }
  