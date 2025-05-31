const { readfile, readFile } = require('fs');

console.log('started a first task');

readFile('C:/Users/tosep/Desktop/programming projects and languages/JS_Backend/Node_Express_8h/Node_tutorial/content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result)
    console.log('completed first task')
});

console.log('starting second task')