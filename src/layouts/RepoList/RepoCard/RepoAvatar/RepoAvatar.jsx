import React from "react";
import { getFirstLetter } from "../../../helpers/parseFunctions";
import "./RepoAvatar.css";

function RepoAvatar({ avatarLink, repoName }) {
  return (
    <div className={"repo-avatar flex-align-center image-container"}>
      {avatarLink ? (
        <img
          src={avatarLink}
          className={"repo-avatar__icon"}
          alt={"avatar"}
          crossOrigin="anonymous"
        />
      ) : (
        <span className={"repo-avatar__first-letter"}>
          {getFirstLetter(repoName)}
        </span>
      )}
    </div>
  );
}

export default RepoAvatar;