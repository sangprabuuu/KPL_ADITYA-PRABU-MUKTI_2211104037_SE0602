const readline = require("readline");

/**
 * Enum untuk menyimpan state permainan
 * @readonly
 * @enum {string}
 */
const GameState = {
  START: "START",
  PLAYING: "PLAYING",
  GAME_OVER: "GAME_OVER"
};

let currentState = GameState.START;
let isRunning = true; 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Menjalankan state machine utama permainan
 * Menyesuaikan state berdasarkan input user
 */
function runStateMachine() {
  if (!isRunning) return; 

  console.log(`Current State: ${currentState}`);

  rl.question("Enter Command: ", (command) => {
    switch (currentState) {
      case GameState.START:
        handleStartCommand(command);
        break;
      case GameState.PLAYING:
        handlePlayingCommand(command);
        break;
      case GameState.GAME_OVER:
        handleGameOverCommand(command);
        break;
    }

    runStateMachine();
  });
}

/**
 * Menangani input ketika state saat ini adalah START
 * @param {string} command
 */
function handleStartCommand(command) {
  if (command === "PLAY") {
    currentState = GameState.PLAYING;
  } else if (command === "EXIT") {
    exitGame();
  }
}

/**
 * Menangani input ketika state saat ini adalah PLAYING
 * @param {string} command
 */
function handlePlayingCommand(command) {
  if (command === "LOSE") {
    currentState = GameState.GAME_OVER;
  } else if (command === "EXIT") {
    exitGame();
  }
}

/**
 * Menangani input ketika state saat ini adalah GAME_OVER
 * @param {string} command
 */
function handleGameOverCommand(command) {
  if (command === "RESTART") {
    currentState = GameState.START;
  } else if (command === "EXIT") {
    exitGame();
  }
}

/**
 * Mengakhiri permainan dan menutup readline
 */
function exitGame() {
  console.log("Exiting Game...");
  isRunning = false; 
  rl.close();
}

runStateMachine();
