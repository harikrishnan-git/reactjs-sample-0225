import { useState, createContext, useContext } from "react";

const PopupContext = createContext();

export const usePopupContext = () => {
  return useContext(PopupContext);
};

export const PopupProvider = ({ children }) => {
  const [listId, setListId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const open = (listId) => {
    setShowPopup(true);
    setListId(listId);
  };
  const close = () => setShowPopup(false);

  return (
    <PopupContext.Provider value={{ showPopup, open, close, listId }}>
      {children}
    </PopupContext.Provider>
  );
};
