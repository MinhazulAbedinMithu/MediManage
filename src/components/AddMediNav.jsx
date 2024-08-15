import React from "react";
import { Link } from "react-router-dom";

const AddMediNav = () => {
  const styles = {
    Header: {
      height: "60px",
      backgroundColor: "#f82c7f",
    },
    Title: {
      color: "#ffffff",
      fontSize: "20px",
      fontFamily: "Roboto Mono",
      lineHeight: "28px",
    },
    Icon: {
      color: "#ffffff",
      fill: "#ffffff",
      fontSize: "14px",
      top: "22px",
      left: "16px",
      width: "14px",
      height: "16px",
    },
  };
  return (
    <Link to="/medication">
    <div
      style={styles.Header}
      className="p-4 flex items-center"
    >
      <svg style={styles.Icon} viewBox="0 0 448 512">
        <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
      </svg>
      <div className="text-center w-full">
      <p style={styles.Title}>Add Medication</p>
      </div>
    </div>
    </Link>
  );
};

export default AddMediNav;
