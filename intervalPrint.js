// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

function intervalPrint(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    console.error("Оба параметра должны быть числами.");
    return;
  }
  if (number1 > number2) {
    console.error("Первый параметр должен быть меньше или равен второму.");
    return;
  }

  let i = number1;
  const interval = setInterval(() => {
    console.log(i);
    i++;
    if (i > number2) {
      clearInterval(interval);
    }
  }, 1000);
}

intervalPrint(5, 10);
