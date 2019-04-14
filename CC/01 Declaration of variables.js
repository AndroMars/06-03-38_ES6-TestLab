var catName;
var quote;

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();

//  transform into Let

let catName;
let quote;

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();


// Compare Scopes of the var and let Keywords

function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

// const Keywords

function printManyTimes(str) {
    "use strict";



    const sentence = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(sentence);
    }

}
printManyTimes("freeCodeCamp");