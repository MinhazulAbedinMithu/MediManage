import React from "react";
import { Link } from "react-router-dom";

const StatisticsNav = () => {
  const styles = {
    NavTitle: {
      color: "#030303",
      fontSize: "24px",
      fontFamily: "Roboto Mono",
      fontWeight: 600,
      lineHeight: "30px",
    },
    Button: {
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: "22px",
      left: "315px",
      width: "36px",
      height: "36px",
      border: "1px solid #030303",
      boxSizing: "border-box",
      boxShadow: "2px 2px 0px rgba(0,0,0,0.8)",
      color: "#030303",
      backgroundColor: "#ffffff",
      outline: "none",
    },
    Icon: {
      color: "#030303",
      fill: "#030303",
      width: "14px",
      height: "14px",
      fontSize: "14px",
    },
  };
  return (
    <div className="flex items-center justify-between p-4">
      <p style={styles.NavTitle}>Statistics</p>
      <Link to='/profile' style={styles.Button}>
        <svg style={styles.Icon} viewBox="0 0 512 512">
          <path d="M256 288c79.53 0 144-64.47 144-144s-64.47-144-144-144c-79.52 0-144 64.47-144 144S176.5 288 256 288zM351.1 320H160c-88.36 0-160 71.63-160 160c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32C512 391.6 440.4 320 351.1 320z"></path>
        </svg>
      </Link>
    </div>
  );
};

export default StatisticsNav;
