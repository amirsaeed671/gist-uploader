import { NOTIFY_OPEN, NOTIFY_CLOSE } from "context-reducers/actions-types";

function notify(dispatchFn, payload) {
  dispatchFn({ type: NOTIFY_OPEN, payload });
  setTimeout(() => {
    dispatchFn({
      type: NOTIFY_CLOSE,
      payload: { success: false, primary: "", secondary: "" },
    });
  }, 3000);
}

export default notify;
