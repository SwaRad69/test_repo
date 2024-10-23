let a = document.getElementsByClassName("box");

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
    // return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }

  a[0].style.backgroundColor = generateRandomColor();
  a[0].style.colorolor = generateRandomColor();
  a[1].style.backgroundColor = generateRandomColor();
  a[1].style.color = generateRandomColor();
  a[2].style.backgroundColor = generateRandomColor();
  a[2].style.color = generateRandomColor();
  a[3].style.backgroundColor = generateRandomColor();
  a[3].style.color = generateRandomColor();
  a[4].style.backgroundColor = generateRandomColor();
  a[4].style.color = generateRandomColor();
  // Function to refresh the page
function refreshPage() {
    window.location.reload();
  }
  
  // Set the interval to 5 seconds (5000 milliseconds)
  setInterval(refreshPage, 5000);
// const colours = {
//     c1 : "red",
//     c2 : "blue",
//     c3 : "violet",
//     c4 : "yellow",
//     c5 : "green",
//     c6 : "black",
//     c7 : "purple",
//     c8 : "orange"
// }

// function random(){
//     let arr = document.getElementsByClassName("box")
//     for(let i = 0; i < 5; i++)
//     {
//         arr[i].style.backgroundColor = colours[`c${Math.floor(Math.random() * 8) + 1}`]
//     }
// }
// setInterval(random,1000) 
// thanks bhai pehli baar itna accha code kiya khudseitne kam samay me