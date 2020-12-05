import React from "react";

import GlobalStyle from "./styles/global";

import AppProvider from "./hooks";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />

      <AppProvider>
        <Home />
      </AppProvider>
    </>
  );
}

export default App;
