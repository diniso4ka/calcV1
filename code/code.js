let buttonNumber = document.getElementsByClassName("numbers")
let buttonOperation = document.getElementsByClassName("operations")
let result = document.getElementById("result")
let reset = document.getElementById("reset")
let finishButton = document.getElementById("finish button")
result.innerHTML = ""


let number1 = ""
let number2 = ""
let sign = ""




onButtonNumberClick = (eventObject) => {
   if (number2 === "" && sign === "") {
      let numberCurrent = eventObject.currentTarget
      let number = numberCurrent.innerHTML
      number1 += number
      result.innerHTML += number
   } else if (number1 !== "" && sign !== "") {
      let numberCurrent = eventObject.currentTarget
      let number = numberCurrent.innerHTML
      number2 += number
      result.innerHTML += number
   }
}


onButtonOperationClick = (eventObject) => {
   if (sign === "") {
      operationCurrent = eventObject.currentTarget
      operation = operationCurrent.innerHTML
      sign = operation
      result.innerHTML += sign
   } else if (sign !== "" && number2 !== "") {
      onButtonOperationAgainClick()
      onButtonOperationClick(eventObject)
   }
}

onButtonOperationAgainClick = (eventObject) => {
   onButtonFinishClick()
}


onButtonFinishClick = () => {
   if (sign === "+") {
      number1 = +number1 + +number2
   } else if (sign === "-") {
      number1 = number1 - number2
   } else if (sign === "*") {
      number1 = number1 * number2
   } else if (sign === "/") {
      number1 = number1 / number2
   }
   number2 = ""
   sign = ""
   result.innerHTML = number1
}


onButtonResetClick = () => {
   number1 = ""
   number2 = ""
   sign = ""
   result.innerHTML = ""
}



for (let i = 0; i < buttonNumber.length; i++) {
   let button = buttonNumber[i]
   button.addEventListener("click", onButtonNumberClick)
}

for (let i = 0; i < buttonOperation.length; i++) {
   let button = buttonOperation[i]
   button.addEventListener("click", onButtonOperationClick)

}

finishButton.addEventListener("click", onButtonFinishClick)
reset.addEventListener("click", onButtonResetClick)
















































































































// resetResultMenu = () => {
//    resultScreen = false
// }

// checkResultScreen = () => {
//    if (resultScreen === false) {
//       result.innerHTML = "0"
//    } else {
//       getNumberFromButton(eventObject)
//    }
// }


// getNumberFromButton = (eventObject) => {
//    resultScreen = true

//    let numberTarget = eventObject.currentTarget;
//    let number = numberTarget.innerHTML
//    result.innerHTML += number
//    return number
// }

// getOperationFromButton = (eventObject) => {
//    resultScreen = true
//    let operationTarget = eventObject.currentTarget;
//    let operation = operationTarget.innerHTML
//    result.innerHTML += operation
//    return operation
// }





// for (let i = 0; i < buttonOperation.length; i++) {
//    let button = buttonOperation[i]
//    button.addEventListener("click", getOperationFromButton)
// }

// for (let i = 0; i < buttonNumber.length; i++) {
//    let button = buttonNumber[i]
//    button.addEventListener("click", getNumberFromButton)
// }

// reset.addEventListener("click", resetResultMenu)









