import React from "react";

const CaregiverCont = () => {
  const styles = {
    Title: {
      color: "#030303",
      fontSize: "20px",
      fontFamily: "Roboto Mono",
      fontWeight: 700,
      lineHeight: "28px",
    },
    Name: {
      color: "#030303",
      fontSize: "18px",
      fontFamily: "Roboto Mono",
      fontWeight: 700,
      lineHeight: "28px",
    },
    CaregiverCard: {
        width: '326px',
        height: '116px',
        backgroundColor: '#e6e6e6',
        borderRadius: '6px',
        border: '1px solid #030303',
        boxSizing: 'border-box',
      },
      Adherence: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Roboto Mono',
    lineHeight: '24px',
  },
  Button: {
    cursor: 'pointer',
    height: '22px',
    padding: '0px 8px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    boxShadow: '2px 2px 0px rgba(0,0,0,0.8)',
    backgroundColor: '#ffffff',
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    lineHeight: '20px',
    textTransform: 'uppercase',
    outline: 'none',
  },
  DoseCard: {
    top: '572px',
    left: '16px',
    width: '326px',
    height: '82px',
    backgroundColor: '#e6e6e6',
    borderRadius: '6px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
  },
  };

  const caregiverCards = [
    {
      id: 1,
      name: "John Smith",
      adherence: '95%',
    },
    {
      id: 2,
      name: "Emily Johnson",
      adherence: '87%',
    },
    {
      id: 3,
      name: "Michael Brown",
      adherence: '92%',
    },
  ];
  const doseCards = [
    {
      id: 1,
      text: 'John Smith missed a dose at 8:00 AM'
    },
    {
      id: 2,
      text: 'Emily Johnson missed a dose at 9:00 AM'
    },
  ];
  return (
    <div className="p-4">
      <p style={styles.Title}>Caregiver Dashboard</p>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {caregiverCards.map((card) => (
          <div key={card.id} style={styles.CaregiverCard} className="p-4">
          <p style={styles.Name}>{card.name}</p>
          <p style={styles.Adherence}>Adherence: {card.adherence}</p>
          <button style={styles.Button} className="mt-2">View details</button>
          </div>
        ))}
      </div>
      <p style={styles.Title} className="my-4">Missed Dose Notifications</p>
      <div className="grid grid-cols-1 gap-4">
      {
        doseCards.map(card=><div key={card.id} style={styles.DoseCard} className="p-4">
            <p>{card.text}</p>
            </div>)
      }
      </div>
    </div>
  );
};

export default CaregiverCont;
