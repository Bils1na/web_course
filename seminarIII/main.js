// let num = 5;
// alert(num);

// num = 10;
// alert(num);

// const num1 = 10;

// console.log(num, num1);

// Задача 1: Получить от пользователя два числа и вывести в диалоговое окно сумму значений,
// которые ввел пользователь, вывод должен выглядеть так (пример):
// Результат сложения числе 5 и 2 равен 7.

// function sum(n1, n2) {
//     const res = n1 + n2;
//     return res;
// }

// const a = Number.parseFloat(prompt("Enter first number:"));
// const b = Number.parseFloat(prompt("Enter second number:"));
// // alert(`Sum of numbers ${a} and ${b} = ${a+b.toFixed(2)}`);
// const roundedSum = Math.round(sum(a, b) * 100) / 100;
// alert(`Sum of numbers ${a} and ${b} = ${roundedSum}`);

// Задача 2: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением 
// “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением 
// “Ну, вы держитесь там!”.

// confirm("Do you live well?") ? alert("So we're going to you!") : alert("Well, be strong!");


// Задача 3: перепишите код, используя конструкцию
// switch -
// case, запрашивая продукт через диалоговое окно.

// <script >
// let product = "бананы";

// if (product == "мандарины") {
//     alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "бананы") {
//     alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "груши") {
//     alert('Бананы и груши стоят 70 руб/кг.');
// } else {
//     alert('Нет такого продукта.');
// } <
// /script>

// const product = prompt("Enter name of fruit (banans, pears, mandarins and etc.)");
// switch(product.toLowerCase()) {
//     case "mandarinы":
//         alert("Mandarin is 100 rubles for kilogramm.");
//         break;
//     case "banans":
//     case "pears":
//         alert("Banans and pears are 70 rubles for kilogramm.")
//         break;
//     default:
//         alert("There is not this product.")
// }


// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.

// function getMaxEvenElement (nums) {
//     let result = Math.min.apply(Math, nums);

//     for (let index = 0; index < nums.length; index++) {
//         result = (nums[index] > result && index % 2 == 0) ? nums[index] : result;
//     }

//     return result;
// }

// let numbers = [0, 2, 4, 1, 3, 6, 9, 11];
// alert(getMaxEvenElement(numbers));


// Необходимо пользователя попросить ввести температуру в градусах Цельсия,
// преобразовать введенное пользователем значение в соответствующую температуру
// в градусах по Фаренгейту и вывести в alert сообщение с текстом:
//     "Цельсий: {C}, Фаренгейт: {F}"
// Где вместо { C }
// и { F }
// должны быть подставлены соответствующие значения, которые
// были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
//     градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Уточнение: пользователь всегда вводит корректное число.

const degrees = Number.parseFloat(prompt("Enter degrees"));
alert(`C: ${degrees} F: ${(9 / 5) * degrees + 32}`)