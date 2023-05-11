import { createStore } from "redux";

/**
 * States to manage different elements of the website
 * userToken is a state to save the user token after authentation
 * userData is a state to save the user data after authentation
 * isChecked is the state of the Remember Me button
 * isLogged is the state of the sign in button of the header
 * isEditName is the state of the profile banner for user name update
 * isUpDating is a state to save the updated names
 * The last states save the user lastname and fistname updated
 */
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

/**
 * Actions 
 */

/**
 * Action to switch sign in to sign out on the header
*/
export const userLogIn = () => ({ type: "userLogIn" });

/**
 * Action to switch sign out to sign in on the header
*/
export const userLogOut = () => ({ type: "userLogOut" });


/**
 * Action to save the updated names in the database
 */
export const switchUpDate = (isUpDating) => ({ 
  type: "switchUpDate",
  isUpDating: isUpDating, 
});

/**
 * Action to check/uncheck the Remember me box
 */
export const checkBox = (isChecked) => ({ 
  type: "checkBox",
  isChecked: isChecked, 
});

/**
 * Action to save the updated names
 */
export const changeUserNames = (userFirstNameEdited, userLastNameEdited) => ({ 
  type: "changeUserNames",
  userFirstNameEdited: userFirstNameEdited, 
  userLastNameEdited: userLastNameEdited,
});

/**
 * Action to switch the welcome message of the profile page to the edit mode
*/
export const userEditMode = () => ({ type: "userEditMode" });

/**
 * Action to switch the edit mode of the profile page to the welcome message
*/
export const userNoEditMode = () => ({ type: "userNoEditMode" });

/**
 * Action to save the user token after authentation
*/
export const setUserToken = (userToken) => ({ 
  type: "setUserToken",
  userToken: userToken, 
});

/**
 * Action to save the user data after authentation
*/
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