import words from './words.json' assert { type: "json" };

const letterMapCorners ={ 
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

export const posFaces = {
    7: 7, // UB
    8: 8, // UR
    9: 9, // UF
    10: 10, // UL
    11: 18, // LF
    12: 16, // RF
    13: 26, // RB
    14: 24, // LB
    15: 27, // FD
    16: 21, // RD
    17: 29, // BD
    18: 13, // LD
    // corners
    19: 48,
    20: 44,
    21: 40,
    22: 36,
    23: 51,
    24: 46,
    25: 53,
    26: 54
}

export const getCornerWords = (cubeState) => {  
    let pos = 25; // buffer
    let face = 53;
    
    let letters = "";
    const corners = [19, 20, 21, 22, 23, 24, 25, 26].filter(corner => corner !== cubeState.positions[corner]); // can be order differently


    while (corners.length) {
        if (!pos) {
            pos = corners[0];
            face = posFaces[pos];
            letters += letterMapCorners[face];
        }
        // console.log(pos, face, letterMapCorners[face]);
        corners.splice(corners.indexOf(pos), 1);

        if (pos == cubeState.positions[pos]) {
            if (face == cubeState.faces[face]) {
                // solved case
                pos = null;
            } else {
                // twist case
                pos = null;
            }
        } else {
            pos = cubeState.positions[pos];
            face = cubeState.faces[face];
            // console.log("next", pos, face, letterMapCorners[face], corners);
            if (corners.indexOf(pos) < 0) {
                if (pos != 25) // buffer
                    letters += letterMapCorners[face];
                pos = null;
            } else {
                letters += letterMapCorners[face];
            }
        }  
    }
    
    return letters.match(/.{1,2}/g) //.map(combi => combi.length == 2 ? ( words[combi] || "TBD") : combi);
}

export const getEdgeWords = (cubeState) => {  
    let pos = 9;
    let face = 9;
    
    let letters = "";
    const edges = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].filter(edge => edge !== cubeState.positions[edge]);;

    while (edges.length) {
        if (!pos) {
            pos = edges[0];
            face = posFaces[pos];
            letters += letterMapEdges[face];
        }
        // console.log(pos, face, letterMapEdges[face]);
        edges.splice(edges.indexOf(pos), 1);

        if (pos == cubeState.positions[pos]) {
            if (face == cubeState.faces[face]) {
                // solved case
                pos = null;
            } else {
                // twist case
                pos = null;
            }
        } else {
            pos = cubeState.positions[pos];
            face = cubeState.faces[face];
            // console.log("next", pos, face, letterMapEdges[face]);
            if (edges.indexOf(pos) < 0) {
                if (pos != 9) // buffer
                    letters += letterMapEdges[face];
                pos = null;
            } else {
                letters += letterMapEdges[face];
            }
        }  
    }
    
    return letters.match(/.{1,2}/g);
}