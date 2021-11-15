'use strict';

// Task 1
function obj(num) {
    if (num != null && +num >= 0 && +num <= 999 && Number.isInteger(+num) == true) {
        return {
            units: Number(num) % 10, // вычисление единиц
            tens: Math.floor((Number(num) / 10) % 10), // вычисление десяток
            hundreds: Math.floor((Number(num) / 100)), // вычисление сотен
        }
    } else return {}; // возвращение пустого объекта, если num != 0...999
}
let num = prompt('Введите число от 0 до 999')
console.log(obj(num));

// Task 1.1

// стиль es5
function Product1(name, price) { // функция конструктор
    this.name = name;
    this.price = price;
}
// создание свойства в прототипе Product1 с функией скидки
Product1.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price / 100 * 25);
};
const prod1 = new Product1('Продукт 1', 300); // вызов функции конструктор
prod1.make25PercentDiscount(); // вызов метода (применение скидки)
console.log(prod1);

// стиль es6
class Product2 { // объявление класса
    constructor(name, price) { // метод класса для создания объекта
        this.name = name;
        this.price = price;
    }
    // создание свойства в прототипе Product2 с функией скидки
    make25PercentDiscount() { // создание метода
        this.price = this.price - (this.price / 100 * 25);
    }
}
const prod2 = new Product2('Продукт 2', 500); // вызов функции конструктор
prod2.make25PercentDiscount(); // вызов метода (применение скидки)
console.log(prod2);

// Task 1.2
// стиль es5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function () {
    this.text = prompt("Введите текст");
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const post = new Post('User1', "", "15.11.1921");
post.edit();
console.log(post);

const attachedPost = new AttachedPost('User2', '', '16.11.1921');
attachedPost.edit();
attachedPost.makeTextHighlighted();
console.log(attachedPost);

// стиль es6
class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit() {
        this.text = prompt("Введите текст");
    }
}

class AttachedPost2 extends Post2 {
    constructor(author, text, date) {
        super(author, text, date)
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const post2 = new Post2('User11', "", "15.11.1921");
post2.edit();
console.log(post2);

const attachedPost2 = new AttachedPost2('User22', '', '16.11.1921');
attachedPost2.edit();
attachedPost2.makeTextHighlighted();
console.log(attachedPost2);