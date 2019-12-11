// for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0) console.log(i);
// }

// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i = i + 2;
// }

let animals = ['😸', '👷🏻', '👨🏻‍🏫', '💂🏻', '🕺🏻', '😎'];
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

for (let animal of animals) {
    let nameIdx = Math.floor(Math.random() * names.length);

    console.log(`${names[nameIdx]} the ${animal}`);
}
// const num = 10000000;
// const arr = new Array(num);

// console.time("for");
// for (let i = 0; i < num; i++) {}
// console.timeEnd("for");

// console.time("while");
// let i = 0;
// while (i < num) { i++; }
// console.timeEnd("while");

// console.time("forEach");
// arr.forEach(elem => "");
// console.timeEnd("forEach");

// console.time("for...of");
// for (const elem of arr) {}
// console.timeEnd("for...of");

// var things = ["banana", "apple", "pear", "fruit", "spoons"]
// var x;
// for (x of things) {
//     document.write(x + "s" + "<br>");
// }