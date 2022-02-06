import React from "react";
import RepoAvatar from "./RepoAvatar/RepoAvatar";
import "./RepoCard.css";
import { ReactComponent as StarIcon } from "../../resources/icons/star.svg";

function RepoCard() {
  return (
    <div className={"repo-card"}>
      <RepoAvatar
        // avatarLink={
        //   "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
        // }
        repoName={"kts-front"}
      />
      <div className={"repo-card__text-content"}>
        <h1 className={"repo-card__title no-margin"}>
          {"very-long-repository-name-and-more"}
        </h1>
        <a className={"repo-card__link repo-card__default-text"} href={""}>
          {"ktsstudio"}
        </a>
        <div className={"repo-card__bottom-group"}>
          <p
            className={
              "repo-card__contributors-info repo-card__default-text no-margin"
            }
          >
            <span>
              <StarIcon />
            </span>
            {"123"}
          </p>
          <p
            className={
              "repo-card__last-update-info repo-card__default-text no-margin"
            }
          >
            {"Updated 21 Jul"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
