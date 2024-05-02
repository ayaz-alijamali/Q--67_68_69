// Question _________ 67


function addNumberAndString(num, str) {
    // Convert the string to a number using parseInt or parseFloat
    const strAsNum = parseFloat(str);

    // Add the number and the converted string, then return the result
    return num + strAsNum;
}

// Example usage
console.log(addNumberAndString(5, "3"));  // Output: 8


// Question _____________ 68


function multiplyDecimals(num1, num2) {
    // Multiply the numbers and round the result to two decimal places
    const result = (num1 * num2).toFixed(2);
    
    // Convert the rounded result back to a number and return it
    return parseFloat(result);
}

// Example usage
console.log(multiplyDecimals(2.5, 3.75));  // Output: 9.38


// Question _________69


function divideAndFindRemainder(dividend, divisor) {
    // Calculate the quotient and remainder
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;

    // Create an object to store the results
    const result = {
        quotient: quotient,
        remainder: remainder
    };

    return result;
}

// Example usage
console.log(divideAndFindRemainder(10, 3));  // Output: { quotient: 3, remainder: 1 }
