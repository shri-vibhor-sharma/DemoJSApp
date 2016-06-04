fs = require('fs');

function readFromFile(err,data){
    
    
    data=JSON.parse(data);
    console.log(data.name);
}

fs.readFile('./package.json','utf-8', readFromFile);