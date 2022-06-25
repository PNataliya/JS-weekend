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
// ======================
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

 const arrTwo = ['BEST', 'the', 'foo', 'is', 'JS'];

function arrToString(arr, idx) {
    return arr.slice(0, idx).concat(arr.slice(idx + 1)).reverse().join(' ');
}
console.log(arrToString(arrTwo, 2));