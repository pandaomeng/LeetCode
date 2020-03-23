const funcGenerator = () => {
  let count = 0
  return function(){
    count += 1
    console.log(count % 2)
  }
}

myFunc = funcGenerator()

console.log(myFunc())
console.log(myFunc())
console.log(myFunc())
console.log(myFunc())