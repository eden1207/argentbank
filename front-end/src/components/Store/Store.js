import { createStore } from "redux";

//state

const initialState = {
  userToken: '',

  userData: {},
  isChecked: false,

  isLogged: false,
  isEditName: false,

  isUpDating: false,
  userFistNameEdited: '',
  userLastNameEdited: '',
};

// actions creators

/**ok */
export const userLogIn = () => ({ type: "userLogIn" });

/**ok */
export const userLogOut = () => ({ type: "userLogOut" });


/**ok */
export const switchUpDate = (isUpDating) => ({ 
  type: "switchUpDate",
  isUpDating: isUpDating, 
});

export const checkBox = (isChecked) => ({ 
  type: "checkBox",
  isChecked: isChecked, 
});

/**ok */
export const changeUserNames = (userFirstNameEdited, userLastNameEdited) => ({ 
  type: "changeUserNames",
  userFirstNameEdited: userFirstNameEdited, 
  userLastNameEdited: userLastNameEdited,
});

/**ok */
export const userEditMode = () => ({ type: "userEditMode" });

/**ok */
export const userNoEditMode = () => ({ type: "userNoEditMode" });

/**ok */
export const setUserToken = (userToken) => ({ 
  type: "setUserToken",
  userToken: userToken, 
});

/**ok */
export const setUserData = (userData) => ({ 
  type: "setUserData",
  userData: userData, 
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

  if (action.type === "changeUserNames") {
    const userFirstNameEdited = action.userFirstNameEdited;
    const userLastNameEdited = action.userLastNameEdited;

    return {
      ...state,
      userFirstNameEdited: userFirstNameEdited,
      userLastNameEdited: userLastNameEdited,
    };
  }

  if (action.type === "setUserToken") {
    const userToken = action.userToken;
    return {
      ...state,
      userToken: userToken,
    };
  }

  if (action.type === "setUserData") {
    const userData = action.userData;
    return {
      ...state,
      userData: userData,
    };
  }

  if (action.type === "switchUpDate") {
    const isUpDating = action.isUpDating;
    return {
      ...state,
      isUpDating: isUpDating,
    };
  }

  if (action.type === "checkBox") {
    const isChecked = action.isChecked;
    return {
      ...state,
      isChecked: isChecked,
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