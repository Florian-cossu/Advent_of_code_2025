function part2Main(input) {
    let lines = input.split('\n');
    let joltage = 0;
    let lineN = 1;
    
    for (let line of lines) {
        let batteriesArr = line.split("")
        let ordered = line.replace(/(.+?)\1+/g, "$1").split("").sort().reverse()
        let indicesArr = []

        
        for (let i=0; (i < ordered.length && indicesArr.length < 12); i++) {
            let digit = ordered[i]
            
            for (let x=0; (x < batteriesArr.length && indicesArr.length < 12); x++) {
                batteriesArr[x] === digit ? indicesArr.push(x) : null;
            }
        }
        
        let joltageStr = ""
        
        indicesArr.sort((a, b) => a - b)

        for (let i= 0; i < 12; i++) {
            let index = indicesArr[i]
            joltageStr = joltageStr + batteriesArr[index]
        }
        
        console.group()
        console.log(`Line ${lineN} ordered = ${ordered}`)
        console.log(`Retrieved ${indicesArr.length} indices: ${indicesArr}`)
        console.log(`Joltage for line${lineN}: ${joltageStr}`)
        console.groupEnd()

        joltage += parseInt(joltageStr)
        lineN++
    }

    resultDisplay(joltage);
}