import { Cube, MOVES, copyCube } from "./cube.js";

const execMove = (cube, m) => {
    // console.log("move", m);
    const newcube = copyCube(cube);

    const move = MOVES[m[0]];
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
    let cube = new Cube();

    if (!seqS) return cube;

    const seqA = seqS.split(" ");
    for (const m of seqA) {
        cube = execMove(cube, m);
        // console.log(cube);
    }

    return cube;
}

// scramble("R");