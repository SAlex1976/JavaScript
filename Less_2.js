// Task 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
// Оператор инкремент префиксной формы увеличивает число на 1 и возвращает новое значение
d = b++; alert(d);           // 1
// Оператор инкремент постфиксной формы увеличивает число на 1, но возвращает старое значение
c = (2+ ++a); alert(c);      // 5
// Переменная a была увеличина на 1 раньше, а в этой строке к числу 2 прибавляется переменная a с новым значением еще
// раз увеличенная на 1 (2 + (2 + 1))
d = (2+ b++); alert(d);      // 4
// Переменная b была увеличина на 1 раньше, а в этой строке к числу 2 прибавляется переменная b со старым значением (2)
// и после этого значение переменной b увеличивается на 1 и равняется 3 (постфиксная форма вернула 2)
alert(a);                    // 3
// Переменная a была два раза инкрементирована (a = a + 1 в строке 3 и еще раз в строке 7) и получила значение 3
alert(b);                    // 3
// Переменная b была два раза инкрементирована (b = b + 1 в строке 5 и еще раз в строке 10) и получила значение 3

// Task 2
alert('Task 2')
var a = 2;
var x = 1 + (a *= 2);
// Совмещенный оператор *= является сокращенной записью a = a * 2 в этом примере
// переменной a будет присвоено число 4 и после сложения с числом 1 переменной x будет присвоено число 5
alert('x = ' + x);

// Task 3
alert('Task 3');
var a = Number(prompt('Введите первое число a'));
var b = Number(prompt('Введите второе число b'));
var rst;
if (a >= 0 && b >= 0) {
  rst = a - b;
  alert(`a - b = ${rst}`);
} else if (a < 0 && b < 0) {
  rst = a * b;
  alert(`a * b = ${rst}`);
} else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
  rst = a + b;
  alert(`a + b = ${rst}`);
}

// Task 4
alert('Task 4');
var a = prompt('Введите число от 0 до 15');
while (a < 16){
  switch (a) {
    case a:
      alert(a++);
  }
}

// Task 5
alert('Task 5');
function addition(x, y) {
  return (x + y);
}
function subtraction(x, y) {
  return (x - y);
}
function multiply(x, y) {
  return (x * y);
}
function division(x, y) {
  return (x / y);
}
var a = Number(prompt('Введите первое число'));
var b = Number(prompt('Введите второе число'));
alert(`a + b = ${addition(a, b)}`);
alert(`a - b = ${subtraction(a, b)}`);
alert(`a * b = ${multiply(a, b)}`);
alert(`a / b = ${division(a, b)}`);

// Task 6
function mathOperation(arg1, arg2, operation) {
  switch(operation){
    case 1:
      return arg1 + arg2;
      break;
    case 2:
      return arg1 - arg2;
      break;
    case 3:
      return arg1 / arg2;
      break;
    case 4:
      return arg1 * arg2;
      break;
  }
}
var arg1 = Number(prompt('Введите первое число'));
var arg2 = Number(prompt('Введите второе число'));
var operation = Number(prompt('Выберите действие\n 1 - сложение, 2 - вычитание, 3 - деление, 4 - умножение'));
alert(mathOperation(arg1, arg2, operation));

/* Task 7
Нестрогое равенство и сравнения > < >= <= работают по-разному.
Сравнения преобразуют null в число, рассматривая его как 0.
Поэтому выражение null >= 0 True, а null > 0 False.
Для нестрогого равенства == значений действует особое правило:
эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому.
Поэтому null == 0 False.
*/

// Task 8
function power(val, pow) {
  if (pow != 1) {
    return val *= power(val, pow - 1);
  } else {
    return val;
  }
}
var a = Number(prompt('Введите число'));
var b = Number(prompt('Введите степень'));
alert(power(a, b));
