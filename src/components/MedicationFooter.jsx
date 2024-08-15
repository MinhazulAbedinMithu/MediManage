import React from "react";
import { Link } from "react-router-dom";

const MedicationFooter = () => {
  const styles = {
    Footer: {
        width: '100%',
      height: "70px",
      backgroundColor: "#f82c7f",
    },
    Button: {
      cursor: "pointer",
      width: "100%",
      height: "38px",
      padding: "0px 8px",
      border: "1px solid #030303",
      boxSizing: "border-box",
      boxShadow: "2px 2px 0px rgba(0,0,0,0.8)",
      backgroundColor: "#ffffff",
      color: "#030303",
      fontSize: "14px",
      fontFamily: "Roboto Mono",
      lineHeight: "20px",
      textTransform: "uppercase",
      outline: "none",
    },
  };
  return <div style={styles.Footer} className='flex fixed bottom-0 items-center justify-around p-4'>
  <Link to='/add-medication' style={styles.Button} className="flex items-center justify-center">Add Medication</Link>
  </div>;
};

export default MedicationFooter;
