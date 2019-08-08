import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { ComponentData } from "./component/ComponentData";

const App = () => {
  return (
    <Provider store={store}>
      <ComponentData />
    </Provider>
  );
};

export default App;
