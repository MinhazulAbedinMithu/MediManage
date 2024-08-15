import React from "react";

const ReminderCont = (props) => {
  const styles = {
    ImageContainer: {
      top: "281px",
      left: "112px",
      width: "150px",
      height: "150px",
      backgroundImage: "url(./image.png)",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    Button: {
      cursor: "pointer",
      top: "455px",
      left: "116px",
      width: "143px",
      height: "38px",
      padding: "0px 8px",
      border: "1px solid #030303",
      boxSizing: "border-box",
      boxShadow: "2px 2px 0px rgba(0,0,0,0.8)",
      backgroundColor: "#f82c7f",
      color: "#030303",
      fontSize: "14px",
      fontFamily: "Roboto Mono",
      lineHeight: "20px",
      textTransform: "uppercase",
      outline: "none",
    },
    Title: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Roboto Mono',
    lineHeight: '28px',
    textAlign: 'center',
  },
  Text: {
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    lineHeight: '20px',
    textAlign: 'center',
  },
  };

  const defaultProps = {
    image:
      "https://assets.api.uizard.io/api/cdn/stream/f93fb313-5882-4cec-8eda-1d66a03b0a89.png",
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center gap-4 px-4">
      <p style={styles.Title}>Time to Take Your Medication</p>
      <p style={styles.Text}>It&apos;s time to take your prescribed medication: Aspirin 100mg</p>
      <div
        style={{
          ...styles.ImageContainer,
          backgroundImage: `url(${props.image ?? defaultProps.image})`,
        }}
      ></div>
      <button style={styles.Button}>Acknowledge</button>
    </div>
  );
};

export default ReminderCont;
