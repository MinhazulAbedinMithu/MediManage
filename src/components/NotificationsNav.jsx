import React from "react";
import { Link } from "react-router-dom";

const NotificationsNav = () => {
  const styles = {
    Header: {
      height: "85px",
      backgroundColor: "#ffffff",
      boxShadow: "2px -2px 10px rgba(3,3,3,0.1)",
    },
    Text: {
      color: "#030303",
      fontSize: "18px",
      fontFamily: "Roboto Mono",
      fontWeight: 500,
      lineHeight: "23px",
      textAlign: "center",
    },
    Icon: {
      color: "#030303",
      fill: "#030303",
      fontSize: "19px",
      width: "19px",
      height: "19px",
    },
  };
  return (
    <div style={styles.Header} className="flex gap-4 items-center px-4">
    <Link to='/'>
      <svg style={styles.Icon} viewBox="0 0 256 512">
        <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"></path>
      </svg>
      </Link>
      <p style={styles.Text}>Medication reminders</p>
    </div>
  );
};

export default NotificationsNav;
