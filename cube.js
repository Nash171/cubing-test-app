export const POSITIONS = {
    1: {
        name: 'U',
        faces: [1]
    },
    2: {
        name: 'L',
        faces: [2]
    },
    3: {
        name: 'F',
        faces: [3]
    },
    4: {
        name: 'R',
        faces: [4]
    },
    5: {
        name: 'B',
        faces: [5]
    },
    6: {
        name: 'D',
        faces: [6]
    },
    // edges
    7: {
        name: 'UB',
        faces: [7, 23]
    },
    8: {
        name: 'UR',
        faces: [8, 19]
    },
    9: {
        name: 'UF',
        faces: [9, 15]
    },
    10: {
        name: 'UL',
        faces: [10, 11]
    },
    11: {
        name: 'LF',
        faces: [12, 18]
    },
    12: {
        name: 'FR',
        faces: [16, 22]
    },
    13: {
        name: 'RB',
        faces: [20, 26]
    },
    14: {
        name: 'LB',
        faces: [14, 24]
    },
    15: {
        name: 'FD',
        faces: [17, 27]
    },
    16: {
        name: 'RD',
        faces: [21, 28]
    },
    17: {
        name: 'BD',
        faces: [25, 29]
    },
    18: {
        name: 'LD',
        faces: [13, 30]
    },
    // corners
    19: {
        name: 'ULB',
        faces: [31, 35, 48]
    },
    20: {
        name: 'URB',
        faces: [32, 44, 47]
    },
    21: {
        name: 'UFR',
        faces: [33, 40, 43]
    },
    22: {
        name: 'UFL',
        faces: [34, 36, 39]
    },
    23: {
        name: 'FLD',
        faces: [37, 42, 51]
    },
    24: {
        name: 'FRD',
        faces: [41, 46, 52]
    },
    25: {
        name: 'RBD',
        faces: [45, 50, 53]
    },
    26: {
        name: 'LBD',
        faces: [38, 49, 54]
    }
}

export const FACES = {
    // centers
    1: {
        side: 'U',
        letter: '-',
        position: 1,
    },
    2: {
        side: 'L',
        letter: '-',
        position: 2,
    },
    3: {
        side: 'F',
        letter: '-',
        position: 3,
    },
    4: {
        side: 'R',
        letter: '-',
        position: 4,
    },
    5: {
        side: 'B',
        letter: '-',
        position: 5,
    },
    6: {
        side: 'D',
        letter: '-',
        position: 6,
    },
    // edges
    7: {
        side: 'U',
        letter: 'A',
        position: 7,
    },
    8: {
        side: 'U',
        letter: 'B',
        position: 8,
    },
    9: {
        side: 'U',
        letter: 'C',
        position: 9,
    },
    10: {
        side: 'U',
        letter: 'D',
        position: 10,
    },
    11: {
        side: 'L',
        letter: 'E',
        position: 10,
    },
    12: {
        side: 'L',
        letter: 'F',
        position: 11,
    },
    13: {
        side: 'L',
        letter: 'G',
        position: 18,
    },
    14: {
        side: 'L',
        letter: 'H',
        position: 14,
    },
    15: {
        side: 'F',
        letter: 'I',
        position: 9,
    },
    16: {
        side: 'F',
        letter: 'J',
        position: 12,
    },
    17: {
        side: 'F',
        letter: 'K',
        position: 15,
    },
    18: {
        side: 'F',
        letter: 'L',
        position: 11,
    },
    19: {
        side: 'R',
        letter: 'M',
        position: 8,
    },
    20: {
        side: 'R',
        letter: 'N',
        position: 13,
    },
    21: {
        side: 'R',
        letter: 'O',
        position: 16,
    },
    22: {
        side: 'R',
        letter: 'P',
        position: 12,
    },
    23: {
        side: 'B',
        letter: 'Q',
        position: 7,
    },
    24: {
        side: 'B',
        letter: 'R',
        position: 14,
    },
    25: {
        side: 'B',
        letter: 'S',
        position: 17,
    },
    26: {
        side: 'B',
        letter: 'T',
        position: 13,
    },
    27: {
        side: 'D',
        letter: 'U',
        position: 15,
    },
    28: {
        side: 'D',
        letter: 'V',
        position: 16,
    },
    29: {
        side: 'D',
        letter: 'W',
        position: 17,
    },
    30: {
        side: 'D',
        letter: 'X',
        position: 18,
    },
    // corners
    31: {
        side: 'U',
        letter: 'A',
        position: 19,
    },
    32: {
        side: 'U',
        letter: 'B',
        position: 20,
    },
    33: {
        side: 'U',
        letter: 'C',
        position: 21,
    },
    34: {
        side: 'U',
        letter: 'D',
        position: 22,
    },
    35: {
        side: 'L',
        letter: 'E',
        position: 19,
    },
    36: {
        side: 'L',
        letter: 'F',
        position: 22,
    },
    37: {
        side: 'L',
        letter: 'G',
        position: 23,
    },
    38: {
        side: 'L',
        letter: 'H',
        position: 26,
    },
    39: {
        side: 'F',
        letter: 'I',
        position: 22,
    },
    40: {
        side: 'F',
        letter: 'J',
        position: 21,
    },
    41: {
        side: 'F',
        letter: 'K',
        position: 24,
    },
    42: {
        side: 'F',
        letter: 'L',
        position: 23,
    },
    43: {
        side: 'R',
        letter: 'M',
        position: 21,
    },
    44: {
        side: 'R',
        letter: 'N',
        position: 20,
    },
    45: {
        side: 'R',
        letter: 'O',
        position: 25,
    },
    46: {
        side: 'R',
        letter: 'P',
        position: 24,
    },
    47: {
        side: 'B',
        letter: 'Q',
        position: 20,
    },
    48: {
        side: 'B',
        letter: 'R',
        position: 19,
    },
    49: {
        side: 'B',
        letter: 'S',
        position: 26,
    },
    50: {
        side: 'B',
        letter: 'T',
        position: 25,
    },
    51: {
        side: 'D',
        letter: 'U',
        position: 23,
    },
    52: {
        side: 'D',
        letter: 'V',
        position: 24,
    },
    53: {
        side: 'D',
        letter: 'W',
        position: 25,
    },
    54: {
        side: 'D',
        letter: 'X',
        position: 26,
    },
}

export const COLORS = {
    1: 'white',
    2: 'orange',
    3: 'green',
    4: 'red',
    5: 'blue',
    6: 'yellow',
}

export const MOVES = {
    R: {
        positions: [[21, 20, 25, 24], [8, 13, 16, 12]],
        faces: [[19, 20, 21, 22], [16, 8, 26, 28], [43, 44, 45, 46], [40, 32, 50, 52], [33, 47, 53, 41]],
    },
    L: {
        positions: [[19, 22, 23, 26], [10, 11, 18, 14]],
        faces: [[11, 12, 13, 14], [10, 18, 30, 24], [35, 36, 37, 38], [34, 42, 54, 48], [31, 39, 51, 49]],
    },
    U: {
        positions: [[19, 20, 21, 22], [7, 8, 9, 10]],
        faces: [[7, 8, 9, 10], [23, 19, 15, 11], [31, 32, 33, 34], [48, 44, 40, 36], [47, 43, 39, 35]],
    },
    D: {
        positions: [[23, 24, 25, 26], [15, 16, 17, 18]],
        faces: [[27, 28, 29, 30], [17, 21, 25, 13], [51,52, 53, 54], [38, 42, 46, 50], [37, 41, 45, 49]],
    },
    F: {
        positions: [[22, 21, 24, 23], [9, 12, 15, 11]],
        faces: [[15, 16, 17, 18], [9, 22, 27, 12], [39, 40, 41, 42], [34, 43, 52, 37], [36, 33, 46, 51]],
    },
    B: {
        positions: [[20, 19, 26, 25], [7, 14, 17, 13]],
        faces: [[23, 24, 25, 26], [7, 14, 29, 20], [47, 48, 49, 50], [32, 35, 54, 45], [44, 31, 38, 53]],
    },
}

export class Cube {
    constructor() {
        this.type = "333";
        this.positions = {};
        this.faces = {};

        for (const pid in POSITIONS) {
            this.positions[pid] = new Cubit(pid);
        }

        for (const fid in FACES) {
            this.faces[fid] = new Facit(fid);
        }
    }

    logState() {
      console.log(this);
    }
}

class Cubit {
    constructor(id) {
        this.id = id;
        this.position = id;
        this.facits = POSITIONS[id].faces;
    }

    logState() {
        console.log(this);
    }
}

class Facit {
    constructor(id) {
        this.id = id;
        this.face = id;
        this.cubit = FACES[id].position;
        this.color = id > 6 ? Math.floor(((id-7)%24)/4)+1 : id;
        this.letter = id > 6 ? String.fromCharCode(65+((id-7)%24)) : '-';
    }

    logState() {
        console.log(this);
    }
}

export const copyCube = (cube) => {
    const newcube = JSON.parse(JSON.stringify(cube));
    return newcube;
}

const cube = new Cube();
cube.logState();