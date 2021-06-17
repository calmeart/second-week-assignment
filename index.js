//Onload and handleSubmit Functions

document.body.onload = () => {
    const elements = document.getElementsByClassName("forms");
    Array.from(elements).forEach(element => {
        element.addEventListener("submit", handleSubmit);
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name } = form;
    const elements = Array.from(form.elements);
    let inputs = "";
    if (elements.length > 1 ) {
        inputs = {};
        elements.forEach(item => {
            const { name, value } = item;
            inputs[name] = value;
        }) 
    }
    const getDisplayContainer = document.getElementById(name);
    try {
        getDisplayContainer.innerHTML = functions[name](inputs);
        getDisplayContainer.classList.remove("error");
        elements.forEach(item => {
            item.value = "";
        }) 
    }
    catch(error) {
        getDisplayContainer.classList.add("error");
        getDisplayContainer.innerHTML = error.message;
        
    }

};

//Onload and handleSubmit Functions

// 2. Write a Javascript program to display the current date and time.
// Sample Output: Current Date and Time: 27/12/2017 06:04

function displayCurrentDateAndTime() {
    const date = new Date();
    return "Current Date and Time: " + date.toLocaleDateString("en-GB") + " " + date.getHours() + ":" + date.getMinutes();
};

// 3. Write a Javascript program to create a new string which is n copies of a given string where n is a non-negative integer.

// Sample Output: 
// a
// aa
// aaa
// aaaa
// aaaaa

function createCopiesOfString(inputs) {
    const { string, number } = inputs;
    if (string === "") {
        throw new Error("Please enter a string");
    }
    if (number < 1) {
        throw new Error("Please enter a positive integer");
    }
    return string.repeat(number);
};

// 4. Write a Javascript program which accepts the radius of a circle from the user and compute the perimeter and area.
// Sample Output: 
// Input the radius of the circle: 5.
// The perimeter is 31.41592653.
// The area is 78.539816325.

function radiusOfCircle(inputs) {
    const { radius } = inputs;
    if (!isNaN(Number(radius)) && Number(radius) > 0) {
        const perimeter = (2 * Math.PI * radius).toFixed(8);
        const area = (Math.PI * Math.pow(radius, 2)).toFixed(8);
        return `
            <p class="output">Input the radius of the circle: ${radius}.</p>
            <p class="output">The perimeter is ${perimeter}. </p>
            <p class="output">The area is ${area}. </p>
        `;
    }
    throw new Error("Please enter a valid number");
};

// 5. Write a Javascript program to check if a string starts with "if".
// Sample Output:
// true
// false

function checkIf({ string }) {
    return (string.substr(0, 2).toLowerCase() === "if");
};

// 8. Write a Javascript program to check three numbers and return true if one or more of them are small. A number is called "small" if it is in the range 1..10 inclusive.
// Sample Output: 
// true
// true
// false

function checkThreeNumbers(inputs) {
    const array = Object.values(inputs);
    const output = array.slice(0, 3).map(number => {
        number = number === "" ? "string" : Number(number);
        if(!isNaN(number)) {
            if (number > 0 && number < 10) {
                return `<p class="output">true</p>`
            } else if (number >= 10 || number === 0) {
                return `<p class="output">false</p>`
            } else if (number < 0) {
                return `<p class="output">this is negative</p>`
            } else {
                return `<p class="output">what is this</p>`
            }
        } else {
            return `<p class="output">not a number</p>`
        };
    })
    return output.join("");
};

// 9. Write a Javascript program to check two numbers and return true if one or the other is small, but not both. A number is called "small" if it is in the range 1..10 inclusive.  
// Sample Output: 
// true
// true
// false


function checkTwoNumbers(inputs) {
    const array = Object.values(inputs).slice(0, 2).map(number => {
        if (number === "") {
            throw new Error("empty input");
        }
        number = Number(number);
        if (isNaN(number)) {
            throw new Error("not a valid number");
        }
        if (number > 0 && number < 10) {
            return true;
        } else {
            return false
        };
    })
    if (array[0] && array[1]) {
        array.push(false);
    } else {
        array.push(true);
    }
    return array.map(item => `<p class="output">${item}</p>`).join("");
};

// 10. Write a Javascript program to print the following 'here document'. 
// Sample string: a string that you "don't" have to escapeThisis a ....... multi-lineheredoc string --------> example
// Sample Output:

// Sample string
// a string that you "don't" have to escape
// This
// is a ....... multi-line
// heredoc string --------> example

// 11. Write a Javascript program to create a new string where "if" is added to the front of a given string. If the string already begins with "if", return the string unchanged. 
// Sample Output: 
// if else
// if else

function createStringWithIf(inputs) {
    const { string } = inputs;
    checkIfEmptyString(string);

    if(checkIfNumber(string)) {
        throw new Error("Please enter a string");
    }

    if (checkIf(inputs)) {
        return string;
    } else {
        return "if " + string.toLowerCase();
    }
};

// 12. Write a Javascript program to create a new string from a given string using the first three characters or whatever is there if the string is less than length 3. Return n copies of the string. 
// Sample Output:
// abc
// abcabc

function createStringsOfThree({ string, number }) {
    checkIfEmptyString(string);

    if( checkIfNumber(string) || !checkIfNumber(number) ) {
        throw new Error("Please enter valid values");
    };

    return string.substr(0,3).repeat(number);
};

// 13. Write a Javascript program which accepts the radius of the sphere as input and compute the volume.
// Sample Output:
// Input the radius of the circle: 5
// The volume of the sphere is: 392.699081625.

function volumeOfCircle(inputs) {
    const { radius } = inputs;
    if (!isNaN(Number(radius)) && Number(radius) > 0) {
        const volume = (4/3 * Math.PI * Math.pow(radius, 3)).toFixed(8);
        return `
            <p class="output">Input the radius of the circle: ${radius}.</p>
            <p class="output">The volume of the sphere is: ${volume}. </p>
        `;
    }
    throw new Error("Please enter a valid number");
};

// 14. Write a Javascript program to create a new string from a given string where the first and last characters have been exchanged. 
// Sample Output: 
// nythoP
// aavJ

function replaceFirstAndLastCharacters({ string }) {
    checkIfEmptyString(string);

    if(checkIfNumber(string)) {
        throw new Error("Please enter a string");
    }
    const array = [string.slice(0, 1), string.slice(1, string.length - 1), string.slice(string.length - 1, string.length)];
    return array.reverse().join("");
};


// 15. Write a Javascript program to check two integers and return true if one of them is 20 otherwise return their sum.

function checkIfTwenty({ first, second }) {
    if (first < 0 || second < 0) throw new Error("Please enter positive integers");
    if (first == 20 || second == 20) {
        return true;
    } else {
        return Number(first) + Number(second);
    }
};

// 16. Write a Javascript program to find the greatest of three numbers. 
// Sample Output: 
// y = 5 is greatest.

function greatesOfThreeNumbers(inputs) {
    const array = Object.values(inputs);
    const maxNumber = Math.max(...array);
    console.log(Object.keys(inputs));
    const maxKey = Object.keys(inputs).find(key => inputs[key] == maxNumber);
    return `${maxKey} = ${maxNumber} is the greatest.`;
};

// 17. Write a Javascript program to check if a number is within 10 of 100 or 200. (E.g. 90, 110, 190, 210)

function checkNumberWithinRange({ number }) {
    checkIfEmptyString(number);

    if(!checkIfNumber(number)) {
        throw new Error("Please enter a number");
    }


};

// 18. Write a Javascript program to compute the sum of the two integers, if the two values are equal return double their sum otherwise return their sum

function returnSumOfTwoIntegers({ first, second }) {
    const sum = Number(first) + Number(second);
    if (first === second) return sum*2;
    return sum;
};

// 20. Write a Javascript program to create a new string from a given string with the last character added at 
// the front and back of the given string. The length of the given string must be 1 or more.
// Sample Output: 
// cabcc
// dabcdd
// ajavaa

function createStringEncasedInLastCharacter({ string }) {
    checkIfEmptyString(string);

    if(checkIfNumber(string)) {
        throw new Error("Please enter a string");
    }
    
    return string[string.length - 1] + string + string[string.length - 1];
};

// 21. Write a Javascript program to print 34 upto 41.
// Sample Output: 
// 34
// 35
// 36
// 37
// 38
// 39
// 40
// 41

function print34to41() {
    const array = []
    for(let i = 34; i < 42; i++) {
        array.push(i);
    }
    return array.map(item => `<p class="output">${item}</p>`).join("");
}

// 22. Write a Javascript program to print even numbers from 1 to 10.

function printEvenFrom1To10() {
    const array = []
    for(let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            array.push(i);
        } 
    }
    return array.map(item => `<p class="output">${item}</p>`).join("");
}

// 23. Write a Javascript program to print odd numbers from 10 to 1

function printOddFrom10To1() {
    const array = []
    for(let i = 10 ; 0 < i ; i--) {
        if (i % 2 === 1) {
            array.push(i);
        } 
    }
    return array.map(item => `<p class="output">${item}</p>`).join("");
}

// 24. Write a Javascript program to print the elements of a given array. Sample array : ["Javascript", 2.3, Date.now]

function printArray({ array }) {
    return array.split(",").map(item => `<p class="output">${item}</p>`).join("");
}

// 25. Write a Javascript program to check two non-negative integer values and return true if they have the same last digit. 

function compareLastDigitsOfNumbers({ first, second }) {
    if (first < 0 || second < 0 ) {
        throw new Error("Please enter positive integers");
    }
    const last1 = +first.toString().split("").pop();
    const last2 = +second.toString().split("").pop();

    return (last1 === last2);
}

// 26. Write a Javascript program to retrieve the total marks where the subject name and marks of a student stored in an object. 
// Sample subject and marks: Literature -74, Science – 89, Math-91
// Sample Output: 
// Total Marks: 254

// {"literature": "74", "science": "89", "math": "91"}

function totalMarksOfStudent({ object }) {
    object = JSON.parse(object);
    return Object.values(object).reduce((a, b) => +a + +b);
}

// 27. Write a Javascript program to print a specified character twenty times
// Sample Output: 
// ********************
// ####################
// @@@@@@@@@@@@@@@@@@@@

function printTwentyTimes({ character }) {
    if (character.length > 1) throw new Error("Character length should be 1")
    return character.repeat(20);
}

// 28. Write a Javascript program to test whether a year is a leap year or not.
// Sample Output: 
// 2012 is leap year
// 1500 is not leap year
// 1600 is leap year
// 2020 is leap year

function isLeapYear({ year }) {
    if (year < 0) throw new Error("There are no negative years");
    if (+year % 100 === 0) {
        if (+year % 400 === 0) {
            return `${year} is a leap year`
        } else {
            return `${year} is not a leap year`
        }
    } else {
        if (+year % 4 === 0) {
            return `${year} is a leap year`
        } else {
            return `${year} is not a leap year`
        }
    }
}

// 29. Write a Javascript program to check whether a string 'Java' appears at index 1 in a given string, if 'Java' appears to return the string without 'Java' otherwise return the string unchanged.
// Sample Output: 
// Script
// Oldjava

function checkIfJavaAppears({ string }) {
    if(string.substr(0, 4) === "Java") {
        return string.slice(4,);
    }
    return string;
}

// 30. Write a Javascript program to create a string using the first two characters (if present) of a given string if the first character is 'p' and the second one is 's' otherwise return a blank string. 
// Sample Output: 
// ps

function printPS({ string }) {
    if (string.substr(0, 2) === "ps") return "ps";
    return " ";
}

// 31. Write a Javascript program to check two integers and return whichever value is nearest to the value 10, or return 0 if two integers are equal. 
// Sample Output: 
// 7
// 9
// 0

function nearestToTen({ first, second }) {
    if (first < 0 || second < 0) throw new Error("Negative Integer");
    if (first === second) return 0;
    return (Math.abs(10 - first) > Math.abs(10 - second)) ? second : first;
}

// 32. Write a Javascript program to check two integer values and return true if they are both in the range 10..20 inclusive, or they are both in the range 20..30 inclusive. 
// Sample Output: 
// true
// false
// true
// false

function integersWithinRange(inputs) {
    const array = [];
    Object.values(inputs).slice(0,2).forEach(number => {
        array.push((number > 9 && number < 21));
        array.push((number > 19 && number < 31));
    });
    return array.map(item => `<p class="output">${item}</p>`).join("");
};

// 33. Write a Javascript program to check two positive integer values and return the larger value that is in the range 20..30 inclusive, or return 0 if no number is in that range.
// Sample Output: 
// 0
// 29
// 30
// 0

function between20To30({ first, second }) {
    if (first < 0 || second < 0) throw new Error("Negative Integer");
    if (+first + +second >= 40 && +first + +second <= 60) {
        return Math.max(first, second);
    }
    return 0;
};

// 34. Write a Javascript program to count the number of 5's in a given array. 
// Sample Output: 
// 0
// 1
// 2

function countFiveInArray({ array }) {
    return array.filter(item => item == "5").length;
};

// 35. Write a Javascript program to check two non-negative integer values and return true if they have the same last digit.

// Same with 25

// 36. Write a Javascript program to check if the sequence of numbers 10, 20, 30 appears anywhere in a given array of integers. 

function checkSequence({ array }) {
    return array.filter(number => number.toString().length === 2).join("").includes("102030");
};

// 37. Write a Javascript program to check two given integers and return 11 if either one is 11. Return their sum or difference if sum or difference is 11.

function ifEqualToEleven({ first, second }) {
    if (first == 11 || second == 11 || +first + +second == 11) return 11;
    if (Math.abs(first - second) == 11 ) return 11;
    return false;
};

// 38. Write a Javascript program to check three given integers and return true if one of them is 20 or more less than one of the others.

function differenceTwentyBetweenXYZ({ x, y, z }) {
    const first = Math.abs( x - y );
    const second = Math.abs( x - z );
    const third = Math.abs( y - z );
    return (first >= 20 || second >= 20 || third >= 20);
};

// 39. Write a Javascript program to check two given integers and return the larger value. However, if the two values have the same remainder when divided by 5 then return the smaller value and if the two values are the same, return 0.
// Sample Output: 
// 12
// 110
// 0

function remainderOfFives({ first, second }) {
    if (first === second) return 0;
    if (first % 5 === second % 5) return Math.min(first, second);
    return Math.max(first, second);
};

// 40. Write a Javascript program to check two given integers, each in the range 10..99, return true if there is a digit that appears in both numbers. 

function rangeFrom10To99({ first, second }) {
    function ifRange(number) {
        return ( number < 10 || number > 99 );
    }
    if (!ifRange(first) || !ifRange(second)) return "Not in range";
    const result = first.split("").some(digit => (second.split("").indexOf(digit) > -1));
    return result;
};

// 41. Write a Javascript program to check three given integers x, y, z and return true if one of y or z is close (differing from a by at most 1), while the other is far, differing from both other values by 3 or more.


function differenceBetweenXYZ({ x, y, z }) {
    const array = [ x, y, z ].sort((a,b) => a - b );
    console.log(array);
    return (array[1] - array[0] == 1 && array[2] - array[1] > 2) ? true : (array[2] - array[1] == 1 && array[1] - array[0] > 2);
};

// 42. A hare and a turtle move from city A and city B to meet each other. Enter the distance between cities, hare speed and turtle speed using the keyboard. Calculate at what distance from city B they will meet.

function distanceBetweenAToB(inputs) {
    const {distance, speedOne, speedTwo} = inputs;
    const time = distance / (+speedOne + +speedTwo);
    return distance * speedTwo;
}

// 43. A cyclist rides from city A to city B. A fly flies from his shoulder. She flies to city B, flies to 
// it and returns. He flies to the cyclist again, turns around and flies to the city of B ... and so on until t
// he cyclist reaches point B. The distance between the cities, the speed of the cyclist and the speed of the 
// fly are known. Write a program that determines how many kilometers a fly flies.

function cyclistAndFly(inputs) {
    const {distance, speedOne, speedTwo} = inputs;
    if (speedOne > speedTwo) return distance +" km";
    return ( distance / speedOne ) * speedTwo + " km";
}

// 44. Write a program that determines the date of the next day, based on today's date.

function displayTomorrowDate() {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toLocaleDateString("en-GB");
}

// 45. Написати программу, яка задає категорію та стаж працівника, а також ставку 
// відповідно до категорії(1-ша категорія—3000, 2-га – 2000, 3-тя -- 1000). Обчислити 
// заробітну плату, враховуючи надбавку за стаж роботи(до 2 років—0%, від 2 до 5 – 10%, 
//     від 5 до 10 – 20%, більше 10—30% ) і зняття податку – 15%.

// 46. Write programm, which takes the 4 digit number as an input and: (example 5141):
// 1.	find the some of its digits (5141 це 5+1+4+1 = 11).
// 2.	check if there’s same digits (digit 1 happens 2 times)
// 3.	check if summ of first 2 digits is the same as the sum of next 2 digits(5141 → 5+1 = 6 і 4+1 = 5 →sums are different)

function checkFourDigits({ number }) {
    if (number.toString().length !== 4) return "Not 4-digits";
    const numberArray = number.toString().split("");
    const resultArray = [];

    const sumAll = numberArray.reduce((a,b) => +a + +b);
    resultArray.push(`Sum of digits is: ${sumAll}`);

    numOcc = [...numberArray];

    for (let i = 0 ; i < numberArray.length ; i++) {
        const occurence = numOcc.filter(item => item === numberArray[i]).length
        if (occurence > 1) {
            resultArray.push("digit " + numberArray[i] + " happens " + occurence + " times.");
            numOcc.splice(i, 1);
        };
    };

    const sumTwo = (+numberArray[0] + +numberArray[1] == +numberArray[2] + +numberArray[3]) ? "Sums are same" : "Sums are different";
    resultArray.push(sumTwo);

    return resultArray.map(item => `<p class="output">${item}</p>`).join("");
}

// 47. Write a program that calculates how much a driver has to pay for parking a car in a parking 
// lot over a period of time. The user enters the following data: time of arrival at the parking lot 
// (in hours and minutes), time of departure, the cost of one hour of parking. The driver pays for each 
// full hour. Also, there is a charge for exceeding the use of the parking lot for more than 10 minutes, 
// for example: if someone used the parking lot for 2 hours. and 15 minutes, you must pay for 3 hours. In 
// the end, you need to display a message about the time of arrival and departure of the car, the price 
// per hour of parking and the full cost.

function calculateParkingFee(inputs) {
    const { arrival, departure, parkingFee} = inputs;
    const timeArrival = new Date(2021, 01, 01, arrival.split(":")[0], arrival.split(":")[1]);
    const timeDeparture = new Date(2021, 01, 01, departure.split(":")[0], departure.split(":")[1]);

    if (timeDeparture < timeArrival) throw new Error("Departure cannot be earlier than arrival.");
    if (isNaN(timeArrival) || isNaN(timeDeparture)) throw new Error("Invalid Date");

    const difference = (timeDeparture - timeArrival) / 1000 / 60;

    let timeOfStay;
    if (difference < 60) {
        timeOfStay = 1;
    } else if (difference % 60 > 10) {
        timeOfStay = Math.floor(difference/60) + 1;
    } else {
        timeOfStay = Math.floor(difference/60);
    }

    return Math.round(timeOfStay * parkingFee * 100) / 100;
};



// UTILITY FUNCTIONS

const functions = {
    displayCurrentDateAndTime,
    createCopiesOfString,
    radiusOfCircle,
    checkIf,
    checkThreeNumbers,
    checkTwoNumbers,
    createStringWithIf,
    createStringsOfThree,
    volumeOfCircle,
    replaceFirstAndLastCharacters,
    checkIfTwenty,
    greatesOfThreeNumbers,
    checkNumberWithinRange,
    returnSumOfTwoIntegers,
    createStringEncasedInLastCharacter,
    print34to41,
    printEvenFrom1To10,
    printOddFrom10To1,
    printArray,
    compareLastDigitsOfNumbers,
    totalMarksOfStudent,
    printTwentyTimes,
    isLeapYear,
    checkIfJavaAppears,
    printPS,
    nearestToTen,
    integersWithinRange,
    between20To30,
    countFiveInArray,
    checkSequence,
    ifEqualToEleven,
    differenceTwentyBetweenXYZ,
    remainderOfFives,
    rangeFrom10To99,
    differenceBetweenXYZ,
    distanceBetweenAToB,
    cyclistAndFly,
    displayTomorrowDate,
    checkFourDigits,
    calculateParkingFee
};

function checkIfEmptyString(string) {
    if (string === "") {
        throw new Error("Empty string");
    }
};

function checkIfNumber(number) {
    if (number === "") {
        return false;
    }
    
    number = Number(number);
    return !isNaN(number);
}

// functions tree