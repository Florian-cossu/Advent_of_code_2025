function part1Main(input) {
    let lines = input.split('\n');
    let diagram = [];
    let count = 0;
    
    for (let line of lines) {
        diagram.push(line.trim().split(""))
    }
    
    console.log(diagram)

    for (let i = 0; i < diagram.length; i++) {
        for (let j = 0; j < diagram[i].length; j++) {
            count += checkAdjacent(diagram, i, j)
        }
    }

    resultDisplay(count);
}

/**
 * 
 * @param {arr[arr]} diagram The diagram an array of array
 * @param {int} line The line of the diagram
 * @param {int} col The column of the line from the diagram
 * @returns {int} Returns 1 or 0 depending on whether the current index in the diagram satisfies the no more than 4 @ in the adjacent positions
 */
function checkAdjacent (diagram, line, col) {
    console.log(`Line: ${line}, Col: ${col}, Content: ${diagram[line][col]}`)
    if (diagram == null || diagram == undefined || diagram == [] || diagram == [[]]) {
        return 0;
    }

    if (line == 0 && col == 0 && diagram[line][col] == "@") {
        return 1;
    }
    if (line == 0 && col == line.length - 1 && diagram[line][col] == "@") {
        return 1
    };
    if (line == diagram.length -1 && col == 0 && diagram[line][col] == "@") {
        return 1;
    }
    if (line == diagram.length -1 && col == line.length - 1 && diagram[line][col] == "@") {
        return 1;
    }
}