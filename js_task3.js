'use strict'

// Task 1
console.log('Task 1');
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + " - это ноль");
    } else if (i % 2 == 0) {
        console.log(i + ' - четное число');
    } else console.log(i + ' - нечетное число');
}

// Task 2
console.log('Task 2');
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Task 3
console.log('Task 3');
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (item) {
    item.price = item.price - (item.price * 0.15);
    console.log(item);
});

// Task 4
console.log('Task 4');
const product = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg"
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78
    },
];

const photoProduct = product.filter(item => 'photos' in item && item.photos.length >= 1);
console.log(photoProduct);
const sortProduct = product.sort(function (content1, content2) {
    return content1.price - content2.price;
});
console.log(sortProduct);

// Task 5
console.log('Task 5');
for (let i = 0; i < 10; console.log(i++));

// Task 6
console.log('Task 6');
let brick = "";
for (let i = 1; i < 21; i++) {
    console.log(brick = brick + "X");
}