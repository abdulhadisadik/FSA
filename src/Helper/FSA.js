export default function FSA(input) {
  // FSA: Finite State Automata
  const vocal = ["a", "i", "u", "e", "o"];
  const konsonan = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let data = [];
  const arrayOfInput = input.split("");
  if (konsonan.includes(arrayOfInput[arrayOfInput.length - 1])) {
    console.log("data adalah konsonan");
    arrayOfInput.forEach((value) => {
      if (value === arrayOfInput[arrayOfInput.length - 1]) {
        data.push(value + "꧀");
      } else {
        if (vocal.includes(value.toLowerCase())) {
          data.push(value);
        } else if (konsonan.includes(value.toLowerCase())) {
          data.push(value + "a");
        } else if (value === " ") {
          data.push(value);
        }
      }
    });
  } else {
    arrayOfInput.forEach((value) => {
      if (vocal.includes(value.toLowerCase())) {
        data.push(value);
      } else if (konsonan.includes(value.toLowerCase())) {
        data.push(value + "a");
      } else if (value === " ") {
        data.push(value);
      }
    });
  }
  return data.join("");
}
