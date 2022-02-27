
        let size;
        do {
          size = parseInt(prompt("size of the chessboard"));
        } while (isNaN(size));
        let hashTag = "#";
        let hashTagLine = "\n";

        for (let i = 1; i <= size; i++) {
            if (i % 2 === 0) {
                for (let a = 1; a <= size; a++) {
                    if (a % 2 === 0) {
                        hashTagLine += hashTag;
                    } else hashTagLine += " ";
                    if (a === size) hashTagLine += "\n";
                }
            } else {
                for (let I = 1; I <= size; I++) {
                    if (I % 2 === 0) {
                        hashTagLine += " ";
                    } else hashTagLine += hashTag;
                    if (I === size) hashTagLine += "\n";
                }
            }
        }
        console.log(hashTagLine);
