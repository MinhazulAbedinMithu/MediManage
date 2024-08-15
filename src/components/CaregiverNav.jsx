import React from "react";

const CaregiverNav = () => {
  const styles = {
    Header: {
      height: "60px",
      backgroundColor: "#f82c7f",
    },
    LogoText: {
      color: "#ffffff",
      fontSize: "24px",
      fontFamily: "Roboto Mono",
      fontWeight: 700,
      lineHeight: "32px",
    },
    Icon1: {
      color: "#ffffff",
      fill: "#ffffff",
      fontSize: "27px",
      width: "27px",
      height: "24px",
    },
    Icon2: {
      color: "#ffffff",
      fill: "#ffffff",
      fontSize: "24px",
      width: "24px",
      height: "24px",
    },
    Icon3: {
      color: "#ffffff",
      fill: "#ffffff",
      fontSize: "21px",
      width: "21px",
      height: "24px",
    },
  };
  return (
    <div
      style={styles.Header}
      className="p-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <p style={styles.LogoText}>MediManage</p>
      </div>
      <div className="flex gap-3">
        <svg style={styles.Icon1} viewBox="0 0 576 512">
          <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
        </svg>
        <svg style={styles.Icon2} viewBox="0 0 512 512">
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
        </svg>
        <svg style={styles.Icon3} viewBox="0 0 448 512">
          <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
        </svg>
      </div>
    </div>
  );
};

export default CaregiverNav;
