function divis10(arrayele) {
    // if (arrayele%10==0) {
    //     return arrayele;
        
    // } else {
    //     return null;
    return arrayele % 10 === 0;

        
    }
        
        
    
    

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
let divisibleBy10 = numbers.filter(divis10);
console.log(divisibleBy10);           