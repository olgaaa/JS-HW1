//Task 1
//Создать цикл на 10 итераций. На каждой итерации если i четное, то вывести в консоль слово Fiz, если i не четное, то вывести в консоль слово Buz, если i кротное цифре 3, то вывести FizBuz.

for (let i = 0; i < 10; i++) {
  let number = prompt('Enter a positive integer');

  if (number % 3 === 0) {
    console.log('FizBuz');
  } else if (number % 2 === 0) {
    console.log('Fiz');
  } else {
    console.log('Buz');
  }
}

//Task 2
//Написать логику нахождения факториала числа 10.
let result = 1;
for (let i = 10; i > 0; i--) {
  result = i * result;
}
console.log(result);

//Task 3
//В пачке бумаги 500 листов. За неделю в офисе расходуется 1200 листов. Какое наименьшее количество пачек бумаги нужно купить в офис на 8 недель?

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let resultTask3 = ((consumptionPerWeek * weeksAmount) / sheetsInReamPaper) | 0;
console.log(resultTask3);

//Task 4
//Создать функцию, которая выведет в консоль номер этажа и номер подъезда по номеру квартиры. Этажей у нас 9, квартир на этаже по 3
//Запрещавется использовать какое-либо округление (Math.ceil, Math.floor, ~~, parseInt).

const roomsOnFloor = 3;
const floors = 9;
let porch = 0;
let floor = 0;
let roomNumber = prompt(
  'Enter a room number, which is a three-digit number or more'
);

if (roomNumber % (roomsOnFloor * floors) === 0) {
  porch = roomNumber / (roomsOnFloor * floors);
} else {
  porch = (roomNumber / (roomsOnFloor * floors) + 1) | 0;
}

if (roomNumber / roomsOnFloor <= floors && roomNumber % roomsOnFloor === 0) {
  floor = roomNumber / roomsOnFloor;
} else if (
  roomNumber / roomsOnFloor <= floors &&
  roomNumber % roomsOnFloor !== 0
) {
  floor = (roomNumber / roomsOnFloor + 1) | 0;
} else if (
  roomNumber / roomsOnFloor > floors &&
  roomNumber % roomsOnFloor === 0
) {
  floor = roomNumber / roomsOnFloor - floors * (porch - 1);
} else {
  floor = (roomNumber / roomsOnFloor - floors * (porch - 1) + 1) | 0;
}
console.log('Floor:' + floor + ' Porch:' + porch);

//Task 5
//Вывести в консоль пирамиду. Переменная указывает количество строк из которых построится пирамида. Пирамида должна строится в одинаковом визуально виде между собой, но строго учитывая кол-во строк

let medianNumber = prompt('Please enter the number of levels for pyramid:');
buildPyramid(medianNumber);

function buildPyramid(medianNumber) {
  let width = 2 * medianNumber - 1;
  let midpoint = Math.floor(width / 2);
  let level = '';

  for (i = 0; i < medianNumber; i++) {
    level = '';
    for (j = 0; j < width; j++) {
      if (j < midpoint - i || j > midpoint + i) {
        level += '-';
      } else {
        level += '#';
      }
    }
    console.log(level);
  }
}
