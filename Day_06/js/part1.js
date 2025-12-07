function part1Main(input) {
    let lines = input.split('\n');
    const splitter = /\s+|\t/
    const digitRegex = /\d+/
    
    const colNumber = lines[0].split(splitter).filter(Boolean).length
    
    let cols = []
    let total = 0

    for (i=0; i<colNumber; i++) {
        cols[i] = [];
    }

    
    for (let line of lines) {
        lineArr = line.split(splitter).filter(Boolean)

        for (i=0; i<lineArr.length; i++) {
            cols[i] ? cols[i].push(lineArr[i]) : cols[i] = lineArr[i]
        }
    }

    for (let col of cols) {
        const operator = col[col.length-1]

        let tmpArr = []

        for (i=0; i < col.length-1; i++) {
            tmpArr.push(parseInt(col[i]))
        }

        // console.log(tmpArr)
        // console.log(operator)

        if (operator == "*") {
            let result = tmpArr.reduce(
                (accumulator, currentValue) => accumulator * currentValue,
                1,
            )

            // console.log(`${tmpArr}: operator = ${operator} & total = ${result}`)

            total += result
        } else if (operator == "+") {
            let result = tmpArr.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0,
            )

            // console.log(`${tmpArr}: operator = ${operator} & total = ${result}`)

            total += result
        }
    }
    
    resultDisplay(total);
}