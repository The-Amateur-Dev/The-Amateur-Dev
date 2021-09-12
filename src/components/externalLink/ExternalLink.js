import React from "react";
import ExternalLinkIcon from "./ExternalLinkIcon.svg";
import styles from "./ExternalLink.module.scss";
const ExternalLink = ({ href, text, children }) => {
  return (
    <span>
      <a href={href}>
        {text}
        {children}
        <ExternalLinkIcon className={styles.externalLinkIcon} />
      </a>
    </span>
  );
};

export default ExternalLink;
