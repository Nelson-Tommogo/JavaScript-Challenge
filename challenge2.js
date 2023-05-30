'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    const roundedGrades = [];

    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];

        if (grade < 38) {
            // Grade less than 38, no rounding
            roundedGrades.push(grade);
        } else {
            // Calculate the next multiple of 5
            const nextMultipleOf5 = Math.ceil(grade / 5) * 5;

            // Check if rounding is needed
            if (nextMultipleOf5 - grade < 3) {
                roundedGrades.push(nextMultipleOf5);
            } else {
                roundedGrades.push(grade);
            }
        }
    }

    return roundedGrades;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
