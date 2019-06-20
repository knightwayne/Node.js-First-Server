
//asynch code - use promise
setTimeout(()=>{
    console.log("Timer is out!");
},150);

//synch code
console.log("Hello World! First Node.js App");

const fs = require('fs');
const string = "text written here from first )Node.js App"; 
fs.writeFileSync("Hello.txt", string);

