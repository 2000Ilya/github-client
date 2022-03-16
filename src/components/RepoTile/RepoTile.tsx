import React from "react";

import { RepoItem } from "@store/GitHubStore/types";
import { getFirstLetter } from "@utils/parseFunctions";

import Avatar from "../Avatar";
import StarIcon from "../StarIcon";
import styles from "./RepoTile.module.scss";

type RepoTileProps = {
  item: RepoItem;
  onClick: (e: React.MouseEvent) => void;
};

const RepoTile: React.FC<RepoTileProps> = ({ item, onClick }) => {
  return (
    <div className={styles["repo-tile"]} onClick={onClick}>
      <Avatar letter={getFirstLetter(item.name)} alt={"avatar"} />
      <div className={styles["repo-tile__text-content"]}>
        <h1 className={`${styles["repo-tile__title"]} no-margin`}>
          {item.name}
        </h1>
        <a
          className={`${styles["repo-tile__link"]} ${styles["repo-tile__default-text"]}`}
          href={item.owner.url}
        >
          {item.owner.login}
        </a>
        <div className={styles["repo-tile__bottom-group"]}>
          <p
            className={`
              ${styles["repo-tile__stargazers-info"]} ${styles["repo-tile__default-text"]} no-margin
              `}
          >
            <span>
              <StarIcon currentColor={"#FF9432"} />
            </span>
            {item.stargazers_count}
          </p>
          <p
            className={`${styles["repo-tile__last-update-info"]} ${styles["repo-tile__default-text"]} no-margin`}
          >
            {`Updated ${new Date(item.updated_at).toLocaleString("en-US", {
              month: "short",
            })} ${new Date(item.updated_at).toLocaleString("en-US", {
              day: "numeric",
            })}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RepoTile;
