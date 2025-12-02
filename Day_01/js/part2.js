function part2Main(input) {
    let dialPos = 50;
    let password = 0;
    let lines = input.split('\n');
    
    for (let line of lines) {
        if (!line.trim()) continue;

        let originalDialPos = dialPos
        let dir = line[0];
        let rotations = parseInt(line.substring(1));
        let rotation = dir === "L" ? -rotations : rotations;
        if (Math.abs(rotation) >= 100) {
            password += Math.floor(Math.abs(rotation)/100)
            rotation = rotation%100
        }

        dialPos += rotation;

        if (dialPos === 0) {
            password++;
            console.log(`${line} - ${originalDialPos} -> ${dialPos} === 0 - ${password}`)
        } else if (dialPos > 99) {
            console.log(`${line} - ${originalDialPos} -> ${dialPos} > 99 - ${password}`)
            dialPos = dialPos%100
            password++
        } else if (dialPos < 0) {
            console.log(`${line} - ${originalDialPos} -> ${dialPos} < 0 - ${password}`)
            dialPos = 100 + dialPos%100
            if (originalDialPos !== 0) password++
        }
    }
    
    resultDisplay(password);
}