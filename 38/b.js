// Initialize an empty array
let numbers = [];
let square = [];

// Function to add numbers to the array
function addNumbers() {
 
  
  for (let index = 0; index >=0; index++) {
    let num = prompt("Enter the numbers for array except 0");
    if (num!=0) {
      numbers.push(num);

      
    }
    else{
      break;
    }
  console.log(numbers);

  
 }

  
  
}

addNumbers();

for (let i = 0; i < numbers.length; i++) {
    square.push(numbers[i] * numbers[i]);
    
      
    
}
console.log(square);