'use strict';

// Task 4
/**
 * Функция сложения чисел
 * @param {number} a Первое число
 * @param {number} b Второе число
 * @returns Возвращает сумму чисел
 */
function sum(a, b) {
    return(a + b);
}

/**
 * Функция вычитания чисел
 * @param {number} a Первое число
 * @param {number} b Второе число
 * @returns Возвращает разницу чисел
 */
function subtraction(a, b) {
    return(a - b);
}

/**
 * Функция деления чисел
 * @param {number} a Первое число
 * @param {number} b Второе число
 * @returns Возвращает результат деления чисел
 */
function division(a, b) {
    return(a / b);
}

/**
 * Функция умножения чисел
 * @param {number} a Первое число
 * @param {number} b Второе число
 * @returns Возвращает результат умножения чисел
 */
function multiplication(a, b) {
    return(a * b);
}

// Task 5
/**
 * Выводит на экран результат работы функций, выполняющих операции с числами пользователя
 * @param {number} arg1 Первое число пользователя
 * @param {number} arg2 Второе число пользователя
 * @param {number} operation Номер операции
 */
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 1:
            alert('arg1 + arg2 = ' + sum(arg1, arg2));
            break;
        case 2:
            alert('arg1 - arg2 = ' + subtraction(arg1, arg2));
            break;
        case 3:
            alert('arg1 / arg2 = ' + division(arg1, arg2));
            break;
        case 4:
            alert('arg1 * arg2 = ' + multiplication(arg1, arg2));
            break;
        default:
            alert('Нет такой операции');
    }
}

// Task 6
/**
 * Функция слово рубль в правильном падеже
 * @param {number} money Сумма введенная пользователем
 * @param {string} strMoney Сумма введенная пользователем преобразованная в строку
 * @returns {string} рубль в правильном падеже
 */
function caseWord(money) {
    let strMoney = String(money);
    if (strMoney.length == 1 && strMoney == 0 || strMoney.length == 1 && strMoney > 4) {
        return 'рублей';
    } else if (strMoney.length > 1 && strMoney.charAt(strMoney.length - 2) == 1) {
        return 'рублей';
    } else if (strMoney.length >= 1 && strMoney.charAt(strMoney.length - 1) == 1) {
        return 'рубль';
    } else return 'рубля';
}