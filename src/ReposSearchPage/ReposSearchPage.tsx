import React, { useEffect, useState } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import RepoBranchesDrawer from "@components/RepoBranchesDrawer";
import RepoTile from "@components/RepoTile";
import SearchIcon from "@components/SearchIcon";
import GitHubStore from "@store/GitHubStore";

import "./ReposSearchPage.css";

const gitHubStore = new GitHubStore();

const ReposSearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [repos, setRepos] = useState<any[]>([]);
  const [isDrawerVisible, setDrawersVisible] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null);

  const onClose = () => {
    setDrawersVisible(false);
  };

  const showDrawer = () => {
    setDrawersVisible(true);
  };

  const loadRepos = (e: React.MouseEvent): void => {
    setLoading(true);
    gitHubStore
      .getOrganizationReposList({
        organizationName: inputValue,
        queryParameters: {},
      })
      .then((result) => {
        if (result.success) {
          setRepos(result.data);
        } else {
          setRepos([]);
        }
        setLoading(false); // в консоли появится список репозиториев в ktsstudio
      });
  };

  return (
    <React.Fragment>
      <div className="repo-search-page">
        <Input
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
          placeholder={"Введите название организации"}
        />
        <Button
          onClick={loadRepos}
          children={<SearchIcon currentColor={"#FFFFFF"} />}
          disabled={isLoading}
        />
        {repos.length !== 0 && (
          <div className="repo-search-page__container">
            {repos.map((repoItem) => (
              <RepoTile
                item={repoItem}
                key={repoItem.id}
                onClick={() => {
                  setSelectedRepo(repoItem);
                  showDrawer();
                }}
              />
            ))}
          </div>
        )}
      </div>
      <RepoBranchesDrawer
        onClose={onClose}
        isDrawerVisible={isDrawerVisible}
        selectedRepo={selectedRepo}
      />
    </React.Fragment>
  );
};

export default ReposSearchPage;
