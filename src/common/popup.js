import React, { useContext } from "react";
import PropTypes from "prop-types";
import Notification from "context-reducers/context";

/**
 * Component for getting svg based on prop.
 *
 * @function Icon
 * @param {boolean} success  Notification status.
 * @return {SVGElement} Svg based on notification status.
 */
function Icon({ success }) {
  return success ? (
    <svg
      className="h-6 w-6 text-green-700 fill-current mr-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M468.907 214.604c-11.423 0-20.682 9.26-20.682 20.682v20.831c-.031 54.338-21.221 105.412-59.666 143.812-38.417 38.372-89.467 59.5-143.761 59.5h-.12C132.506 459.365 41.3 368.056 41.364 255.883c.031-54.337 21.221-105.411 59.667-143.813 38.417-38.372 89.468-59.5 143.761-59.5h.12c28.672.016 56.49 5.942 82.68 17.611 10.436 4.65 22.659-.041 27.309-10.474 4.648-10.433-.04-22.659-10.474-27.309-31.516-14.043-64.989-21.173-99.492-21.192h-.144c-65.329 0-126.767 25.428-172.993 71.6C25.536 129.014.038 190.473 0 255.861c-.037 65.386 25.389 126.874 71.599 173.136 46.21 46.262 107.668 71.76 173.055 71.798h.144c65.329 0 126.767-25.427 172.993-71.6 46.262-46.209 71.76-107.668 71.798-173.066v-20.842c0-11.423-9.259-20.683-20.682-20.683z" />
      <path d="M505.942 39.803c-8.077-8.076-21.172-8.076-29.249 0L244.794 271.701l-52.609-52.609c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.077-8.077 21.172 0 29.249l67.234 67.234a20.616 20.616 0 0 0 14.625 6.058 20.618 20.618 0 0 0 14.625-6.058L505.942 69.052c8.077-8.077 8.077-21.172 0-29.249z" />
    </svg>
  ) : (
    <svg
      className="fill-current h-6 w-6 text-teal-500 mr-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
    </svg>
  );
}

Icon.propTypes = {
  success: PropTypes.bool.isRequired,
};

/**
 * Popup Component for showing notifications.
 *
 * @function Popup
 * @return {ReactElement} notificaiton bar component.
 */

function Popup() {
  const { state } = useContext(Notification);
  return state.popup ? (
    <div className="w-screen in-animation fixed inset-x-0 top-0 mx-auto container flex justify-center">
      <div
        className={`${
          state.success ? "border-green-600" : "border-teal-500"
        } bg-teal-100 border-t-4 mt-6 h-full ml-6  rounded-b text-teal-900 px-4 py-3 shadow-md`}
        role="alert"
      >
        <div className="flex">
          <div className="py-1">
            <Icon success={state.success} />
          </div>
          <div>
            <p className="font-bold">{state.primary}</p>
            <p className="text-sm">{state.secondary}</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup;
