const request = require('request');
const fs = require('fs');

const input = process.argv.splice(2);
let counter = 0;
let content;

request(input[0], (error, response, body) => { 
  //stors body in variable
  content = body;
  
  //counter to return file size
  for(let char of body) {
    counter += 1;
  }
  
  //writes file
  fs.writeFile(`./${input[1]}`, content, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
    setTimeout(()=>{
      console.log(`Downloaded and saved ${counter} bytes to ./${input[1]}`)
    }, 5);
  })
});




