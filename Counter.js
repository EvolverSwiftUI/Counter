// let counterElement = document.getElementById("counterValue");
// console.log(counterElement);

function onIncrement() {
    // console.log("Increment");
    let counterElement = document.getElementById("counterValue");
    let previousCounterValue = counterElement.textContent;
    // console.log(typeof(previousCounterValue));
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    // console.log(updatedCounterValue);
    // console.log(typeof(updatedCounterValue));
    counterElement.textContent = updatedCounterValue;

    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
}

function onDecrement() {
    // console.log("Decrement");
    let counterElement = document.getElementById("counterValue");
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updatedCounterValue;

    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }

}

function onReset() {
    // console.log("Reset");
    let counterElement = document.getElementById("counterValue");
    let updatedCounterValue = 0;
    counterElement.textContent = updatedCounterValue;
    counterElement.style.color = "black";
}