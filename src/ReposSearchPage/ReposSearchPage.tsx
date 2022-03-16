import { useState } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import RepoTile from "@components/RepoTile";
import SearchIcon from "@components/SearchIcon";
import { useHistory } from "react-router-dom";

import { Consumer, useReposContext } from "../App";
import styles from "./ReposSearchPage.module.scss";

const ReposSearchPage = () => {
  const reposContext = useReposContext();
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const loadReposData = () => {
    reposContext.load(inputValue);
  };

  return (
    <Consumer>
      {(context) => (
        <>
          <div className={styles["repo-search-page"]}>
            <Input
              value={inputValue}
              onChange={handleInputChange}
              placeholder={"Введите название организации"}
            />
            <Button onClick={loadReposData} disabled={context.isLoading}>
              <SearchIcon currentColor={"#FFFFFF"} />
            </Button>
            {!!context.list.length && (
              <div className={styles["repo-search-page__container"]}>
                {context.list.map((repoItem) => (
                  <RepoTile
                    item={repoItem}
                    key={repoItem.id}
                    onClick={() => {
                      history.push(`/repos/${repoItem.id}`);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </Consumer>
  );
};

export default ReposSearchPage;
