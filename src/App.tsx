import React, { createContext, useContext, useState } from "react";

import { RepoItem } from "@store/GitHubStore/types";
import gitHubStore from "@store/gitHubStoreInstance";
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

type ReposContextType = {
  list: RepoItem[];
  isLoading: boolean;
  load: (repoOwner: string) => void;
};

const ReposContext = createContext<ReposContextType>({
  list: [],
  isLoading: true,
  load: () => {},
});

const Provider = ReposContext.Provider;
export const Consumer = ReposContext.Consumer;

export const useReposContext = () => useContext(ReposContext);

const App = () => {
  const [list, setList] = useState<RepoItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const load = async (repoOwner: string) => {
    setIsLoading(true);
    try {
      await gitHubStore
        .getOrganizationReposList({
          organizationName: repoOwner,
          queryParameters: {},
        })
        .then((result) => {
          setList(result.success ? result.data : []);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <Provider value={{ list, isLoading, load }}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/repos">
              <ReposSearchPage />
            </Route>
            <Route path="/repos/:id">
              <RepoInfoPage />
            </Route>
            <Redirect to="/repos" />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
