function part2Main(input) {
    let dialPos = 50;
    let password = 0;
    let lines = input.split('\n');
    
    for (let line of lines) {
        if (!line.trim()) continue;
        let untouchedDialPos = dialPos;
        let dir = line[0];
        let rotations = parseInt(line.substring(1));
        let change = dir === "L" ? -rotations : rotations;
        
        dialPos += change;

        if (dialPos === 0) {
            password++;
        }
        
        if (dialPos > 100) {
            let it = change / 100
            if (it >= 1) {
                while (it > 0) {
                    dialPos -= 100
                    it--
                    password++
                }
                dialPos == 0 ? password++ : null;
                dialPos = dialPos - 100
                password++
            } else if (untouchedDialPos > 0 && dialPos < 0) {
                dialPos += dialPos - 100
                password++
            }
        } else if (dialPos < 0) {
            let it = Math.abs(change) / 100
            if (it >= 1) {
                while (it > 0) {
                    dialPos += 100
                    it--
                    password++
                }
                dialPos == 0 ? password++ : null;
                dialPos += 100
                password++
            } else if (untouchedDialPos < 0 && dialPos > 0) {
                dialPos += 100
                password++
            }
        } else if (untouchedDialPos < 0 && dialPos > 0) {
            dialPos += 100
            password++
            dialPos == 0 ? password++ : null;
        } else if (untouchedDialPos > 0 && dialPos < 0) {
            dialPos += dialPos - 100
            password++
            dialPos == 0 ? password++ : null;
        }
    }
    
    resultDisplay(password);
}