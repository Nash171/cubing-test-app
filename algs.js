
const moves = {
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

const createCube = () => {
    const cube = {
        positions: {
            // centers
            1: 1, // U
            2: 2, // L
            3: 3, // F
            4: 4, // R
            5: 5, // B
            6: 6, // D
            // edges
            7: 7, // UB
            8: 8, // UR
            9: 9, // UF
            10: 10, // UL
            11: 11, // LF
            12: 12, // RF
            13: 13, // RB
            14: 14, // LB
            15: 15, // FD
            16: 16, // RD
            17: 17, // BD
            18: 18, // LD
            // corners
            19: 19, // LUB
            20: 20, // RUB
            21: 21, // RUF
            22: 22, // LUF
            23: 23, // LDF
            24: 24, // RDF
            25: 25, // RBD
            26: 26 //  LBD
        },
        faces: {
            // centers
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            // edges
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            // corners
            31: 31,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            36: 36,
            37: 37,
            38: 38,
            39: 39,
            40: 40,
            41: 41,
            42: 42,
            43: 43,
            44: 44,
            45: 45,
            46: 46,
            47: 47,
            48: 48,
            49: 49,
            50: 50,
            51: 51,
            52: 52,
            53: 53,
            54: 54
        }
    }

    return cube;
}

const copyCube = (cube) => {
    const newcube = JSON.parse(JSON.stringify(cube));
    return newcube;
}

const execMove = (cube, m) => {
    // console.log("move", move);
    const newcube = copyCube(cube);

    const move = moves[m[0]]; // console.log("layer", layer);
    const step = m[1] == "'" ? 3 : m[1] == "2" ? 2 : 1; // console.log("step", step);

    for (const cycle of move.positions) {
        // console.log("position cycle", cycle);

        for (let i = 0; i < 4; i++) {
            const ni = (i+step) % 4;
            // console.log(cycle[i], " > ", cycle[ni]);
            newcube.positions[cycle[ni]] = cube.positions[cycle[i]];
        }
    }

    for (const cycle of move.faces) {
        // console.log("face cycle", cycle);

        for (let i = 0; i < 4; i++) {
            const ni = (i+step) % 4;
            // console.log(cycle[i], " > ", cycle[ni]);
            newcube.faces[cycle[ni]] = cube.faces[cycle[i]];
        }
    }

    return newcube;
}

export const scramble = (seqS) => {
    let cube = createCube();

    if (!seqS) return cube;

    const seqA = seqS.split(" ");
    for (const m of seqA) {
        cube = execMove(cube, m);
        // console.log(cube);
    }

    return cube;
}

// scramble("R");