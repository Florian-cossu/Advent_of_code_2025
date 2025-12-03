function part1Main(input) {
    let lines = input.split('\n');
    let joltage = 0;
    
    for (let line of lines) {
        let batteriesStr = line.replace(/(.+?)\1+/g, "$1");
        let batteriesArr = batteriesStr.split("")
        let ordered = batteriesArr.sort().reverse();
        let a = "";
        let b = "";
        let startIndex2 = 0;
        let stop = false;
        
        for (let i=0; (i < ordered.length - 1 && stop == false); i++) {
            if (batteriesStr.indexOf(ordered[i]) != batteriesArr.length - 1) {
                // console.log(`Biggest: ${ordered[i]}`)
                a = ordered[i];
                startIndex2 = batteriesStr.indexOf(ordered[i])+1;
                stop = true
                break;
            }
        }

        b = batteriesStr.substr(startIndex2).split("").sort().reverse()[0]
        
        let packJoltage = parseInt(`${a}${b}`)
        // console.log(`Line ${line} packJoltage = ${packJoltage}`)
        joltage += packJoltage
    }
    
    resultDisplay(joltage);
}