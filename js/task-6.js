function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  destroyBoxes();

  const boxes = [];
  let size = 30; 

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginTop = '10px';
    boxes.push(box);
    size += 10;
  }

  controls.boxesContainer.append(...boxes);
}

function destroyBoxes() {
  controls.boxesContainer.innerHTML = '';
}

controls.createBtn.addEventListener('click', () => {
  const amount = Number(controls.input.value);

  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert('Please enter a valid number between 1 and 100');
    return;
  }

  createBoxes(amount);
  controls.input.value = '';
});

controls.destroyBtn.addEventListener('click', destroyBoxes);