function countOddAndEven(arr) {
  let odd = 0,
    even = 0,
    zero = 0,
    notNum = 0;

  for (const element of arr) {
    if (typeof element !== "number") {
      notNum++;
    } else if (element == 0) {
      zero++;
    } else if (element % 2 == 0) {
      even++;
    } else odd++;
  }

  return `Количество четных элементов: ${even}\nКоличество нечетных элементов: ${odd}\nКоличество нулей: ${zero}\nКоличество не чисел: ${notNum}`;
}

console.log(
  countOddAndEven([1, 2, 3, 0, 0, NaN, [], "4", "5", "6", {}, 3.5, null])
);
