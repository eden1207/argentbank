import { createStore } from "redux";

//state

const initialState = {
  isLogged: false,
  isEditName: false,

  username: '',
  password: '',

  userFirstName: '',
  userSurName: '',

  upDate: false,
};

// actions creators

export const userLogIn = () => ({ type: "userLogIn" });

export const userLogOut = () => ({ type: "userLogOut" });


export const switchUpDate = (upDate) => ({ 
  type: "switchUpDate",
  upDate: upDate, 
});


export const displayUsername = (username, password) => ({ 
  type: "displayUsername",
  username: username, 
  password: password,
});

export const changeUserNames = (userFirstName, userSurName) => ({ 
  type: "changeUserNames",
  userFirstName: userFirstName, 
  userSurName: userSurName,
});


export const userEditMode = () => ({ type: "userEditMode" });

export const userNoEditMode = () => ({ type: "userNoEditMode" });



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



  if (action.type === "displayUsername") {
    const username = action.username;
    const password = action.password;

    return {
      ...state,
      username: username,
      password: password,
    };
  }

  if (action.type === "changeUserNames") {
    const userFirstName = action.userFirstName;
    const userSurName = action.userSurName;

    return {
      ...state,
      userFirstName: userFirstName,
      userSurName: userSurName,
    };
  }





  if (action.type === "switchUpDate") {
    const upDate = action.upDate;
    return {
      ...state,
      upDate: upDate,
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

  return state;
}

export const store = createStore(reducer);