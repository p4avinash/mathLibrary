const mathCollection = function () {
  // collections for mathematical operations
  const collections = {
    //add
    add: (numbers = []) => {
      if (numbers.length > 0) {
        let sum = 0
        for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i]
        }
        return sum
      }
    },

    // subtract
    subtract: (numbers = []) => {
      if (numbers.length > 0) {
        let result = numbers[0]
        for (let i = 1; i < numbers.length; i++) {
          result -= numbers[i]
        }
        return result
      }
    },

    //multiply
    multiply: (numbers = []) => {
      if (numbers.length > 0) {
        let product = 1

        for (let i = 0; i < numbers.length; i++) {
          product *= numbers[i]
        }

        return product
      }
    },

    // divide
    divide: (num1, num2) => {
      if (num1 !== undefined && num2 !== undefined) {
        return num1 / num2
      }
    },

    // mod
    mod: (num1, num2) => {
      if (num1 !== undefined && num2 !== undefined) {
        return num1 % num2
      }
    },

    //isOdd
    isOdd: (number) => {
      return number % 2 == 0 ? false : true
    },

    //isEven
    isOdd: (number) => {
      return number % 2 == 0 ? true : false
    },

    //round
    round: (number) => {
      if (number % 1 != 0) {
        let action = "trim"
        let numStringArray = number.toString().split(".")
        for (let i = 0; i < numStringArray[1].length; i++) {
          if (Number(numStringArray[1][i]) > 5) {
            action = "increment"
          }
        }

        if (action === "trim") {
          //trim decimals
          return Number(numStringArray[0])
        } else {
          //increment by 1
          return Number(numStringArray[0]) + 1
        }
      }

      return number
    },

    //ceil
    ceil: (number) => {
      if (number % 1 != 0) {
        return Number(number.toString().split(".")[0]) + 1
      }
    },

    //floor
    floor: (number) => {
      if (number % 1 != 0) {
        return Number(number.toString().split(".")[0])
      }
    },
  }

  return collections
}

// export { mathCollection }
module.exports = mathCollection
