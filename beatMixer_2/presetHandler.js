//presets array for presetHandler
const presets = require('./presets');

const presetHandler = (reqType, index, newPreset) => {
    let returnArray = [];
    
    if (reqType != 'GET' && reqType != 'PUT') {
        return [400];
    } else if (presets[index] === undefined) {
        return [404];
    } else {
        returnArray.push(200);
    }
    
    if (reqType === 'GET') {
        returnArray.push(presets[index]);
    } else if (reqType === 'PUT') {
        presets[index] = newPreset;
        returnArray.push(newPreset);
    }
    
    return returnArray;
    
    
};

module.exports = presetHandler;
