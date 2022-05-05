import React, { useState } from "react";

// we create the context and export default values
// we instantiate the functions with dummy functions for better name completion
const ShowModal = React.createContext({
  visibility: false,
  show: () => {},
  hide: () => {},
});

export default ShowModal;

// we export this and use it like this <ShowModalProvider>, this will create the provider and the values
export function ShowModalProvider(props) {
  // the modal state
  const [isVisible, setIsVisible] = useState(false);

  // we export this to show()
  function showModal() {
    setIsVisible(true);
  }

  // we export this to hide()
  function showHide() {
    setIsVisible(false);
  }

  // we return the component provider and wrap <app> inside it
  return (
    <ShowModal.Provider
      value={{
        visibility: isVisible,
        show: showModal,
        hide: showHide,
      }}
    >
      {props.children}
    </ShowModal.Provider>
  );
}
