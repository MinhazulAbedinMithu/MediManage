import React from "react";

const MedicationNav = () => {
  const styles = {
    Header: {
      height: "60px",
      backgroundColor: "#f82c7f",
    },
    LogoIcon: {
      color: "#ffffff",
      fill: "#ffffff",
      fontSize: "18px",
      top: "14px",
      left: "16px",
      width: "18px",
      height: "32px",
    },
    LogoText: {
      color: "#ffffff",
      fontSize: "24px",
      fontFamily: "Roboto Mono",
      fontWeight: 700,
      lineHeight: "32px",
    },
    SettingsIcon: {
    color: '#ffffff',
    fill: '#ffffff',
    fontSize: '24px',
    top: '14px',
    left: '335px',
    width: '24px',
    height: '32px',
  },
  };
  return (
    <div style={styles.Header} className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <svg style={styles.LogoIcon} viewBox="0 0 384 512">
          <path d="M360 0H24C10.8 0 0 10.8 0 24v48c0 13.2 10.8 24 24 24h336c13.2 0 24-10.8 24-24V24c0-13.2-10.8-24-24-24zM32 480c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32V128H32v352zm64-184c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48z"></path>
        </svg>
        <p style={styles.LogoText}>MediManage</p>
      </div>
      <svg style={styles.SettingsIcon}  viewBox="0 0 512 512">
    <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z">
    </path>
  </svg>
    </div>
  );
};

export default MedicationNav;
