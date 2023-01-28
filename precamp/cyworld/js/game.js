window.onload = () => {
  const word = document.querySelector("#word");
  const wordInput = document.querySelector("#answer");
  const submitButton = document.querySelector("#submit");
  const result = document.querySelector("#result");

  submitButton.addEventListener("click", () => {
    const wordValue = word.innerHTML;
    const inputValue = wordInput.value;
    const last = wordValue[wordValue.length - 1];

    if (inputValue[0] === last) {
      result.innerHTML = "GOOD";
      word.innerHTML = inputValue;
    } else {
      result.innerHTML = "FAIL";
    }

    wordInput.value = "";
  });
};
