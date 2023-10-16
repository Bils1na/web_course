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

const answer = (confirm("Do you live well?") == 1) ? alert("So we're going to you!") : alert("Well, be strong!");
