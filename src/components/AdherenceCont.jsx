import React from "react";

const AdherenceCont = (props) => {
  const styles = {
    Title: {
      color: "#030303",
      fontSize: "20px",
      fontFamily: "Roboto Mono",
      lineHeight: "28px",
      marginBottom: '8px'
    },
    ImageContainer: {
      width: "100%",
      height: "200px",
      backgroundImage: "url(./image.png)",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    Card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '4px',
    boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
    padding: '16px',
  },
  Name: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Roboto Mono',
    lineHeight: '24px',
  },
  Date: {
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    lineHeight: '20px',
  },
  };

  const defaultProps = {
    image: 'https://assets.api.uizard.io/api/cdn/stream/9c265eb2-665e-4ba6-b3a1-d4384c260a08.png',
  }

  const missedDoses=[
    {
        id: 1,
        name: 'Lipitor',
        date: '2023-10-01'
    },
    {
        id: 2,
        name: 'Metformin',
        date: '2023-09-28'
    },
    {
        id: 3,
        name: 'Amlodipine',
        date: '2023-09-25'
    },
    {
        id: 4,
        name: 'Lisinopril',
        date: '2023-09-20'
    },
  ]

  return (
    <div className="p-4">
      <p style={styles.Title}>Adherence Over Time</p>
      <div style={styles.Card}>
      <div style={{
        ...styles.ImageContainer,
        backgroundImage: `url(${props.image ?? defaultProps.image})`,
      }}></div>
      </div>
      <p style={styles.Title} className='mt-6'>Missed Doses</p>
      <div style={styles.Card} className='flex flex-col gap-4'>
      {
      missedDoses.map(dose=> <div key={dose.id}>
      <p style={styles.Name}>Medication: {dose.name}</p>
      <p style={styles.Date}>Missed on: {dose.date}</p>
      </div>)
      }
      </div>
    </div>
  );
};

export default AdherenceCont;
