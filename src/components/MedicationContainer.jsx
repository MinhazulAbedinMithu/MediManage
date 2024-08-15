import React from "react";
import { medications } from "./data";


const MedicationContainer = () => {
  const styles = {
    Title: {
      color: "#030303",
      fontSize: "24px",
      fontFamily: "Roboto Mono",
      fontWeight: 700,
      lineHeight: "32px",//sdfds
    },

    Card: {
      height: "102px",
      backgroundColor: "#e6e6e6",
      borderRadius: "2px",
      border: "1px solid #030303",
      boxSizing: "border-box",
    },
    Icon: {
      color: "#030303",
      fill: "#030303",
      fontSize: "24px",
      top: "159px",
      left: "318px",
      width: "24px",
      height: "32px",
    },
    MediTitle: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Roboto Mono',
    fontWeight: 700,
    lineHeight: '28px',
  },
  MediText: {
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    lineHeight: '20px',
  },
  };

 

 

  return (
    <div className="p-4 pb-[80px]">
      <p style={styles.Title}>Medication Schedule</p>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {medications.map((card) => (
          <div
            key={card.id}
            style={styles.Card}
            className="p-3 flex justify-between items-center"
          >
            <div>
              <p style={styles.MediTitle}>{card.title}</p>
              <p style={styles.MediText}>Dosage: {card.dose}</p>
              <p style={styles.MediText}>{card.time}</p>
            </div>
            {card.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicationContainer;
