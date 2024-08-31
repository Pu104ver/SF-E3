// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

function isPrime(number) {
  if (typeof number !== "number" || number > 1000) {
    return "Данные неверны";
  }
  if (number < 2) {
    return "Число не является простым";
  }
  if (number === 2) {
    return "Число является простым";
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return "Число не является простым";
    }
  }
  return "Число является простым";
}

console.log(isPrime("1000"));
console.log(isPrime(1001));
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(317));
console.log(isPrime(555));
