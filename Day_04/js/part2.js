function part2Main(input) {
    let lines = input.split('\n');
    let diagram = [];
    let tmpDiagram = [];
    let count = 0;
    
    for (let line of lines) {
        diagram.push(line.trim().split(""))
        tmpDiagram.push(line.trim().split(""))
    }
    
    // console.log(diagram)

    const diagY2 = diagram.length - 1
    const diagX2 = diagram[0].length - 1

    let keepCycling = true

    // console.log({diagX2, diagY2})

    while (keepCycling === true) {
        let initCount = count

        for (let i = 0; i < diagY2+1; i++) {
            for (let j = 0; j < diagX2+1; j++) {
                parseInt( checkAdjacent2(diagram, tmpDiagram, i, j)) == 1 ? count++ : null;
                // console.log(`Adding ${ checkAdjacent2(diagram, i, j)}`)
            }
        }
        
        diagram = tmpDiagram

        if (count == initCount) keepCycling = false
    }
    

    console.log(tmpDiagram)

    resultDisplay(count);
}

/**
 * 
 * @param {arr} diagram The diagram an array of array
 * @param {arr} tmpDiagram A copy of the diagram which contains the map of rolls that will be removed
 * @param {int} line The line of the diagram
 * @param {int} col The column of the line from the diagram
 * @returns {int} Returns 1 or 0 depending on whether the current index in the diagram satisfies the no more than 4 @ in the adjacent positions
 */
function  checkAdjacent2 (diagram, tmpDiagram, line, col) {
    let adjCount = 0
    let result = 0;
    let posContents = diagram[line][col]

    if (posContents !== "@") return 0

    diagram[line-1] !== undefined && diagram[line-1][col-1] !== undefined && posContents === "@" && diagram[line-1][col-1] === "@" ? adjCount++ : null;
    diagram[line-1] !== undefined && diagram[line-1][col] !== undefined && posContents === "@" && diagram[line-1][col] === "@" ? adjCount++ : null;
    diagram[line-1] !== undefined && diagram[line-1][col+1] !== undefined && posContents === "@" && diagram[line-1][col+1] === "@" ? adjCount++ : null;
    diagram[line] !== undefined && diagram[line][col-1] !== undefined && posContents === "@" && diagram[line][col-1] === "@" ? adjCount++ : null;
    diagram[line] !== undefined && diagram[line][col+1] !== undefined && posContents === "@" && diagram[line][col+1] === "@" ? adjCount++ : null;
    diagram[line+1] !== undefined && diagram[line+1][col-1] !== undefined && posContents === "@" && diagram[line+1][col-1] === "@" ? adjCount++ : null;
    diagram[line+1] !== undefined && diagram[line+1][col] !== undefined && posContents === "@" && diagram[line+1][col] === "@" ? adjCount++ : null;
    diagram[line+1] !== undefined && diagram[line+1][col+1] !== undefined && posContents === "@" && diagram[line+1][col+1] === "@" ? adjCount++ : null;

    // console.log(`Line ${line}, col ${col}, posContents ${posContents}, adjCount ${adjCount}, ${adjCount < 4 && posContents === "@" ? "adding to roll count" : "not adding to roll count"}`)

    if (adjCount < 4 && posContents === "@") {
        tmpDiagram[line][col] = "."
        result = 1
    }

    return result
}