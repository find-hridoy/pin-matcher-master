let generateField = document.getElementById("generate-field");
let numberField = document.getElementById("number-field");

/**  Generate Function  */
function generatePin() {
    generateField.value = Math.floor(Math.random() * 9000 + 1000);
};

/**  Insert Number Function  */
function insertNumber(number) {
    numberField.value += number;
};

/**  Clear All Number Function  */
function clearAll() {
    numberField.value = "";
};

/**  Delete Number Function  */
function deleteNumber() {
    numberField.value = numberField.value.slice(0, -1);
};

/**  Submit Pin Number Function  */
function submitButton() {
    const generateFieldOutput = generateField.value;
    const numberFieldOutput = numberField.value;
    const wrongPin =  document.getElementById("wrong-pin");
    const correctPin =  document.getElementById("correct-pin");

    if (numberFieldOutput == "") {
        alert("Please enter your 4 digit pin number");
    } else if (generateFieldOutput == numberFieldOutput) {
        correctPin.style.display = "block";
        wrongPin.style.display = "none";
    } else if (generateFieldOutput != numberFieldOutput) {
        wrongPin.style.display = "block";
        correctPin.style.display = "none";
    }
};
