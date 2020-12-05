import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import GlobalStyle from "./styles/global";

import AppProvider from "./hooks";
import Home from "./pages/Home";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyle />

      <AppProvider>
        <Home />
      </AppProvider>
    </DndProvider>
  );
}

export default App;
