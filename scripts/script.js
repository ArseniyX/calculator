onload = () => {
  function expo(x) {
    return Number.parseFloat(x).toExponential(2);
  }

  const printResult = (num) => {
    const arr = num.split(".");

    arr[0] = arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let result = arr.join(".");
    screenText.innerHTML = num.length < 9 ? result : expo(arr.join("."));
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
    if (num === "") num = "0";
    printResult(num);

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

    if (num === "0") num = "";
    console.log(num, e);
    if (num.length < 8) {
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

  let tappedTheme = "1";
  const r = document.querySelector(":root");

  const themes = {
    "--main-background": ["#3A4663", "#E6E6E6", "#17062A"],
    "--toggle-background": ["#242D44", "#D2CDCD", "#1E0936"],
    "--screen-background": ["#181F33", "#EEEEEE", "#1E0936"],
    "--keys-background": ["#EAE3DC", "#E5E4E1", "#331C4D"],
    "--keys-active": ["#FFFFFF", "#FFFFFF", "#6C34AC"],
    "--keys-shadow": ["#B3A497", "#A79E91", "#881C9E"],
    "--special-keys": ["#647198", " #378187", "#56077C"],
    "--special-active": ["#A2B2E1", "#62B5BC", "#8631AF"],
    "--special-shadow": ["#414E73", "#1B6066", "#BE15F4"],
    "--keys-color": ["#434A59", "#36362C", "#FFE53D"],
    "--button-color": ["#D03F2F", "#C85402", "#00DED0"],
    "--active-button": ["#F96B5B", "#FF8A38", "#93FFF8"],
    "--button-shadow": ["#93261A", "#873901", "#6CF9F1"],
    "--text-color": ["#ffffff", "#36362C", "#FFE53D"],
  };

  document.querySelectorAll(".btn").forEach((e) => {
    e.addEventListener("click", () => {
      if (tappedTheme !== e.id) {
        document.getElementById(tappedTheme).classList.add("disappearButtons");
        e.classList.remove("disappearButtons");
        
        for (const [key, value] of Object.entries(themes)) {
          r.style.setProperty(key, value[e.id - 1]);
        }
        tappedTheme = e.id;
        console.log(themes["--main-background"][e.id - 1]);
      }
    });
  });
};
