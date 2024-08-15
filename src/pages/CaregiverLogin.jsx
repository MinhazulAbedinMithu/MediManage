import React from "react";

const CaregiverLogin = () => {
  const styles = {
    Icon: {
      color: "#f82c7f",
      fill: "#f82c7f",
      fontSize: "30px",
      top: "172px",
      left: "96px",
      width: "30px",
      height: "36px",
    },
    LogoText: {
      color: "#030303",
      fontSize: "24px",
      fontFamily: "Roboto Mono",
      fontWeight: 700,
      lineHeight: "32px",
    },
    Title: {
    color: '#030303',
    fontSize: '20px',
    fontFamily: 'Roboto Mono',
    lineHeight: '28px',
  },
  Label: {
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    lineHeight: '20px',
  },
  Input: {
    width: '100%',
    height: '38px',
    padding: '0px 8px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    borderRadius: '2px',
    backgroundColor: '#e6e6e6',
    color: '#94a3b8',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    lineHeight: '38px',
    outline: 'none',
  },
  Button: {
    cursor: 'pointer',
    width: '100%',
    height: '46px',
    padding: '0px 8px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    boxShadow: '2px 2px 0px rgba(0,0,0,0.8)',
    backgroundColor: '#f82c7f',
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    lineHeight: '20px',
    textTransform: 'uppercase',
    outline: 'none',
  },
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen px-4">
      <div className="flex gap-2">
        <svg style={styles.Icon} viewBox="0 0 512 512">
          <path d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"></path>
        </svg>
        <p style={styles.LogoText}>MediManage</p>
      </div>
      <div className="w-full">
      <p style={styles.Title} className="mb-4">Caregiver Login</p>
      <form className="flex flex-col gap-5">
      <div>
      <p style={styles.Label} className="mb-2">Username</p>
      <input style={styles.Input} placeholder="Enter your username" />
      </div>
      <div>
      <p style={styles.Label} className="mb-2">Password</p>
      <input style={styles.Input} placeholder="Enter your password" />
      </div>
      <button style={styles.Button}>Login</button>
      </form>
      </div>
    </div>
  );
};

export default CaregiverLogin;
