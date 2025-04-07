const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const State = {
    START: "START",
    PLAYING: "PLAYING",
    GAME_OVER: "GAME OVER"
};

let state = State.START;

function runStateMachine() {
    console.log(`Current State: ${state}`);
    rl.question("Enter Command: ", (command) => {
        switch (state) {
            case State.START:
                if (command === "PLAY") state = State.PLAYING;
                else if (command === "EXIT") return exitGame();
                break;
            case State.PLAYING:
                if (command === "LOSE") state = State.GAME_OVER;
                else if (command === "EXIT") return exitGame();
                break;
            case State.GAME_OVER:
                if (command === "RESTART") state = State.START;
                else if (command === "EXIT") return exitGame();
                break;
        }
        runStateMachine();
    });
}

function exitGame() {
    console.log("Exiting Game...");
    rl.close();
}

runStateMachine();
