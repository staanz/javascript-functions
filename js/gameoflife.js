function seed() {

    return Array.prototype.slice.call(arguments);
}

function same([x, y], [j, k]) {
    if (x === j) {
        return y === k;
    } else return false;
}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
    return this.some(a => cell.every((v, i) => v === a[i]))
}

const printCell = (cell, state) => {
    if (state.some(a => cell.every((v, i) => v === a[i]))) {
        return '\u25A3';
    } else {
        return '\u25A2';
    }
};

const corners = (state = []) => {
    if (state.length === 0) {
        return {
            topRight: [0, 0],
            bottomLeft: [0, 0]
        }
    }
    const xs = state.map(([x, _]) => x);
    const ys = state.map(([_, y]) => y);
    return {
        topRight: [Math.max(...xs), Math.max(...ys)],
        bottomLeft: [Math.min(...xs), Math.min(...ys)]
    };
};

const printCells = (state) => {
    let cs = corners(state);
    let bl = cs.bottomLeft;
    let tr = cs.topRight;
    let finalString = '';

    for (let i = tr[1]; i >= bl[1]; i--) {
        for (let j = bl[0]; j <= tr[0]; j++) {
            finalString += printCell([j, i], state) + ' ';
        }
        finalString += '\n';
    }
    return finalString;
};

const getNeighborsOf = ([x, y]) => {
    let xsLow = x - 1;
    let xsHigh = x + 1;
    let ysLow = y - 1;
    let ysHigh = y + 1;

    return [
        [xsLow, ysLow],
        [xsLow, y],
        [xsLow, ysHigh],
        [xsHigh, ysLow],
        [xsHigh, y],
        [xsHigh, ysHigh],
        [x, ysLow],
        [x, ysHigh],

    ]
};

const getLivingNeighbors = (cell, state) => {
};

const willBeAlive = (cell, state) => {
};

const calculateNext = (state) => {
};

const iterate = (state, iterations) => {
};

const main = (pattern, iterations) => {
};

const startPatterns = {
    rpentomino: [
        [3, 2],
        [2, 3],
        [3, 3],
        [3, 4],
        [4, 4]
    ],
    glider: [
        [-2, -2],
        [-1, -2],
        [-2, -1],
        [-1, -1],
        [1, 1],
        [2, 1],
        [3, 1],
        [3, 2],
        [2, 3]
    ],
    square: [
        [1, 1],
        [2, 1],
        [1, 2],
        [2, 2]
    ]
};

const [pattern, iterations] = process.argv.slice(2);
const runAsScript = require.main === module;

if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
        main(pattern, parseInt(iterations));
    } else {
        console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
}

exports.seed = seed;
exports.same = same;
exports.contains = contains;
exports.getNeighborsOf = getNeighborsOf;
exports.getLivingNeighbors = getLivingNeighbors;
exports.willBeAlive = willBeAlive;
exports.corners = corners;
exports.calculateNext = calculateNext;
exports.printCell = printCell;
exports.printCells = printCells;
exports.startPatterns = startPatterns;
exports.iterate = iterate;
exports.main = main;