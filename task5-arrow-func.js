// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

const arrowFunc = (x, n) => {
    if (typeof x !== "number" || typeof n !== "number") {
        console.error("Параметры должны быть числами.");
        return;
    }

    return Math.pow(x, n);
}

console.log(arrowFunc(2, 0));
console.log(arrowFunc(2, 1));
console.log(arrowFunc(2, 2));
console.log(arrowFunc(2, 3));
console.log(arrowFunc(-2, -4));
console.log(arrowFunc(-2, -5));
console.log(arrowFunc(-2, -6));
console.log(arrowFunc(2, -7));
