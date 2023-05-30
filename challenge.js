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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
     let altitude = 0; // Current altitude
    let valleys = 0; // Number of valleys traversed
    let inValley = false; // Flag to indicate if the hiker is in a valley

    for (let i = 0; i < steps; i++) {
        if (path[i] === "U") {
            altitude++; 
        } else if (path[i] === "D") {
            altitude--; 
        }

        if (altitude < 0 && !inValley) {
            inValley = true;
        }

        if (altitude === 0 && inValley) {
            valleys++;
            inValley = false;
        }
    }

    return valleys;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
