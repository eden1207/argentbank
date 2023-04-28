import { createStore } from "redux";

//state

const initialState = {
  isLogged: false,
  isEditName: false,
  isAuthorized: null,
  userEmail: '',
  userPassword: '',
  userId: '',
  userToken: '',
  userFirstName: '',
  userLastName: '',
  userFistNameEdited: '',
  userLastNameEdited: '',
  upDate: false,
};

// actions creators

/**ok */
export const userLogIn = () => ({ type: "userLogIn" });

/**ok */
export const userLogOut = () => ({ type: "userLogOut" });


/**ok */
export const switchUpDate = (upDate) => ({ 
  type: "switchUpDate",
  upDate: upDate, 
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
export const setIsAuthorized = (isAuthorized) => ({ 
  type: "setIsAuthorized",
  isAuthorized: isAuthorized, 
});

/**ok */
export const setUserData = (userEmail, userId, userFirstName, userLastName) => ({ 
  type: "setUserData",
  userEmail: userEmail, 
  userId: userId,
  userFirstName: userFirstName,
  userLastName: userLastName,
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

  if (action.type === "setIsAuthorized") {
    const isAuthorized = action.isAuthorized;
    return {
      ...state,
      isAuthorized: isAuthorized,
    };
  }

  if (action.type === "setUserData") {
    const userEmail = action.userEmail;
    const userId = action.userId;
    const userFirstName = action.userFirstName;
    const userLastName = action.userLastName;

    return {
      ...state,
      userEmail: userEmail,
      userId: userId,
      userFirstName: userFirstName,
      userLastName: userLastName,
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