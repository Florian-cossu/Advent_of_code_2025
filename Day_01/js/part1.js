function part1Main(input) {
    let dialPos = 50;
    let password = 0;
    let lines = input.split('\n');
    
    for (let line of lines) {
        if (!line.trim()) continue;
        
        let dir = line[0];
        let rotations = parseInt(line.substring(1));
        let change = dir === "L" ? -rotations : rotations;
        
        dialPos += change;
        
        while (dialPos >= 100) {
            dialPos -= 100;
        }
        while (dialPos < 0) {
            dialPos += 100;
        }
        
        if (dialPos === 0) {
            password++;
        }
        
        console.log(`${line}: dialPos = ${dialPos}`);
    }
    
    resultDisplay(password);
}