fs = require('fs');

var vibhorData= {
    name:'vibhor sharma'
}

fs.writeFile('writeToFile.json',JSON.stringify(vibhorData));