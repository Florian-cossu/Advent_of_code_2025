function part2Main(input) {
    let lines = input.split('\n');
    let ranges = [];
    let ids = [];
    
    for (let line of lines) {
        const rangeRgx = /\-/

        if (rangeRgx.test(line)) {
            let range = line.trim().split('-');
            let rearrangedRange

            let a = parseInt(range[0])
            let b = parseInt(range[1])

            if (a < b) {
                rearrangedRange = [a, b]
            } else {
                rearrangedRange = [b, a]
            }

            ranges.push(rearrangedRange)
        }
    }

    // console.group('DATA')
    //     console.log(ranges)
    // console.groupEnd()

    let sortedRanges = ranges.sort(function(a, b) {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });

    let tmp = []

    for (let range of sortedRanges) {
        tmp.push(range)
    }

    console.log(tmp)

    for (let i=0; i<sortedRanges.length; i++) {
        let [a,b] = sortedRanges[i]
        let [x,y] = sortedRanges[i+1]

        console.group("DEBUG")
        console.log(`Looking at range ${sortedRanges[i]}`)
        console.log(`Next range ${sortedRanges[i+1]}`)
        console.groupEnd()

        if (a < x && x < b && a < y && y < b) {
            console.log(`merging ${sortedRanges[i+1]} into ${sortedRanges[i]}`)
            sortedRanges.splice(i+1)
            i--
            console.log(`Next range ${sortedRanges[i]}`)
        } else if (a < x && x < b && b < y) {
            console.log(`merging ${sortedRanges[i+1]} and ${sortedRanges[i]}`)
            sortedRanges[i][1] = y
            sortedRanges.splice(i+1)
            i--
            console.log(`Next range ${sortedRanges[i]}`)
        }
    }

    console.log(sortedRanges)

    // for (let range of ranges) {
    //     console.log(`Working on range: ${range}`)
    //     for (let i = range[0]; i<=range[1]; i++) {
    //         if (!ids.includes(i)) {
    //             ids.push(i)
    //         }
    //     }
    // }
    
    resultDisplay(ids.length);
}