onload = () => {
  const keys = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
    "RESET",
    "=",
  ];

  const keyBoard = document.querySelector(".keyBoard");
  keys.forEach((e) => {
    const key = document.createElement("button");
    const number = document.createElement("p");
    number.classList.add("keyNumber");
    number.innerHTML = e;
    key.classList.add("keys");
    if (e === "DEL") key.classList.add("grayButton");
    if (e === "RESET") {
      key.classList.add("grayButton");
      key.classList.add("resetButton");
    }
    if (e === "=") {
      key.classList.add("grayButton");
      key.classList.add("equalsButton");
    }
    key.appendChild(number);
    keyBoard.appendChild(key);
  });
};
