// const a = {};
// const b = {};
// const c = {
//   d: 1,
//   e: 4,
// };
// ============================
// c[a] = 3;
// c[b] = 4;
// console.log(c);

// const result1 = 'hello' ?? 'world';
// console.log(result1);

// const result2 = 0 ?? 5;
// console.log(result2);

// const result3 = '' ?? 'javascript';
// console.log(result3);

// const result4 = false ?? true;
// console.log(result4);

// const result5 = null ?? 'not null';
// console.log(result5);

// const result6 = undefined ?? 'defined';
// console.log(result6);

// let message = null;
// const hello = 'Hi JavaScript';
// const result7 = message ?? hello;
// console.log(result7);
// const result6 = null ?? NaN;
// console.log(result6);

//=======================

// const nums = [1, 3, 8, 15, 9, 13];
// const [n] = nums;
// console.log(n);
// ======================
//додайте "Маракуя" в кінець
// замініть значення "Борщ" на "Роли"
// видаліть перший елемент масиву та виведіть його в консоль
// додайте "Вассабі" та "Угорь" на початок масиву

// const menu = ['Суші', 'Борщ'];
// menu.push('Маракуя');
// console.log(menu);

// menu.splice(1, 1, 'Роли');
// console.log(menu);

// console.log(menu.shift());

// menu.unshift('Вассабі', 'Угорь');
// console.log(menu);

// Записать массив, const arr = [“BEST”, “the”, “foo”, “is”,  “JS” ]
// развернуть массив,
// вырезать foo,
// перевести его в строку разделенную пробелами

// const arr = ['BEST', 'the', 'foo', 'is', 'JS'];
// const arrReverse = arr.reverse();
// console.log(arrReverse);
// const arrClean = arrReverse.splice(2, 1);
// console.log(arrReverse);
// console.log(arrClean);
// console.log(arrReverse.join(' '));
// ======================

//  const arrTwo = ['BEST', 'the', 'foo', 'is', 'JS'];

// function arrToString(arr, idx) {
//     return arr.slice(0, idx).concat(arr.slice(idx + 1)).reverse().join(' ');
// }
// console.log(arrToString(arrTwo, 2));


// const arr = ["BEST", "the", "foo", "is", "JS"];
// const arrRevers = arr.reverse();
// console.log(arrRevers);
// ======= task 2 ================
// Создать функцию которая принимает массив обектов
// создает пустой обектб состоящий из 2-х ключей entities byId
const inputData = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 4, name: "Item 4" },
  { id: 7, name: "Item 7" },
];

function dataNormalize(datas) {
  const objectData = {};
  const arrayId = [];
  const resultData = {};
  datas.forEach(data => {
    let elementId = data.id;
    objectData[elementId] = data;
    arrayId.push(elementId);
  });
  resultData.entities = objectData;
  resultData.byId = arrayId;
  console.log(resultData);
  return resultData;
}
dataNormalize(inputData);



//   it('should return normalized data', () => {
//     expect(normalize(inputData)).toEqual({
//       entities: {
//         1: { id: 1, name: "Item 1" },
//         2: { id: 2, name: "Item 2" },
//         4: { id: 4, name: "Item 4" },
//         7: { id: 7, name: "Item 7" },
//       },
//       byId: [1, 2, 4, 7],
//     });
//   });
// ====== task 3=============
// "задача Автопарк аналогичная 41 испозьзуем цикл for of(подумайте как решить вопрос с индексом)
// при запросе возвращаем все машины, если машин нет(длинна массива), return We don`t  have any taxi yet, -  добавить машину можно,
// но есть дополнительное условие, лимит по пробегу, пробег через промпт запрашиваем у пользователя(проверяем типы данных),
// если есть машина или лимит не подходит то возвращаем return `Sorry! We don't need ${newCar.brand}!`, - удаляем машину по имени,
// если нет то возвращаем return `We don't have ${carName} in our taxi Park!` - обновляем машине пробег - находим машину
// по бренду и заменяем пробег если нет такой машины то return `No such ${carName} in our taxi Park - can't update mileage!`"
// const taxiPark = {
//   cars: [
//     { brand: 'Mazda', mileage: 17 },
//     { brand: 'Honda', mileage: 80 },
//     { brand: 'Nissan', mileage: 50 },
//   ],
//   getCars() {
//     return this.cars;
//   },
//   addCar(newCar) {
//     const limit = 200;
//     for (const car of this.cars) {
//       if (car.brand === newCar.brand || newCar.mileage >= limit) {
//         return `Sorry! We don't need ${newCar.brand}!`;
//       };
//     };
//     this.cars.push(newCar);
//   },
//   removeCar(carName) {
//     for (const car of this.cars) {
//       let idx = this.cars.indexOf(car);
//       if (carName === this.cars[idx].brand) {
//         console.log(idx);
//         return this.cars.splice(idx, 1);
//       }
//     }
//     return `We don't have ${carName} in our taxi Park!`;
//   },
//   updateCarMileage(carName, newCarMileage) {
//     for (const car of this.cars) {
//       let idx = this.cars.indexOf(car);
//       if (carName === this.cars[idx].brand) {
//         console.log(idx);
//         return this.cars[idx].mileage = newCarMileage;
//       }
//     }
//     return `No such ${carName} in our taxi Park - can't update mileage!`;
//   },
// };
// console.log(taxiPark.getCars());
// console.log(taxiPark.addCar({ brand: 'Toyota', mileage: 40 }));
// console.log(taxiPark.addCar({ brand: 'Mazda', mileage: 10 }));
// console.log(taxiPark.addCar({ brand: 'Volvo', mileage: 109 }));
// console.log(taxiPark.getCars());
// console.log(taxiPark.removeCar('Audi'));
// console.log(taxiPark.getCars());
// console.log(taxiPark.removeCar('Honda'));
// console.log(taxiPark.getCars());
// console.log(taxiPark.updateCarMileage('Nissan', 75));
// console.log(taxiPark.getCars());
// console.log(taxiPark.updateCarMileage('BMW', 36));
// console.log(taxiPark.getCars());