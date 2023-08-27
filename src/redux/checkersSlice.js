import { createSlice } from "@reduxjs/toolkit";
// Data
import cb from "../Data/cb";

const createRoute = (stamp, cb) => {
  let captureUp = false;
  let captureDown = false;
  let captureRight = false;
  let captureLeft = false;

  let rival = "";
  if (stamp.value.startsWith("white")) {
    rival = "black";
  } else {
    rival = "white";
  }

  // to up
  for (let row = stamp.row - 1; row >= 0; row--) {
    // black pawn cannot move back
    if (stamp.value === "black") {
      break;
    }
    // the route to be created for the pawn
    if (!stamp.value.includes("king")) {
      // if the cell is not empty
      if (cb[row][stamp.col] !== null) {
        // If the player's stamp encounters a rival stamp
        if (cb[row][stamp.col].startsWith(rival)) {
          if (cb[row - 1][stamp.col] === null) {
            cb[row - 1][stamp.col] = "capture";
            captureUp = true;
          }
        }
      } else {
        cb[row][stamp.col] = "route";
      }
      break;
    }
    // the route to be created for the king
    if (cb[row][stamp.col] !== null) {
      // If the player's stamp encounters an allied stamp
      if (stamp.value.startsWith(cb[row][stamp.col])) {
        break;
      }
      // If the player's stamp encounters a rival stamp
      if (cb[row][stamp.col].startsWith(rival)) {
        // if over of table's border
        if (row - 1 < 0) {
          break;
        }
        if (cb[row - 1][stamp.col] === null) {
          cb[row - 1][stamp.col] = "capture";
          captureUp = true;
        } else {
          break;
        }
      }
    } else {
      if (captureUp) {
        cb[row][stamp.col] = "capture";
      } else {
        cb[row][stamp.col] = "route";
      }
    }
  }

  // to down
  for (let row = stamp.row + 1; row < 8; row++) {
    // white pawn cannot move back
    if (stamp.value === "white") {
      break;
    }
    // the route to be created for the pawn
    if (!stamp.value.includes("king")) {
      // if the cell is not empty
      if (cb[row][stamp.col] !== null) {
        // If the player's stamp encounters a rival stamp
        if (cb[row][stamp.col].startsWith(rival)) {
          if (cb[row + 1][stamp.col] === null) {
            cb[row + 1][stamp.col] = "capture";
            captureDown = true;
          }
        }
      } else {
        cb[row][stamp.col] = "route";
      }
      break;
    }
    // the route to be created for the king
    if (cb[row][stamp.col] !== null) {
      // If the player's stamp encounters an allied stamp
      if (stamp.value.startsWith(cb[row][stamp.col])) {
        break;
      }
      // If the player's stamp encounters a rival stamp
      if (cb[row][stamp.col].startsWith(rival)) {
        // if over of table's border
        if (row + 1 > 7) {
          break;
        }
        if (cb[row + 1][stamp.col] === null) {
          cb[row + 1][stamp.col] = "capture";
          captureDown = true;
        } else {
          break;
        }
      }
    } else {
      if (captureDown) {
        cb[row][stamp.col] = "capture";
      } else {
        cb[row][stamp.col] = "route";
      }
    }
  }

  // to right
  for (let col = stamp.col + 1; col < 8; col++) {
    // the route to be created for the pawn
    if (!stamp.value.includes("king")) {
      // if the cell is not empty
      if (cb[stamp.row][col] !== null) {
        // If the player's stamp encounters a rival stamp
        if (cb[stamp.row][col].startsWith(rival)) {
          if (cb[stamp.row][col + 1] === null) {
            cb[stamp.row][col + 1] = "capture";
            captureRight = true;
          }
        }
      } else {
        cb[stamp.row][col] = "route";
      }
      break;
    }
    // the route to be created for the king
    if (cb[stamp.row][col] !== null) {
      // If the player's stamp encounters an allied stamp
      if (stamp.value.startsWith(cb[stamp.row][col])) {
        break;
      }
      // If the player's stamp encounters a rival stamp
      if (cb[stamp.row][col].startsWith(rival)) {
        // if over of table's border
        if (col + 1 > 7) {
          break;
        }
        if (cb[stamp.row][col + 1] === null) {
          cb[stamp.row][col + 1] = "capture";
          captureRight = true;
        } else {
          break;
        }
      }
    } else {
      if (captureRight) {
        cb[stamp.row][col] = "capture";
      } else {
        cb[stamp.row][col] = "route";
      }
    }
  }

  // to left
  for (let col = stamp.col - 1; col >= 0; col--) {
    // the route to be created for the pawn
    if (!stamp.value.includes("king")) {
      // if the cell is not empty
      if (cb[stamp.row][col] !== null) {
        // If the player's stamp encounters a rival stamp
        if (cb[stamp.row][col].startsWith(rival)) {
          if (cb[stamp.row][col - 1] === null) {
            cb[stamp.row][col - 1] = "capture";
            captureLeft = true;
          }
        }
      } else {
        cb[stamp.row][col] = "route";
      }
      break;
    }
    // the route to be created for the king
    if (cb[stamp.row][col] !== null) {
      // If the player's stamp encounters an allied stamp
      if (stamp.value.startsWith(cb[stamp.row][col])) {
        break;
      }
      // If the player's stamp encounters a rival stamp
      if (cb[stamp.row][col].startsWith(rival)) {
        // if over of table's border
        if (col - 1 < 0) {
          break;
        }
        if (cb[stamp.row][col - 1] === null) {
          cb[stamp.row][col - 1] = "capture";
          captureLeft = true;
        } else {
          break;
        }
      }
    } else {
      if (captureLeft) {
        cb[stamp.row][col] = "capture";
      } else {
        cb[stamp.row][col] = "route";
      }
    }
  }
  if (captureUp) {
    return true;
  } else if (captureDown) {
    return true;
  } else if (captureRight) {
    return true;
  } else if (captureLeft) {
    return true;
  } else {
    return false;
  }
};
const resetRoute = (cb) => {
  for (let row = 0; row < cb.length; row++) {
    for (let col = 0; col < cb[row].length; col++) {
      if (cb[row][col] === "route" || cb[row][col] === "capture") {
        cb[row][col] = null;
      }
    }
  }
};

const endGame = (cb, color) => {
  let filtered = [];
  cb.forEach((row) => {
    row.forEach((value) => {
      if (value !== null) {
        if (value.startsWith(color)) {
          filtered.push(value);
        }
      }
    });
  });
  if (filtered.length > 0) {
    return false;
  } else {
    return true;
  }
};

export const checkersSlice = createSlice({
  name: "checkers",
  initialState: {
    cb: [...cb], // Checkers Board
    selectedStamp: {},
    turn: "white",
    capture: false,
    end: false,
  },
  reducers: {
    restartGame: (state) => {
      state.cb = [...cb];
      state.selectedStamp = {};
      state.turn = "white";
      state.capture = false;
      state.end = false;
    },
    chooseStamp: (state, actions) => {
      if (actions.payload.value.startsWith(state.turn)) {
        state.selectedStamp = actions.payload;
        // reset route
        resetRoute(state.cb);
        // create route
        const route = createRoute(actions.payload, state.cb);
        if (route) {
          state.capture = route;
        }
      }
    },
    moveStamp: (state, actions) => {
      // if there is a stamp selected
      if (Object.keys(state.selectedStamp).length > 0) {
        // previous coordinates
        const sRow = state.selectedStamp.row;
        const sCol = state.selectedStamp.col;
        // new coordinates
        const aRow = actions.payload.row;
        const aCol = actions.payload.col;
        // move stamp
        state.cb[sRow][sCol] = null; // Previous
        state.cb[aRow][aCol] = state.selectedStamp.value; // New
        // reset route
        resetRoute(state.cb);
        // King
        if (aRow === 0 && state.selectedStamp.value === "white") {
          state.cb[aRow][aCol] = "white_king";
        }
        if (aRow === 7 && state.selectedStamp.value === "black") {
          state.cb[aRow][aCol] = "black_king";
        }
        // capture if true
        if (state.capture) {
          // reset capture
          state.capture = false;
          // capture stamp
          if (sRow !== aRow) {
            // Up | Down
            if (sRow > aRow) {
              // Up
              for (let row = aRow + 1; row < sRow; row++) {
                state.cb[row][sCol] = null;
              }
            } else {
              // Down
              for (let row = sRow + 1; row < aRow; row++) {
                state.cb[row][sCol] = null;
              }
            }
          } else {
            // Right | Left
            if (sCol < aCol) {
              // Right
              for (let col = sCol + 1; col < aCol; col++) {
                state.cb[sRow][col] = null;
              }
            } else {
              // Left
              for (let col = aCol + 1; col < sCol; col++) {
                state.cb[sRow][col] = null;
              }
            }
          }
          const stamp = {
            row: aRow,
            col: aCol,
            value: state.selectedStamp.value,
          };
          if (createRoute(stamp, state.cb)) {
            state.capture = true;
            state.selectedStamp = stamp;
          }
          //if caputere is false
          if (!state.capture) {
            // reset route
            resetRoute(state.cb);
            // reset selectedStamp
            state.selectedStamp = {};
            // change the turn of moves
            state.turn = state.turn === "white" ? "black" : "white";
            // Check all the cb of the player.
            state.cb.forEach((row, y) => {
              row.forEach((value, x) => {
                if (value !== null) {
                  if (value.startsWith(state.turn)) {
                    // create route
                    const stamp = { row: y, col: x, value: value };
                    if (createRoute(stamp, state.cb)) {
                      state.capture = true;
                    }
                  }
                }
              });
            });
            // reset route
            resetRoute(state.cb);
          }
        } else {
          // reset selectedStamp
          state.selectedStamp = {};
          // change the turn of moves
          state.turn = state.turn === "white" ? "black" : "white";
          // Check all the cb of the player.
          state.cb.forEach((row, y) => {
            row.forEach((value, x) => {
              if (value !== null) {
                if (value.startsWith(state.turn)) {
                  // create route
                  const stamp = { row: y, col: x, value: value };
                  if (createRoute(stamp, state.cb)) {
                    state.capture = true;
                  }
                }
              }
            });
          });
          // reset route
          resetRoute(state.cb);
        }
      }
      // End Game
      state.end = endGame(state.cb, state.turn);
    },
  },
});

export const { chooseStamp, moveStamp, restartGame } = checkersSlice.actions;

export default checkersSlice.reducer;
