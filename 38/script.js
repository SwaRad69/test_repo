// Initialize an empty array
let numbers = [];

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

// Call the function to start the process
addNumbers();