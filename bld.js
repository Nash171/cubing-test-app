import { POSITIONS } from './algs.js';

const letterMapCorners = { 
    53: 'A',
    54: 'B',
    51: 'C',
    52: 'D',
    45: 'E',
    46: 'F',
    43: 'G',
    44: 'H',
    41: 'I',
    42: 'J',
    39: 'K',
    40: 'L',
    37: 'M',
    38: 'N',
    35: 'O',
    36: 'P',
    49: 'Q',
    50: 'R',
    47: 'S',
    48: 'T',
    33: 'U',
    34: 'V',
    31: 'W',
    32: 'X'
}

const letterMapEdges ={ 
    29: 'A',
    30: 'B',
    27: 'C',
    28: 'D',
    21: 'E',
    22: 'F',
    19: 'G',
    20: 'H',
    17: 'I',
    18: 'J',
    15: 'K',
    16: 'L',
    13: 'M',
    14: 'N',
    11: 'O',
    12: 'P',
    25: 'Q',
    26: 'R',
    23: 'S',
    24: 'T',
    9: 'U',
    10: 'V',
    7: 'W',
    8: 'X'
}

export const posFaces = { // yellow / green
    // edges
    7: [7, 23], // DB
    8: [8, 19], // DL
    9: [9, 15], // DF
    10: [10, 11], // DR
    11: [18, 12], // LF
    12: [16, 22], // RF
    13: [26, 20], // BL
    14: [24, 14], // BR
    15: [27, 17], // UF
    16: [21, 28], // LU
    17: [29, 25], // UB
    18: [13, 30], // RU
    // corners - preferred, w/y
    19: [48, 31],
    20: [44, 32],
    21: [40, 33],
    22: [36, 34],
    23: [51, 51],
    24: [46, 52],
    25: [53, 53],
    26: [54, 54]
}

export const getCornerLetters = (cubeState) => {  
    let pos = 25; // buffer
    let face = 53;
    
    const faces = [];
    const corners = [22, 21, 19, 24, 23, 20, 26, 25];
    const twists = [];

    while (corners.length) {
        if (!pos) {
            pos = corners[0];
            face = posFaces[pos][0];
            faces.push(letterMapCorners[face]);
        }
        // console.log(pos, face, letterMapCorners[face]);
        corners.splice(corners.indexOf(pos), 1);

        if (pos == cubeState.positions[pos]) {
            // twist case
            if (face != cubeState.faces[face]) {
                faces.pop();
                twists.push(letterMapCorners[POSITIONS[pos].faces.find(p => cubeState.faces[p] === posFaces[pos][1])]);
            }
            pos = null;
        } else {
            pos = cubeState.positions[pos];
            face = cubeState.faces[face];
            // console.log("next", pos, face, letterMapCorners[face], corners);
            if (corners.indexOf(pos) < 0) {
                if (pos != 25) // buffer
                    faces.push(letterMapCorners[face]);
                pos = null;
            } else {
                faces.push(letterMapCorners[face]);
            }
        }  
    }
    
    return [faces.join("").match(/.{1,2}/g), twists];
}

export const getEdgeLetters = (cubeState) => {  
    let pos = 9;
    let face = 9;
    
    const faces = [];
    const edges = [11, 12, 13, 14, 17, 15, 7, 8, 10, 16, 18, 9];
    const twist = [];

    while (edges.length) {
        if (!pos) {
            pos = edges[0];
            face = posFaces[pos][0];
            faces.push(letterMapEdges[face]);
        }
        // console.log(pos, face, letterMapEdges[face]);
        edges.splice(edges.indexOf(pos), 1);

        if (pos == cubeState.positions[pos]) {
            // twist case
            if (face != cubeState.faces[face]) {
                faces.pop();
                twist.push(letterMapEdges[posFaces[pos][0]]+letterMapEdges[posFaces[pos][1]]);
            }
            pos = null;
        } else {
            pos = cubeState.positions[pos];
            face = cubeState.faces[face];
            // console.log("next", pos, face, letterMapEdges[face]);
            if (edges.indexOf(pos) < 0) {
                if (pos != 9) // buffer
                faces.push(letterMapEdges[face]);
                pos = null;
            } else {
                faces.push(letterMapEdges[face]);
            }
        }  
    }
    
    return [faces.join("").match(/.{1,2}/g), twist];
}