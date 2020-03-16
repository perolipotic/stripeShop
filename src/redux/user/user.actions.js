import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
<<<<<<< HEAD

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const singOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const singOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const singOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});
export const signUpSuccess = ({ user, additinalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additinalData }
});
export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});
=======
>>>>>>> parent of 6711233... +
