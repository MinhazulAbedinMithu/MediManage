import React, { useState } from "react";

const ProfileContainer = (props) => {
  const styles = {
    ImageContainer: {
      width: "110px",
      height: "108px",
      borderRadius: "100000px",
      backgroundImage: "url(./image.png)",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    Name: {
    color: '#030303',
    fontSize: '36px',
    fontFamily: 'Roboto Mono',
    fontWeight: 700,
    lineHeight: '42px',
    textAlign: 'center',
  },
  Email: {
    color: '#030303',
    fontSize: '12px',
    fontFamily: 'Roboto Mono',
    lineHeight: '14px',
    textAlign: 'center',
    textDecoration: 'underline',
  },
  PinkButton: {
    cursor: 'pointer',
    padding: '0px 8px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    boxShadow: '2px 2px 0px rgba(0,0,0,0.8)',
    backgroundColor: '#f82c7f',
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    fontWeight: 700,
    lineHeight: '16px',
    textTransform: 'uppercase',
    outline: 'none',
  },
  SmallText: {
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    fontWeight: 700,
    lineHeight: '18px',
  },
  Card: {
    height: '58px',
    backgroundColor: '#d3d3d3',
  },
  WhiteButton: {
    cursor: 'pointer',
    top: '519px',
    left: '27px',
    width: '320px',
    height: '42px',
    padding: '0px 8px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    boxShadow: '2px 2px 0px rgba(0,0,0,0.8)',
    backgroundColor: '#ffffff',
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    fontWeight: 700,
    lineHeight: '16px',
    textTransform: 'uppercase',
    outline: 'none',
  },
  };

  const defaultProps = {
    image:
      "https://assets.api.uizard.io/api/cdn/stream/4fa4bf89-14f6-412b-a1bf-69c78c6e5f7d.png",
  };

  return <div className="mt-12 flex flex-col items-center w-full px-4">
  <div style={{
    ...styles.ImageContainer,
    backgroundImage: `url(${props.image ?? defaultProps.image})`,
  }}></div>
  <p style={styles.Name} className="mt-4">Medication</p>
  <p style={styles.Email}>medmanagement@medimanage.com</p>
  <button style={styles.PinkButton} className="mt-3 w-[150px] h-[42px]">Edit Details</button>
  <div className="w-full my-4">
  <p style={styles.SmallText}>Reminder Settings</p>
  <div style={styles.Card} className="flex justify-between items-center p-4">
  <p>Set Reminder</p>
  <Switch />
  </div>
  </div>
  <div className="w-full mb-4">
  <p style={styles.SmallText}>Share App Link</p>
  <div style={styles.Card} className="flex justify-between items-center p-4">
  <p>Share with</p>
  <button style={styles.PinkButton} className="w-[103px] h-[32px]">Share</button>
  </div>
  </div>
  <button style={styles.WhiteButton} className="mt-4">Sign out</button>
  </div>;
};

const Switch = () => {
    const styles = {
  Container: {
    cursor: 'pointer',
    display: 'block',
    position: 'relative',
    width: '40px',
    height: '20px',
    pointerEvents: 'auto',
    borderRadius: '40px',
    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.08)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    border: 0,
  },
  Toggle: {
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '3px',
    width: 'calc(50% - 6px)',
    height: 'calc(100% - 6px)',
    transform: 'translate(0%, -50%)',
    fontSize: '14px',
    transition: 'left 0.3s ease',
    borderRadius: '40px',
    backgroundColor: 'rgba(248, 44, 127, 1)',
  },
  Input: {
    position: 'absolute',
    opacity: 0,
    visibility: 'hidden',
    width: '1px',
    height: '1px',
    pointerEvents: 'none',
  },
};
  const [isToggled, setIsToggled] = useState(false);

  const onClick = () => {
    setIsToggled(!isToggled);
  }

  return (
    <div style={styles.Container} onClick={onClick}>
      <div style={{ 
        ...styles.Toggle,
        left: isToggled ? 'calc(50% + 3px)' : '3px',
      }} />
      <input type="checkbox" style={styles.Input} />
    </div>
  );
};

export default ProfileContainer;
