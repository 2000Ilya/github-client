import React, { useEffect, useState } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import RepoBranchesDrawer from "@components/RepoBranchesDrawer";
import RepoTile from "@components/RepoTile";
import SearchIcon from "@components/SearchIcon";
import "./ReposSearchPage.css";
import { RepoItem } from "@store/GitHubStore/types";
import gitHubStore from "@store/gitHubStoreInstance";
import { Redirect, useHistory } from "react-router-dom";

type ReposSearchPageProps = {
  setDrawersVisible: (isDrawerVisible: boolean) => void;
  setSelectedRepo: (selectedRepo: RepoItem | null) => void;
};

const ReposSearchPage: React.FC<ReposSearchPageProps> = ({
  setDrawersVisible,
  setSelectedRepo,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [repos, setRepos] = useState<RepoItem[]>([]);
  const history = useHistory();

  const showDrawer = () => {
    setDrawersVisible(true);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const fetchReposData = async () => {
    const result = await gitHubStore.getOrganizationReposList({
      organizationName: inputValue,
      queryParameters: {},
    });
    setRepos(result.success ? result.data : []);
  };

  const loadRepos = async (e: React.MouseEvent) => {
    setLoading(true);
    await fetchReposData();
    setLoading(false);
  };

  return (
    <>
      <div className="repo-search-page">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder={"Введите название организации"}
        />
        <Button onClick={loadRepos} disabled={isLoading}>
          <SearchIcon currentColor={"#FFFFFF"} />
        </Button>
        {!!repos.length && (
          <div className="repo-search-page__container">
            {repos.map((repoItem) => (
              <RepoTile
                item={repoItem}
                key={repoItem.id}
                onClick={() => {
                  setSelectedRepo(repoItem);
                  history.push(`/repos/${repoItem.id}`);
                  showDrawer();
                }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ReposSearchPage;
