import { NOTIFY_CLOSE, NOTIFY_OPEN } from "./actions-types";

function initialState(
  { popup, success, primary, secondary } = {
    popup: false,
    success: false,
    primary: "",
    secondary: "",
  }
) {
  return { popup, success, primary, secondary };
}

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case NOTIFY_OPEN:
      return {
        ...state,
        popup: true,
        success: payload.success,
        primary: payload.primary,
        secondary: payload.secondary,
      };
    case NOTIFY_CLOSE:
      return {
        ...state,
        popup: false,
        success: false,
        primary: "",
        secondary: "",
      };
    default:
      return initialState();
  }
}

export { reducer, initialState };
