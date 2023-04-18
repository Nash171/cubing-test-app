import { scramble } from './algs.js';

const sides = {
    top: [
        [31, 7, 32],
        [10, 1, 8],
        [34, 9, 33]
    ],
    left: [
        [35, 11, 36],
        [14, 2, 12],
        [38, 13, 37]
    ],
    front: [
        [39, 15, 40],
        [18, 3, 16],
        [42, 17, 41]
    ],
    right: [
        [43, 19, 44],
        [22, 4, 20],
        [46, 21, 45]
    ],
    back: [
        [47, 23, 48],
        [26, 5, 24],
        [50, 25, 49]
    ],
    bottom: [
        [51, 27, 52],
        [30, 6, 28],
        [54, 29, 53]
    ]
}

const setColor = (fId, color) => {
    // console.log(fId);
    document.getElementById(fId).className = `face ${color}`;
}

const setCubeState = (cubeState) => {
    for (const face in cubeState.faces) {
        setColor(`face-${face}`,cubeState.faces[face]);
    }
}

document.getElementById("scrambleBtn").onclick = function() {
    const scrambleSeq = document.getElementById("scrambleSeq").value;
    const cubeState = scramble(scrambleSeq);
    // console.log(cubeState);

    setCubeState(cubeState);
};

window.onload = function() {
    for (const sId in sides) {
        const side = sides[sId];
        const sideElem = document.getElementById(sId);

        for (const r of side) {
            const row = document.createElement("div");
            row.className = "row";

            for (const f of r) {
                const face = document.createElement("div");
                face.id = `face-${f}`;
                face.className = "face";
                row.appendChild(face);
            }

            sideElem.appendChild(row);
        }
    }


    const cubeState = scramble("");
    // console.log(cubeState);

    setCubeState(cubeState);
};