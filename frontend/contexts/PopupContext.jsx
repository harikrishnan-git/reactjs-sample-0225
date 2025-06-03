import { useState, createContext, useContext } from "react";

const PopupContext = createContext();

export const usePopupContext = () => {
  return useContext(PopupContext);
};

export const PopupProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const open = setShowPopup(true);
  const close = setShowPopup(false);

  return (
    <PopupContext.Provider
      value={{ showPopup, open, close }}
    ></PopupContext.Provider>
  );
};
