const removeFromArray = function(theArray, ...theArgs) {
    /* for (let i = 0; i < theArray.length; i++) {
         if (theArray[i] == theArgs) {
            delete theArray[i];
        } else {
            continue;
        }
    } */

    return theArray.filter(x => !theArgs.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
