import React from "react";

import styles from "./Avatar.module.scss";

type AvatarProps = {
  src?: string;
  letter: string;
  alt: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, letter }) => {
  return (
    <div className={`${styles.avatar} flex-align-center image-container`}>
      {src ? (
        <img
          src={src}
          className={`${styles.avatar__icon} image-container__icon`}
          alt={alt}
          crossOrigin="anonymous"
        />
      ) : (
        <span className={styles["avatar__first-letter"]}>{letter}</span>
      )}
    </div>
  );
};

export default React.memo(Avatar);
