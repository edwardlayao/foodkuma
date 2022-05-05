import React, { useContext } from "react";
import Header from "./components/Layout/Header/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import ShowModal from "./stores/ShowModal";
import Cart from "./components/Cart/Cart";

function App() {
  let overlayRender = "";
  const ctx_modal = useContext(ShowModal);
  if (ctx_modal.visibility) {
    console.log("showing modal");
    overlayRender = <Cart></Cart>;
  } else {
    overlayRender = "";
  }

  return (
    <React.Fragment>
      {overlayRender}
      <div className="App">
        <Header></Header>
        <main>
          <Meals></Meals>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
