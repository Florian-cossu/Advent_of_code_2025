function part1Main(input) {
    let lines = input.split(',');
    let invalidIds = [];
    
    for (let line of lines) {
        [start, end] = line.split('-');
        start = parseInt(start)
        end = parseInt(end)

        for (i = start; i < end+1; i++) {
            let digit = String(i);
            if (digit.length%2 !== 0) continue;

            let size = digit.length/2;
            [left, right] = [digit.substring(0, size), digit.substring(size)]
            if (left == right) invalidIds.push(i)
        }
    }

    const sum = invalidIds.reduce((partialSum, a) => partialSum + a, 0);
    
    resultDisplay(sum);
}