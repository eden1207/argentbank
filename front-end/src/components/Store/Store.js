import { createStore } from "redux";

//state

const initialState = {
  isLogged: false,
  isEditName: false,
  user: '',


  /*userFirstName1: 'Tony',
  userSurName1: 'Stark',
  userFirstName2: 'Steve',
  userSurName2: 'Rogers',*/

  /*isEditName1: false,
  isEditName2: false,*/

  userFirstName1: '',
  userSurName1: '',
  userFirstName2: '',
  userSurName2: '',

  /*isUserUpDate: false,*/
  isUserUpDate1: false,
  isUserUpDate2: false,
};

// actions creators

export const userLogIn = () => ({ type: "userLogIn" });

export const userLogOut = () => ({ type: "userLogOut" });


export const changeUser = (user) => ({ 
  type: "changeUser",
  user: user, 
});




/*export const displayUsername = (firstname, surname, user) => ({ 
  type: "displayUsername",
  firstname: firstname, 
  surname: surname,
  user: user,
});*/

export const displayUsername1 = (firstname, surname, user) => ({ 
  type: "displayUsername1",
  firstname: firstname, 
  surname: surname,
  user: user,
});

export const displayUsername2 = (firstname, surname, user) => ({ 
  type: "displayUsername2",
  firstname: firstname, 
  surname: surname,
  user: user,
});





export const userEditMode = () => ({ 
  type: "userEditMode",
  value: true, 
});

export const userNoEditMode = () => ({ type: "userNoEditMode" });





export const usernameUpDate = (firstname, surname, user) => ({ 
  type: "usernameUpDate",
  userFirstname: firstname,
  userSurname: surname,
  user: user,
});










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




  /*if (action.type === "displayUsername") {
    const firstname = action.firstname;
    const surname = action.surname;
    if (action.user === 'user1') {
      return {
        ...state,
        userFirstName1: firstname,
        userSurName1: surname,
      };
    }
    if (action.user === 'user2') {
      return {
        ...state,
        userFirstName2: firstname,
        userSurName2: surname,
      };
    }
  }*/

  if (action.type === "displayUsername1") {
    const firstname = action.firstname;
    const surname = action.surname;

    return {
      ...state,
      user: action.user,
      userFirstName1: firstname,
      userSurName1: surname,
    };
  }

  if (action.type === "displayUsername2") {
    const firstname = action.firstname;
    const surname = action.surname;

    return {
      ...state,
      user: action.user,
      userFirstName2: firstname,
      userSurName2: surname,
    };
  }





  if (action.type === "changeUser") {
    const user = action.user;
    return {
      ...state,
      user: user,
    };
  }

  if (action.type === "userEditMode") {
    return {
      ...state,
      isEditName: true,
    }
  }

  if (action.type === "userNoEditMode") {
    return {
      ...state,
      isEditName: false,
    }
  }






  /*if (action.type === "usernameUpDate") {
    const userFirstname = action.userFirstname;
    const userSurname = action.userSurname;
    return {
      ...state,
      isUserUpDate: true,
      userFirstName1: userFirstname,
      userSurName1: userSurname,
    }
  }*/

  if (action.type === "usernameUpDate") {
    const userFirstname = action.userFirstname;
    const userSurname = action.userSurname;
    if (action.user === 'user1') {
      return {
        ...state,
        /*isUserUpDate: true,*/
        isUserUpDate1: true,
        userFirstName1: userFirstname,
        userSurName1: userSurname,
      };
    }
    if (action.user === 'user2') {
      return {
        ...state,
        /*isUserUpDate: true,*/
        isUserUpDate2: true,
        userFirstName2: userFirstname,
        userSurName2: userSurname,
      };
    }
  }



  /*if (action.type === "usernameUpDate") {
    const firstname = action.userFirstname;
    const surname = action.userSurname;
    if (action.user === 'user1') {
      return {
        ...state,
        isUserUpDate: true,
        userFirstName1: firstname,
        userSurName1: surname,
      };
    }
    if (action.user === 'user2') {
      return {
        ...state,
        isUserUpDate: true,
        userFirstName2: firstname,
        userSurName2: surname,
      };
    }
  }*/



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