import React, { useState } from "react";

import RepoBranchesDrawer from "@components/RepoBranchesDrawer";
import { RepoItem } from "@store/GitHubStore/types";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import "./App.css";

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
        <ReposSearchPage
          setDrawersVisible={setDrawerVisible}
          setSelectedRepo={setSelectedRepo}
        />
        <Switch>
          <Route path="/repos/:id">
            <RepoBranchesDrawer
              onClose={() => onClose(history)}
              isDrawerVisible={isDrawerVisible}
              selectedRepo={selectedRepo}
            />
          </Route>
          <Redirect to="/repos" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
