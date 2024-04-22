import { useState } from "react";

const useUpdatePreviewState = (initialState: InputStates) => {
  const [state, setState] = useState(initialState);

  const updateState = (updater: (prevState: InputStates) => InputStates, callback?: (newState: InputStates) => void) => {
    setState(prevState => {
      const newState = updater(prevState);
      if (callback) {
        callback(newState);
      }
      return newState;
    });
  };

  return [state, updateState] as const;
};

export default useUpdatePreviewState