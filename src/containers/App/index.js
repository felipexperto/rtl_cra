import React, { Fragment } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Summary from "components/Summary";
import Home from "containers/Home";

function App() {

  return (
    <Fragment>
      <div>
        <Summary />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;