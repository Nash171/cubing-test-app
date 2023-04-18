const turns = {
    X: {
        U: 'B', B: 'D', D: 'F', F: 'U', R: 'R', L: 'L'
    },
    X2: {
        U: 'D', B: 'F', D: 'U', F: 'B', R: 'R', L: 'L'
    },
    XP: {
        U: 'F', B: 'U', D: 'B', F: 'D', R: 'R', L: 'L'
    },

    Y: {
        U: 'U', B: 'R', D: 'D', F: 'L', R: 'F', L: 'B'
    },
    Y2: {
        U: 'U', B: 'F', D: 'D', F: 'B', R: 'L', L: 'R'
    },
    YP: {
        U: 'U', B: 'L', D: 'D', F: 'R', R: 'B', L: 'F'
    },

    Z: {
        U: 'R', B: 'B', D: 'L', F: 'F', R: 'D', L: 'U'
    },
    Z2: {
        U: 'D', B: 'B', D: 'U', F: 'F', R: 'L', L: 'R'
    },
    ZP: {
        U: 'L', B: 'B', D: 'R', F: 'F', R: 'U', L: 'D'
    }
}

const layers = {
    R: {
        corners: ['RUF', 'RUB', 'RDB', 'RDF'],
        positions: [[9, 8, 13, 12], [8, 13, 16, 12]],
        faces: [[19, 20, 21, 22], [16, 8, 26, 28], [43, 44, 45, 46], [40, 32, 50, 52], [33, 47, 53, 41]],
        edges: ['RU', 'RB', 'RD', 'RF'],
        turn: ['X', 'X2', 'XP']
    },
    L: {
        corners: ['LUF', 'LDF', 'LDB', 'LUB'],
        positions: [[7, 10, 11, 14], [10, 11, 18, 14]],
        faces: [[11, 12, 13, 14], [10, 18, 30, 24], [35, 36, 37, 38], [34, 42, 54, 48], [31, 39, 51, 49]],
        edges: ['LU', 'LF', 'LD', 'LB'],
        turn: ['XP', 'X2', 'X']
    },
    U: {
        corners: ['RUF', 'LUF', 'LUB', 'RUB'],
        positions: [[7, 8, 9, 10], [7, 8, 9, 10]],
        faces: [[7, 8, 9, 10], [23, 19, 15, 11], [31, 32, 33, 34], [48, 44, 40, 36], [47, 43, 39, 35]],
        edges: ['RU', 'UF', 'LU', 'UB'],
        turn: ['Y', 'Y2', 'YP']
    },
    D: {
        corners: ['LDF', 'RDF', 'RDB', 'LDB'],
        positions: [[11, 12, 13, 14], [15, 16, 17, 18]],
        faces: [[27, 28, 29, 30], [17, 21, 25, 13], [51,52, 53, 54], [38, 42, 46, 50], [37, 41, 45, 49]],
        edges: ['DF', 'RD', 'DB', 'LD'],
        turn: ['YP', 'Y2', 'Y']
    },
    F: {
        corners: ['LUF', 'RUF', 'RDF', 'LDF'],
        positions: [[12, 11, 10, 9], [9, 12, 15, 11]],
        faces: [[15, 16, 17, 18], [9, 22, 27, 12], [39, 40, 41, 42], [34, 43, 52, 37], [36, 33, 46, 51]],
        edges: ['UF', 'RF', 'DF', 'LF'],
        turn: ['Z', 'Z2', 'ZP']
    },
    B: {
        corners: ['RUB', 'LUB', 'LDB', 'RDB'],
        positions: [[8, 7, 14, 13], [7, 14, 17, 13]],
        faces: [[23, 24, 25, 26], [7, 14, 29, 20], [47, 48, 49, 50], [32, 35, 54, 45], [44, 31, 38, 53]],
        edges: ['UB', 'LB', 'DB', 'RB'],
        turn: ['ZP', 'Z2', 'Z']
    },
}

const createCube = () => {
    const cube = {
        U: 'W', // 1
        L: 'O', // 2
        F: 'G', // 3
        R: 'R', // 4
        B: 'B', // 5
        D: 'Y', // 6

        LUF: { // 7
            L: 'O', U: 'W', F: 'G',
            // cubit: 7,
        },
        RUF: { // 8
            R: 'R', U: 'W', F: 'G'
        },
        RUB: { // 9
            R: 'R', U: 'W', B: 'B'
        },
        LUB: { // 10
            L: 'O', U: 'W', B: 'B'
        },
        LDF: { // 11
            L: 'O', D: 'Y', F: 'G'
        },
        RDF: { // 12
            R: 'R', D: 'Y', F: 'G'
        },
        RDB: { // 13
            R: 'R', D: 'Y', B: 'B'
        },
        LDB: { // 14
            L: 'O', D: 'Y', B: 'B'
        },
        UF: { // 15
            U: 'W', F: 'G'
        },
        RU: { // 16
            R: 'R', U: 'W'
        },
        UB: { // 17
            U: 'W', B: 'B'
        },
        LU: { // 18
            L: 'O', U: 'W'
        },
        LF: { // 19
            L: 'O', F: 'G'
        },
        RF: { // 20
            R: 'R', F: 'G'
        },
        RB: { // 21
            R: 'R', B: 'B'
        },
        LB: { // 22
            L: 'O', B: 'B'
        },
        DF: { // 23
            D: 'Y', F: 'G'
        },
        RD: { // 24
            R: 'R', D: 'Y'
        },
        DB: { // 25
            D: 'Y', B: 'B'
        },
        LD: { // 26
            L: 'O', D: 'Y'
        },
        positions: {
            // centers
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            // edges
            7: 7 , // UB
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
            1: 'W',
            2: 'O',
            3: 'G',
            4: 'R',
            5: 'B',
            6: 'Y',
            // edges
            7: 'W',
            8: 'W',
            9: 'W',
            10: 'W',
            11: 'O',
            12: 'O',
            13: 'O',
            14: 'O',
            15: 'G',
            16: 'G',
            17: 'G',
            18: 'G',
            19: 'R',
            20: 'R',
            21: 'R',
            22: 'R',
            23: 'B',
            24: 'B',
            25: 'B',
            26: 'B',
            27: 'Y',
            28: 'Y',
            29: 'Y',
            30: 'Y',
            // corners
            31: 'W',
            32: 'W',
            33: 'W',
            34: 'W',
            35: 'O',
            36: 'O',
            37: 'O',
            38: 'O',
            39: 'G',
            40: 'G',
            41: 'G',
            42: 'G',
            43: 'R',
            44: 'R',
            45: 'R',
            46: 'R',
            47: 'B',
            48: 'B',
            49: 'B',
            50: 'B',
            51: 'Y',
            52: 'Y',
            53: 'Y',
            54: 'Y'
        }
    }

    return cube;
}

const copyCube = (cube) => {
    const newcube = JSON.parse(JSON.stringify(cube));
    return newcube;
}

const execMove = (cube, move) => {
    // console.log("move", move);
    const newcube = copyCube(cube);

    const layer = layers[move[0]]; // console.log("layer", layer);
    const step = move[1] == "'" ? 3 : move[1] == "2" ? 2 : 1; // console.log("step", step);
    /*
    
    const turn = turns[layer.turn[step-1]]; // console.log("turn", turn);

    for (let i = 0; i < 4; i++) {
        const corner = cube[layer.corners[i]];
        const nCorner = newcube[layer.corners[(i+step) % 4]];
        // console.log(corner, nCorner);
        for (const c in corner) {
            nCorner[turn[c]] = corner[c];
        }
    }

    for (let i = 0; i < 4; i++) {
        const edge = cube[layer.edges[i]];
        const nEdge = newcube[layer.edges[(i+step) % 4]];
        // console.log(edge, nEdge);
        for (const e in edge) {
            nEdge[turn[e]] = edge[e];
        }
    }
*/
    for (const cycle of layer.positions) {
        console.log("position cycle", cycle);

        for (let i = 0; i < 4; i++) {
            const ni = (i+step) % 4;
            newcube.positions[cycle[ni]] = cube.positions[cycle[i]];
            // console.log(cube.positions[cycle[i]], " > ", newcube.positions[cycle[ni]]);
        }
    }

    for (const cycle of layer.faces) {
        console.log("face cycle", cycle);

        for (let i = 0; i < 4; i++) {
            const ni = (i+step) % 4;
            newcube.faces[cycle[ni]] = cube.faces[cycle[i]];
            // console.log(cube.positions[cycle[i]], " > ", newcube.positions[cycle[ni]]);
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
    }

    return cube;
}

scramble("R");