import React from "react";
import "./App.css";
import RepoList from "./layouts/RepoList/RepoList";

import GitHubStore from "./store/GitHubStore/GitHubStore";

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = "ktsstudio";

gitHubStore
  .getOrganizationReposList({
    organizationName: EXAMPLE_ORGANIZATION,
    queryParameters: {},
  })
  .then((result) => {
    console.log(result); // в консоли появится список репозиториев в ktsstudio
  });

gitHubStore
  .getOrganizationReposList({
    organizationName: EXAMPLE_ORGANIZATION,
    queryParameters: { sort: "created" },
  })
  .then((result) => {
    console.log(result); // в консоли появится список репозиториев в ktsstudio
  });

function App() {
  return (
    <div className="App">
      <RepoList />
    </div>
  );
}

export default App;
