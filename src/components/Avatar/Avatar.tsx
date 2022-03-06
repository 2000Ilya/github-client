import React from "react";
import "./Avatar.css";

type AvatarProps = {
  src?: string;
  letter: string;
  alt: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, letter }) => {
  return (
    <div className="avatar flex-align-center image-container">
      {src ? (
        <img
          src={src}
          className="avatar__icon image-container__icon"
          alt={alt}
          crossOrigin="anonymous"
        />
      ) : (
        <span className="avatar__first-letter">{letter}</span>
      )}
    </div>
  );
};

export default React.memo(Avatar);
