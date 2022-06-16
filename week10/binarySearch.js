/*
Instructions:
Your task is to complete the binary search implementation below within the searchNumber function. You should not need to edit code anywhere else than within
the recursiveBinarySearch code block. You will need to handle cases for:
-loop complete and number not found - return false
-number found - return true
-number not found and loop not complete - call the function again on either the upper half or lower half of the previous iterations search and check same cases again
*/

// do not edit this function
/**
 * Function that generates an array of numbers with length equalling the specified arrayLength parameter. It then returns that array.
 * @param arrayLength, defaulted to 100 if nothing is passed in, it will determine the length of the array that is returned.
 */
const generateAlphabetArray = (charA = 'a', charZ = 'z') => {
    let a = [], j = charZ.charCodeAt(0);
    for (let i = charA.charCodeAt(0); i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}


const searchForAlphabeticalIndex = ([stringToFindIndexForFirstLetter], alphabetArray = generateAlphabetArray()) => {
    // These variables are incremented every time you iterate the binary and linear searches. As an iteration comes with the cost of computational time, 
    // the one with lower iterations and therefore lower number has better performance.
    let binarySearchResults = 0;
    let binarySearchCharacterIndex = -1;
    let linearSearchResults = 0;
    let linearSearchCharacterIndex = -1;

    // first make sure stringToFindIndexForFirstLetter var is lowercase as your array generated above does not contain capital letters
    stringToFindIndexForFirstLetter = stringToFindIndexForFirstLetter.toLowerCase();


    // here is linear search implementation, you don't need to change this
    for (let i = 0; i < alphabetArray.length; i++) {
        // iterates the result to show how many iterations and therefore how efficient this search is
        linearSearchResults++;
        if (alphabetArray[i] === stringToFindIndexForFirstLetter) {
            linearSearchCharacterIndex = i;
            break; // keyword to jump out of a loop
        }
        // if you get through to the last iteration of the loop without breaking, you set result to -1 for not found
        if (i === alphabetArray.length - 1) {
            linearSearchResults = -1;
        }
    }

    // ***** your code goes inside the function below *****
    // here is the recursive binary search implementation
    let recursiveBinarySearch = (array, letter, startIndex, endIndex) => {
        binarySearchResults++; // this keeps track of how many iterations of Binary Search you have done, no need to change this code

        console.log(startIndex, endIndex);
        // establish base case for not finding the number in the given array, return false if you are on an iteration where the startIndex is greater than the endIndex, 
        if (startIndex > endIndex) {
            binarySearchResults = -1
            return false;
        }

        //find middle index between the given start and end, hint: use Math.floor(your calculation for the middle index between start and end) as that rounds down to the nearest integer, you are not searching decimals
        // for example for array from 0 to 49 (length is 50), you calculate midpoint by writing let midIndex = Math.floor((0+49) / 2)
        let midIndex = Math.floor((startIndex + endIndex) / 2);


        //check if your midIndex is equal to the number being searched for, return true if so
        // hint: make sure to use == or === to check if you found the number, single equals sign is only used for assigning values to variables, not checking equality
        if (array[midIndex] === letter) {
            binarySearchCharacterIndex = midIndex;
            return true;
        }

        // determine the if/else condition that should house these two return statements that recursively call the same function after splitting the data in one direction or another
        if (letter < array[midIndex]) {
            // this return statement will continue the recursion by narrowing our search to the lower (start to middle) portion of the dataset
            return recursiveBinarySearch(array, letter, startIndex, midIndex - 1);
        } else {
            // this return statement will continue the recursion by narrowing our search to the upper (middle to end) portion of the dataset
            return recursiveBinarySearch(array, letter, midIndex + 1, endIndex);
        }

        // return false; // remove or comment out this line once you have uncommented the recursive calls above


    }

    // Invokes the recursiveBinarySearch you just defined, do not change the following
    if (recursiveBinarySearch(alphabetArray, stringToFindIndexForFirstLetter, 0, alphabetArray.length - 1)) {
        console.log('Number: ', stringToFindIndexForFirstLetter, ' found after ', binarySearchResults, ' iterations.')
    } else {
        console.log('Number: ', stringToFindIndexForFirstLetter, ' not found within array: ', alphabetArray);
    }





    // add the necessary inputs and and results to the DOM
    const numberToSearchForElm = document.getElementById('number-searching-for-id') || {};
    numberToSearchForElm.innerText += stringToFindIndexForFirstLetter;

    const arrayOfNumbersToSearchInsideElm = document.getElementById('searched-array-id') || {};
    arrayOfNumbersToSearchInsideElm.innerText += alphabetArray;

    const linearSearchResultsElm = document.getElementById('linear-search-results') || {};
    linearSearchResultsElm.innerText += linearSearchResults;

    const linearSearchPositionElm = document.getElementById('linear-search-position') || {};
    linearSearchPositionElm.innerText += linearSearchCharacterIndex;

    const binarySearchResultsElm = document.getElementById('binary-search-results') || {};
    binarySearchResultsElm.innerText += binarySearchResults;

    const binarySearchPositionElm = document.getElementById('binary-search-position') || {};
    binarySearchPositionElm.innerText += binarySearchCharacterIndex;

    return binarySearchResults;
}

// Don't change this code aside from the numeric parameter passed in which indicates the number to search for, may see how searching different numbers results in different iterations for linear and binary search once your implementation is complete
// note: searchForAlphabeticalIndex is defaulted to generate an array of length 100 which ranges from 0-99, inputting a number outside that range will not be found and should therefore show -1 in the results for both searches.
window.onload = () => {
    searchForAlphabeticalIndex("Way of Kings");
};

//don't change this line
if (typeof module !== 'undefined') {
    module.exports = { searchForAlphabeticalIndex };
}