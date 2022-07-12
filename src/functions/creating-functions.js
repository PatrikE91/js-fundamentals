// Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below


function add(num){
  num = num + 1
  return num}
//  for(let i = 0; i < numOutput; i++){
//    numOutPut.push(i)
//  }
//   return numOutPut
// }
// console.log(add(1))


// Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below


function sayName(name) {
  let newName = ''
    for (i = 0; i < name.length; i++) {
      if (i === 0) {
       newName = newName + name[0].toUpperCase()
      } else {
          newName = newName + name[i]
      }
      // name[0] = name[i].toUpperCase()
      
    }
    
    
  return 'Hi, ' + newName + " :)"
  
}

console.log(sayName("patrik"))



// TODO: change undefined to be the name of the functions you defined
module.exports = {
  a: add, // change undefined to be the name of the function you defined to increment a number (the first TODO)
  b: sayName // change undefined to be the name of the function you defined to say hi (the second TODO)
}
