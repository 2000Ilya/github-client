import React, { useState } from "react";

import { RepoItem } from "@store/GitHubStore/types";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import "./App.css";

import RepoInfoPage from "./RepoInfoPage";
import ReposSearchPage from "./ReposSearchPage";

const App = () => {
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<RepoItem | null>(null);
  const history = useHistory();

  const onClose = (history: any) => {
    setDrawerVisible(false);
    // eslint-disable-next-line no-console
    console.log(history);
    history.push("/repos");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/repos">
            <ReposSearchPage
              setDrawersVisible={setDrawerVisible}
              setSelectedRepo={setSelectedRepo}
            />
          </Route>
          <Route path="/repos/:id">
            <RepoInfoPage selectedRepo={selectedRepo} />
          </Route>
          <Redirect to="/repos" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
