let kicks, snares, hiHats, rideCymbals;

kicks.fill(false, 0, 15);
snares.fill(false, 0, 15);
hiHats.fill(false, 0, 15);
rideCymbals.fill(false, 0, 15);

const toggleDrum = (drumType, index) => {
    drumType[index] = true;
};

const clear = drumType => {
    drumType.fill(false);
};

const invert = drumType => {
    drumType.forEach(drum => {
        return !drum;
    });
};

/*
const getNeighborPads = (x,y,size) => {
    if (x < 1 || y < 1 || x >= size - 1 || y >= size - 1) {
        return [];
    }
    return [[x,y+1],[x,y-1],[x+1,y],[x-1,y]];
}