function part1Main(input) {
    let lines = input.split('\n');
    let ranges = [];
    let ids = [];
    let freshIngredients = 0;
    
    for (let line of lines) {
        const currLine = line.toString
        const rangeRgx = /\-/
        const idsRgx = /\d+/

        if (rangeRgx.test(line)) {
            let range = line.trim().split('-');
            range = [parseInt(range[0]), parseInt(range[1])]
            ranges.push(range)
        } else if (idsRgx.test(line)) {
            ids.push(parseInt(line.trim()))
        }
    }

    console.group('DATA')
        console.log(ranges)
        console.log(ids)
    console.groupEnd()

    itemLoop: for (let item of ids) {
        rangeLoop: for (let range of ranges) {
            if (item >= range[0] && item <= range[1]) {
                freshIngredients++
                console.warn(`Found fresh item ${item} in range ${range}`)
                break;
            }
        }
    }
    
    resultDisplay(freshIngredients);
}