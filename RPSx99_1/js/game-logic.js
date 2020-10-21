let playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveThreeType, playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType, playerOneMoveOneValue, playerOneMoveTwoValue, playerOneMoveThreeValue, playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue;

const setPlayerMoves = (player = "", moveOneType = "", moveOneValue = 0, moveTwoType = "", moveTwoValue = 0, moveThreeType = "", moveThreeValue = 0) => {
    const inputs = [player, moveOneType, moveTwoType, moveThreeType, moveOneValue, moveTwoValue, moveThreeValue];
    const types = ['rock', 'paper', 'scissors'];
    
    for (var i = 0; i < 7; i++) {
        if (inputs[i] == undefined || inputs[i] == "") {
            return null;
    }
    
    for (i = 1; i < 4; i++) {
        if (inputs[i] != types[0] && inputs[i] != types[1] && inputs[i] != types[2]) {
            return null;
        }
    }
    
    for (i = 4; i < 7; i++) {
        if (inputs[i] > 99 || inputs[i] < 1) {
            return null;
        }
    }
    
    if ((inputs[4] + inputs[5] + inputs[6]) > 99 ) {
        return null;
    }
    
    if (player === "Player One") {
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;
        
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === "Player Two") {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveThreeType = moveThreeType;
        
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeValue = moveThreeValue;
    }
    }
}

const getRoundWinner = (roundNumber) => {
    
    switch (roundNumber) {
        case 1:
            if (playerOneMoveOneType === 'rock') {
                if (playerTwoMoveOneType === 'scissors') {
                    return 'Player One';
                } else if (playerTwoMoveOneType === 'paper') {
                    return 'Player Two';
                } else {
                    if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                        return 'Player One';
                    } else if (playerTwoMoveOneValue > playerOneMoveOneValue) {
                        return 'Player Two';
                    } else if (playerTwoMoveOneValue == playerOneMoveOneValue) {
                        return 'Tie';
                    } else {
                        return null;
                    }
                }
            }
            if (playerOneMoveOneType === 'paper') {
                if (playerTwoMoveOneType === 'scissors') {
                    return 'Player Two';
                } else if (playerTwoMoveOneType === 'rock') {
                    return 'Player One';
                } else {
                    if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                        return 'Player One';
                    } else if (playerTwoMoveOneValue > playerOneMoveOneValue) {
                        return 'Player Two';
                    } else if (playerTwoMoveOneValue == playerOneMoveOneValue) {
                        return 'Tie';
                    } else {
                        return null;
                    }
                }
            }
            if (playerOneMoveOneType === 'scissors') {
                if (playerTwoMoveOneType === 'paper') {
                    return 'Player One';
                } else if (playerTwoMoveOneType === 'rock') {
                    return 'Player Two';
                } else {
                    if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                        return 'Player One';
                    } else if (playerTwoMoveOneValue > playerOneMoveOneValue) {
                        return 'Player Two';
                    } else if (playerTwoMoveOneValue == playerOneMoveOneValue) {
                        return 'Tie';
                    } else {
                        return null;
                    }
                }
            }
            return null;
        case 2:
            if (playerOneMoveTwoType === 'rock') {
                if (playerTwoMoveTwoType === 'scissors') {
                    return 'Player One';
                } else if (playerTwoMoveTwoType === 'paper') {
                    return 'Player Two';
                } else {
                    if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                        return 'Player One';
                    } else if (playerTwoMoveTwoValue > playerOneMoveTwoValue) {
                        return 'Player Two';
                    } else if (playerTwoMoveTwoValue == playerOneMoveTwoValue) {
                        return 'Tie';
                    } else {
                        return null;
                    }
                }
            }
            if (playerOneMoveTwoType === 'paper') {
                if (playerTwoMoveTwoType === 'scissors') {
                    return 'Player Two';
                } else if (playerTwoMoveTwoType === 'rock') {
                    return 'Player One';
                } else {
                    if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                        return 'Player One';
                    } else if (playerTwoMoveTwoValue > playerOneMoveTwoValue) {
                        return 'Player Two';
                    } else if (playerTwoMoveTwoValue == playerOneMoveTwoValue) {
                        return 'Tie';
                    } else {
                        return null;
                    }
                }
            }
            if (playerOneMoveTwoType === 'scissors') {
                if (playerTwoMoveTwoType === 'paper') {
                    return 'Player One';
                } else if (playerTwoMoveTwoType === 'rock') {
                    return 'Player Two';
                } else {
                    if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                        return 'Player One';
                    } else if (playerTwoMoveTwoValue > playerOneMoveTwoValue) {
                        return 'Player Two';
                    } else if (playerTwoMoveTwoValue == playerOneMoveTwoValue) {
                        return 'Tie';
                    } else {
                        return null;
                    }
                }
            }
            return null;
        case 3:
            if (playerOneMoveThreeType === 'rock') {
                if (playerTwoMoveThreeType === 'scissors') {
                    return 'Player One';
                } else if (playerTwoMoveThreeType === 'paper') {
                    return 'Player Two';
                } else {
                    if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                        return 'Player One';
                    } else if (playerTwoMoveThreeValue > playerOneMoveThreeValue) {
                        return 'Player Two';
                    } else if (playerTwoMoveThreeValue == playerOneMoveThreeValue) {
                        return 'Tie';
                    } else {
                        return null;
                    }
                }
            }
            if (playerOneMoveThreeType === 'paper') {
                if (playerTwoMoveThreeType === 'scissors') {
                    return 'Player Two';
                } else if (playerTwoMoveThreeType === 'rock') {
                    return 'Player One';
                } else {
                    if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                        return 'Player One';
                    } else if (playerTwoMoveThreeValue > playerOneMoveThreeValue) {
                        return 'Player Two';
                    } else if (playerTwoMoveThreeValue == playerOneMoveThreeValue) {
                        return 'Tie';
                    } else {
                        return null;
                    }
                }
            }
            if (playerOneMoveThreeType === 'scissors') {
                if (playerTwoMoveThreeType === 'paper') {
                    return 'Player One';
                } else if (playerTwoMoveThreeType === 'rock') {
                    return 'Player Two';
                } else {
                    if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                        return 'Player One';
                    } else if (playerTwoMoveThreeValue > playerOneMoveThreeValue) {
                        return 'Player Two';
                    } else if (playerTwoMoveThreeValue == playerOneMoveThreeValue) {
                        return 'Tie';
                    } else {
                        return null;
                    }
                }
            }
            return null;
        default:
            return null;
    }
}

const getGameWinner = () => {
    let p1Count = 0;
    let p2Count = 0;
    let winner = '';
    
    for (var i = 1; i < 4; i++) {
        winner = getRoundWinner(i);
        if (winner === 'Player One') {
            p1Count++;
        } else if (winner === 'Player Two') {
            p2Count++;
        } else if (winner !== 'Tie') {
            return null;
        }
    }
    if (p1Count > p2Count) {
        return 'Player One';
    } else if (p1Count < p2Count) {
        return 'Player Two';
    } else if (winner === 'Tie') {
        return 'Tie';
    } else {
        return null;
    }
}

const setComputerMoves = () => {
    const types = ['rock', 'paper', 'scissors'];
    let power = 99;
    playerTwoMoveOneType = types[Math.floor(Math.random() * 3)];
    playerTwoMoveTwoType = types[Math.floor(Math.random() * 3)];
    playerTwoMoveThreeType = types[Math.floor(Math.random() * 3)];
    
    playerTwoMoveOneValue = 60;
    power -= playerTwoMoveOneValue;
    playerTwoMoveTwoValue = 14;
    power -= playerOneMoveTwoValue;
    playerTwoMoveThreeValue = power;
    
}