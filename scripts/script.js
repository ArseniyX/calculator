onload = () => {
  const printResult = (num) => {
    const arr = num.split(".");
    arr[0] = arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    screenText.innerHTML = arr.join(".");
  };

  const writeResult = (arr) => {
    return eval(arr.join("")).toString();
  };

  // reset the display and num
  const reset = () => {
    screenText.innerHTML = "0";
    num = "0";
    resetSymbol();
  };

  // reset the arithmetic symbol
  const resetSymbol = () => {
    if (prevEl != 0) {
      prevEl.classList.remove("tappedSymbol");
    }
    prevEl = 0;
    prevS = "";
  };

  // Reset button Listener (RESET)
  const resetBtnListener = () => {
    reset();
    calcArr = [];
  };

  // Delete button Listener (DEL)
  const delBtnListener = () => {
    num = num.slice(0, -1);
    num === "" ? num = "0" : printResult(num);

    resetSymbol();
  };

  // Equals Listener (=)
  const equalsBtnListener = () => {
    if (calcArr[0] !== undefined || num !== "") {
      calcArr.push(num);
      // console.log(num, calcArr);
      reset();
      const result = writeResult(calcArr);
      printResult(result);
      // console.log("Equals start:", calcArr, num, writeResult(calcArr));
      calcArr = [];
      num = result;
    }
  };

  // Dot listener (.)
  const dotBtnListener = () => {
    // if (screenText.innerHTML[0] === "0") num += "0";
    if (!screenText.innerHTML.includes(".")) {
      num += ".";
      screenText.append(".");
    }
  };

  // (+) (-) (*) (/)
  const symbolBtnListener = (e, key) => {
    console.log("before: ", calcArr, prevEl, prevS);
    if (prevEl === 0 && prevS === "") {
      calcArr.push(num, e);
      key.classList.toggle("tappedSymbol");
    } else {
      calcArr[calcArr.length - 1] = e;
      prevEl.classList.toggle("tappedSymbol");
      key.classList.toggle("tappedSymbol");
    }

    if (calcArr.length % 2 === 0 && calcArr.length > 3) {
      calcArr.pop();
      const result = eval(calcArr.join("")).toString();
      calcArr = [result, e];
      reset();
      resetSymbol();
      printResult(result);
    }

    prevEl = key;
    prevS = e;

    console.log("after: ", num, calcArr, prevEl, prevS);
  };

  const numberBtnListener = (e) => {
    if (calcArr.length % 2 === 0 && prevEl !== 0) {
      reset();
    }

    if (num === "0") num = ""
    console.log(num, e)
    if (num.length < 12) {
      num += e;
      
      printResult(num);
    }

    console.log(screenText.innerHTML);

    resetSymbol();
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
    "*",
    "RESET",
    "=",
  ];

  let prevEl = 0;
  let prevS = "";
  let calcArr = [];

  const keyBoard = document.querySelector(".keyBoard");
  const screenText = document.querySelector(".screenText");
  screenText.innerHTML = "0";
  let num = "0";

  keys.forEach((e) => {
    const key = document.createElement("button");

    e !== "*" ? key.append(e) : key.append("x");
    key.classList.add("keys");

    if (e === "DEL") {
      key.classList.add("grayButton");
      key.addEventListener("click", delBtnListener);
    }
    if (e === "RESET") {
      key.classList.add("grayButton", "resetButton");
      key.addEventListener("click", resetBtnListener);
    }
    if (e === "=") {
      key.classList.add("grayButton", "equalsButton");
      key.addEventListener("click", equalsBtnListener);
    }
    if (e === ".") {
      key.addEventListener("click", dotBtnListener);
    }
    // arithmetic symbols listener
    if (e === "+" || e === "-" || e === "/" || e === "*") {
      key.addEventListener("click", () => symbolBtnListener(e, key));
    }
    // Numbers listener
    if (!isNaN(parseInt(e)) && 14 > screenText.innerHTML.length) {
      key.addEventListener("click", () => numberBtnListener(e));
    }
    keyBoard.appendChild(key);
  });
};
