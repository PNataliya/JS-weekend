// ============================Замыкание===================================
// создать генератор валидатора
// результатом вызова родит. фун-ии будет дочерняя
// можно содать разного рода валидацию
// RegExp.test(value) - nameValidator, phoneValidator, emailValidator
// ребенок получает доступ к закрытой переменной родителя

const generateValidator = RegExp => {
  return value => {
    //   ребенок
    return RegExp.test(value);
  };
};

const nameValidator = generateValidator(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u);

const phoneValidator = generateValidator(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);

const emailValidator = generateValidator(
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
);

console.log(nameValidator('Poly'));
console.log(nameValidator('5467'));
console.log(phoneValidator('Mango'));
console.log(phoneValidator('+380502388238'));
console.log(emailValidator('krosh@org.ua'));
console.log(emailValidator('aJax'));
