import { createStore } from "redux";

//state

const initialState = {
  isLogged: false,
  editName: false,
  isEdited: false,
};

// actions creators

export const userLogIn = () => ({ type: "userLogIn" });

export const userLogOut = () => ({ type: "userLogOut" });

export const userEditName = () => ({ type: "userEditName" });

export const userSaveEditName = () => ({ type: "userSaveEditName" });

export const userCancelEditName = () => ({ type: "userCancelEditName" });

/*export const userName = () => ({ 
  type1: "userName1",
  type2: "userName2" 
});*/


function reducer(state = initialState, action) {
  if (action.type === "userLogIn") {
    return {
      ...state,
      isLogged: true,
    };
  }
  if (action.type === "userLogOut") {
    return {
      ...state,
      isLogged: false,
    };
  }

  if (action.type === "userEditName") {
    return {
      ...state,
      editName: true,
    }
  }

  if (action.type === "userSaveEditName") {
    return {
      ...state,
      editName: false,
      isEdited: true,
    }
  }

  if (action.type === "userCancelEditName") {
    return {
      ...state,
      editName: false,
    }
  }
  return state;
}

export const store = createStore(reducer);

/*import { createStore } from "redux";

const initialState = {
  player1: 0,
  player2: 0,
  advantage: null,
  winner: null,
  playing: true,
};


export const playPause = () => ({ type: "playPause" });

export const restartGame = () => ({ type: "restart" });

export const pointScored = (player) => ({
  type: "pointScored",
  payload: { player: player },
});

function reducer(state = initialState, action) {
  if (action.type === "restart") {
    return initialState;
  }
  if (action.type === "playPause") {
    if (state.winner) {
      return state;
    }
    return {
      ...state,
      playing: !state.playing,
    };
  }
  if (action.type === "pointScored") {
    const player = action.payload.player;
    const otherPlayer = player === "player1" ? "player2" : "player1";
    if (state.winner) {
      return state;
    }
    if (state.playing === false) {
      return state;
    }
    const currentPlayerScore = state[player];
    if (currentPlayerScore <= 15) {
      return { ...state, [player]: currentPlayerScore + 15 };
    }
    if (currentPlayerScore === 30) {
      return { ...state, [player]: 40 };
    }
    if (currentPlayerScore === 40) {
      if (state[otherPlayer] !== 40) {
        return { ...state, winner: player };
      }
      if (state.advantage === player) {
        return { ...state, winner: player };
      }
      if (state.advantage === null) {
        return { ...state, advantage: player };
      }
      return { ...state, advantage: null };
    }
  }
  return state;
}

export const store = createStore(reducer);*/