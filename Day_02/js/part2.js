function part2Main(input) {
    let lines = input.split(',');
    let invalidIds = [];
    
    for (let line of lines) {
        [start, end] = line.split('-');
        start = parseInt(start)
        end = parseInt(end)

        for (i = start; i < end+1; i++) {
            let digit = String(i);
            let digitCount = digit.length

            // console.log({digit, digitCount})

            for (c=1; c < digitCount; c++) {
                if (digit.length%c !== 0) continue;
                let pattern = new RegExp(`.{${c}}`, "g")
                let blocks = digit.match(pattern)

                console.log(blocks)

                if (blocks.every(val => val === blocks[0])) {
                    invalidIds.push(i)
                    // console.log(`Pushed ${i} to invalid because all blocks in ${blocks} are identical`)
                    break;
                }

            }
        }
    }

    const sum = invalidIds.reduce((partialSum, a) => partialSum + a, 0);
    
    resultDisplay(sum);
}