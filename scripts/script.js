onload = () => {
  const addComma = (num) => {
    let str = num.split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str[0].join["."];
  };

  const reset = () => {
    screenText.innerHTML = "";
    num = "";
  };

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
  const screenText = document.querySelector(".screenText");
  let num = "";

  keys.forEach((e) => {
    const key = document.createElement("button");
    const number = document.createElement("p");
    number.classList.add("keyNumber");
    number.innerHTML = e;
    key.classList.add("keys");
    if (e === "DEL") {
      key.classList.add("grayButton");
      key.addEventListener("click", () => {
        //   screenText.innerHTML = screenText.innerHTML.slice(0, -1);
        num = num.slice(0, -1);
        let str = num.split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        screenText.innerHTML = str.join(".");
      });
    }
    if (e === "RESET") {
      key.classList.add("grayButton");
      key.classList.add("resetButton");
      key.addEventListener("click", () => {
        reset();
      });
    }
    if (e === "=") {
      key.classList.add("grayButton");
      key.classList.add("equalsButton");
      key.addEventListener("click", () => {
        reset();
      });
    }
    key.addEventListener("click", () => {
      if (!isNaN(parseInt(e)) && 14 > screenText.innerHTML.length) {
        num += e;
        screenText.append(e);
        let str = num.split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        screenText.innerHTML = str.join(".");
      }
    });
    key.appendChild(number);
    keyBoard.appendChild(key);
  });
};
