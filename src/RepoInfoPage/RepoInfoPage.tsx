import React, { useState } from "react";

import RepoBranchesDrawer from "@components/RepoBranchesDrawer";
import { Button, Divider } from "antd";
import "./RepoInfoPage.css";
import { useHistory, useParams } from "react-router-dom";

import { useReposContext } from "../App";

const RepoInfoPage = () => {
  const reposContext = useReposContext();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const selectedRepo = reposContext.list.filter(
    (repo) => repo.id === Number(id)
  );
  // eslint-disable-next-line no-console
  console.log(selectedRepo);
  const [isDrawerVisible, setDrawerVisible] = useState<boolean>(false);

  return selectedRepo.length > 0 ? (
    <div className="repo-info-page">
      <div className="repo-info-page__container">
        <Divider plain>{selectedRepo[0].name}</Divider>
        <Divider orientation="left">Владелец репозитория:</Divider>
        <a className="flex-align-left" href={selectedRepo[0].owner.url}>
          {selectedRepo[0].owner.login}
        </a>
        <Divider orientation="left">Описание проекта:</Divider>
        <p className="flex-align-left">
          {selectedRepo[0].description !== null
            ? selectedRepo[0].description
            : "Описание отсутствует"}
        </p>
        <Divider orientation="left">Последнее обновление:</Divider>
        <p className="flex-align-left">{selectedRepo[0].updated_at}</p>
        <Divider></Divider>
        <>
          <Button
            className="full-width"
            onClick={() => setDrawerVisible((isVisible) => !isVisible)}
          >
            ПОСМОТРЕТЬ ВЕТКИ
          </Button>
          <Button
            className="full-width"
            onClick={() => {
              history.push(`/repos`);
            }}
          >
            Вернуться к поиску
          </Button>
        </>
      </div>

      <RepoBranchesDrawer
        selectedRepo={selectedRepo[0]}
        onClose={() => setDrawerVisible(false)}
        isDrawerVisible={isDrawerVisible}
      />
    </div>
  ) : (
    <></>
  );
};

export default RepoInfoPage;
