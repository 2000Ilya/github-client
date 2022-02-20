import React from "react";

import { RepoItem } from "@store/GitHubStore/types";
import { getFirstLetter } from "@utils/parseFunctions";
import Avatar from "../Avatar";
import StarIcon from "../StarIcon";
import "./RepoTile.css";

type RepoTileProps = {
  item: RepoItem;
  onClick: (e: React.MouseEvent) => void;
};

const RepoTile: React.FC<RepoTileProps> = ({ item, onClick }) => {
  return (
    <div className="repo-tile" onClick={onClick}>
      <Avatar letter={getFirstLetter(item.name)} src={""} alt={"avatar"} />
      <div className="repo-tile__text-content">
        <h1 className="repo-tile__title no-margin">{item.name}</h1>
        <a
          className="repo-tile__link repo-tile__default-text"
          href={item.owner.url}
        >
          {item.owner.login}
        </a>
        <div className="repo-tile__bottom-group">
          <p className="repo-tile__stargazers-info repo-tile__default-text no-margin">
            <span>
              <StarIcon
                currentColor={"#FF9432"}
                className={"repo-tile__star-icon"}
              />
            </span>
            {item.stargazers_count}
          </p>
          <p className="repo-tile__last-update-info repo-tile__default-text no-margin">
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
