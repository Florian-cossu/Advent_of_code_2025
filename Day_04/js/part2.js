function part2Main(input) {
    let lines = input.split('\n');
    let diagram = [];
    let count = 0;
    
    for (let line of lines) {
        diagram.push(line.trim().split(""))
    }
    
    // console.log(diagram)

    const diagY = diagram.length - 1
    const diagX = diagram[0].length - 1

    // console.log({diagX, diagY})

    for (let i = 0; i < diagY+1; i++) {
        for (let j = 0; j < diagX+1; j++) {
            parseInt(checkAdjacent(diagram, i, j)) == 1 ? count++ : null;
            // console.log(`Adding ${checkAdjacent(diagram, i, j)}`)
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
    let adjCount = 0
    let posContents = diagram[line][col]

    diagram[line-1] !== undefined && diagram[line-1][col-1] !== undefined && posContents === "@" && diagram[line-1][col-1] === "@" ? adjCount++ : null;
    diagram[line-1] !== undefined && diagram[line-1][col] !== undefined && posContents === "@" && diagram[line-1][col] === "@" ? adjCount++ : null;
    diagram[line-1] !== undefined && diagram[line-1][col+1] !== undefined && posContents === "@" && diagram[line-1][col+1] === "@" ? adjCount++ : null;
    diagram[line] !== undefined && diagram[line][col-1] !== undefined && posContents === "@" && diagram[line][col-1] === "@" ? adjCount++ : null;
    diagram[line] !== undefined && diagram[line][col+1] !== undefined && posContents === "@" && diagram[line][col+1] === "@" ? adjCount++ : null;
    diagram[line+1] !== undefined && diagram[line+1][col-1] !== undefined && posContents === "@" && diagram[line+1][col-1] === "@" ? adjCount++ : null;
    diagram[line+1] !== undefined && diagram[line+1][col] !== undefined && posContents === "@" && diagram[line+1][col] === "@" ? adjCount++ : null;
    diagram[line+1] !== undefined && diagram[line+1][col+1] !== undefined && posContents === "@" && diagram[line+1][col+1] === "@" ? adjCount++ : null;

    // console.log(`Line ${line}, col ${col}, posContents ${posContents}, adjCount ${adjCount}, ${adjCount < 4 && posContents === "@" ? "adding to roll count" : "not adding to roll count"}`)

    return adjCount < 4 && posContents === "@" ? 1 : 0;
}