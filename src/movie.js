import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";
import Moviecp from "./components/Moviecp";
import Detail from "./routes/Detail";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link //리로드 없이 
} from "react-router-dom";
import Home from "./routes/Home"

//url을 보고 있음
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
        <Route path="/"  > {/* Home화면 */}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
