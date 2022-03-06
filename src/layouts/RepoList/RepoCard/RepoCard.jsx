import React from "react";
import RepoAvatar from "./RepoAvatar/RepoAvatar";
import "./RepoCard.css";
import { ReactComponent as StarIcon } from "../../resources/icons/star.svg";

const RepoCard = () => {
  return (
    <div className="repo-card">
      <RepoAvatar repoName={"kts-front"} />
      <div className="repo-card__text-content">
        <h1 className="repo-card__title no-margin">
          {"very-long-repository-name-and-more"}
        </h1>
        <a className="repo-card__link repo-card__default-text" href={""}>
          {"ktsstudio"}
        </a>
        <div className="repo-card__bottom-group">
          <p className="repo-card__stargazers-info repo-card__default-text no-margin">
            <span>
              <StarIcon className="repo-card__star-icon" />
            </span>
            123
          </p>
          <p className="repo-card__last-update-info repo-card__default-text no-margin">
            {"Updated 21 Jul"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
