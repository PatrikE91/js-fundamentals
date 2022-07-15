// Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello'

let answerOne

if (STR_ONE === 'Hello') {
  answerOne = true
}

// Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye'

let answerTwo

if (STR_TWO !== 'Hello') {
  answerTwo = true
}

// Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello'
const STR_FOUR = 'Good'

let answerThree

if (STR_THREE.length > STR_FOUR.length) {
  answerThree = true
}

// Use a combination of a loop and conditional statements to set answerFour
// to false if STR_FIVE has an odd number of vowels, or true if it has an
// even number
const STR_FIVE = 'Alex'

const vowels = ['a', 'e', 'i', 'o', 'u']

let answerFour

function calculateVowels(name) {
  let vowelsSeen = 0
  for (let i = 0; i < name.length; i++) {
    name[i].toLowerCase()

    for (let j = 0; j < vowels.length; j++) {
      if (name[i] === vowels[j]) {
        vowelsSeen++
      }

      if (vowelsSeen % 2 === 0) {
        answerFour = true
      }
    }
  }
  return answerFour
}
console.log(calculateVowels(STR_FIVE))

// Use a combination of a loop and conditional statements to set answerFive
// to false if STR_SIX has an odd number of vowels, or true if it has an
// even number
const STR_SIX = 'Joanna'
let answerFive

for (let i = 0; i < STR_SIX.length; i++) {
  let vowelsSeen = 0
  STR_SIX[i].toLowerCase()

  for (let j = 0; j < vowels.length; j++) {
    if (STR_SIX[i] === vowels[j]) {
      vowelsSeen++
    }

    if (vowelsSeen % 2 === 0) {
      answerFive = false
    }
  }
  console.log(answerFive)
}



// Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla'

//  let answerSix = extractMiddle(STR_SEVEN)


// function extractMiddle(str) {
//   return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1)
// }
// console.log(6 % 2)

// console.log(answerSix)


if (STR_SEVEN.length % 2 !== 0) {
  const i = Math.ceil(STR_SEVEN.length / 2 - 1)
  answerSix = STR_SEVEN.substring(i, i + 1)
}
// Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex'
let answerSeven

if (STR_EIGHT.length % 2 === 0) {
  answerSeven = STR_EIGHT.substring(
    STR_EIGHT.length / 2 + 1,
    STR_EIGHT.length / 2 - 1
  )
}

// function getMiddle(str) {
//   let length = str.length
//   let middle = Math.floor(length / 2)

//   if (length %2 === 0) {
//     answerSeven = str[middle - 1] + str[middle]
//     return answerSeven
//   }
// }
// console.log(getMiddle(STR_EIGHT))

// Set answerEight to the appropriate season based on what MONTH is set to
//
// For example, if MONTH is 'January', answerEight should be 'Winter'
//
// The below table shows the season for each range of months:
//
// March to May: Spring
// June to August: Summer
// September to November: Autumn
// December to February: Winter
//
// Run the test after changing the value of MONTH to check you've covered every month correctly
const MONTH = 'January'

let answerEight

// function getSeason(month) {
//   if (month === "January" || month === "December" || month === "February") {
//       return answerEight = "Winter"
//   } else if (month === "March" || month === "April" || month === 'May') {
//       return answerEight = "Spring"
//   } else if(month === "September" || month === "October" || month === "November") {
//       return answerEight = "Autumn"
//   } else if(month === "June" || month === 'July' || Month === "August") {
//       return answerEight = "Summer"
//   }
// }
// console.log(getSeason(MONTH))

module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  MONTH,
  answerEight
}
