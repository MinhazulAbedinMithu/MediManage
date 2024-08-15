import React from "react";
import DosesChart from "./DosesChart";

const StatisticsContainer = () => {
  const styles = {
    Card: {
      backgroundColor: "#ffffff",
      boxShadow: "2px 0px 10px rgba(3,3,3,0.1)",
    },
    Title: {
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    fontWeight: 600,
    lineHeight: '20px',
  },
  ProgressText: {
    color: '#030303',
    fontSize: '32px',
    fontFamily: 'Roboto Mono',
    fontWeight: 600,
    lineHeight: '40px',
  },
  Icon: {
    color: '#030303',
    fill: '#030303',
    fontSize: '48px',
    top: '681px',
    left: '65px',
    width: '48px',
    height: '48px',
  },
  };

  const Icon1 = () => (
    <svg style={styles.Icon}  viewBox="0 0 448 512">
      <path d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM128 166c0-8.838 7.164-16 16-16h53.1V96c0-8.838 7.164-16 16-16h52c8.836 0 16 7.162 16 16v54H336c8.836 0 16 7.162 16 16v52c0 8.836-7.164 16-16 16h-54V288c0 8.836-7.164 16-16 16h-52c-8.836 0-16-7.164-16-16V234H144c-8.836 0-16-7.164-16-16V166zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z">
      </path>
    </svg>
  );

  const Icon2 = () => (
    <svg style={styles.Icon}  viewBox="0 0 576 512">
      <path d="M568.3 192c-29 .125-135 6.124-213.9 82.1C321.2 304.7 301 338.3 288 369.9c-13-31.63-33.25-65.25-66.38-94.87C142.8 198.2 36.75 192.2 7.75 192C3.375 192 0 195.4 0 199.9c.25 27.88 7.125 126.2 88.75 199.3C172.8 481 256 479.1 288 479.1s115.2 1.025 199.3-80.85C568.9 326 575.8 227.7 576 199.9C576 195.4 572.6 192 568.3 192zM288 302.6c12.75-18.87 27.62-35.75 44.13-50.5c19-18.62 39.5-33.37 60.25-45.25c-16.5-70.5-51.75-133-96.75-172.3c-4.125-3.5-11-3.5-15.12 0c-45 39.25-80.25 101.6-96.75 172.1c20.37 11.75 40.5 26.12 59.25 44.37C260 266.4 275.1 283.7 288 302.6z">
      </path>
    </svg>
  );

const Icon3 = () => (
    <svg style={styles.Icon}  viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z">
      </path>
      <path d="m18.85 10.39 1.06-1.06c.78-.78.78-2.05 0-2.83L18.5 5.09c-.78-.78-2.05-.78-2.83 0l-1.06 1.06 4.24 4.24zm-5.66-2.83L4 16.76V21h4.24l9.19-9.19-4.24-4.25zM19 17.5c0 2.19-2.54 3.5-5 3.5-.55 0-1-.45-1-1s.45-1 1-1c1.54 0 3-.73 3-1.5 0-.47-.48-.87-1.23-1.2l1.48-1.48c1.07.63 1.75 1.47 1.75 2.68zM4.58 13.35C3.61 12.79 3 12.06 3 11c0-1.8 1.89-2.63 3.56-3.36C7.59 7.18 9 6.56 9 6c0-.41-.78-1-2-1-1.26 0-1.8.61-1.83.64-.35.41-.98.46-1.4.12a.992.992 0 0 1-.15-1.38C3.73 4.24 4.76 3 7 3s4 1.32 4 3c0 1.87-1.93 2.72-3.64 3.47C6.42 9.88 5 10.5 5 11c0 .31.43.6 1.07.86l-1.49 1.49z">
      </path>
    </svg>
  );
  
  const habits=[
    {
        id:1,
        title:'Reading',
        icon: <Icon1 />,
    },
    {
        id:2,
        title:'Reading',
        icon: <Icon2 />,
    },
    {
        id:3,
        title:'Reading',
        icon: <Icon3 />,
    },
  ]

  return (
    <div className="px-4">
      <Dropdown />
      <div style={styles.Card} className="mt-8 p-4">
      <p style={styles.Title}>Weekly medication progress</p>
      <p style={styles.ProgressText} className="mt-2 mb-4">67%</p>
      <div className="w-full bg-[#d3d3d3] h-2 mb-4">
          <div
            className="bg-[#c1c1c1] h-2"
            style={{ width: "67%" }}
          >
            <span className="text-[#030303] text-sm font-medium flex justify-end py-2">67%</span>
          </div>
        </div>
      </div>
      <div style={styles.Card} className="p-4 mt-4">
      <p style={styles.Title}>Completed doses in the last week</p>
      <DosesChart />
      </div>
      <div style={styles.Card} className="p-4 mt-4">
      <p style={styles.Title}>Top 3 adherence habits</p>
      <div className="grid grid-cols-3 pt-8 pb-5">
      {
        habits.map(habit => <div className="flex flex-col items-center">
            {habit.icon}
            <p style={styles.Title}>{habit.title}</p>
            </div>)
      }
      </div>
      </div>
    </div>
  );
};

const Dropdown = (props) => {
  const styles = {
    Dropdown: {
      cursor: "pointer",
      top: "91px",
      left: "24px",
      width: "100%",
      height: "48px",
      padding: "0px 8px",
      border: "1px solid #030303",
      boxSizing: "border-box",
      borderRadius: "2px",
      backgroundColor: "rgba(230,230,230,0.6)",
      color: "#484848",
      fontSize: "16px",
      fontFamily: "Roboto Mono",
      lineHeight: "22px",
      outline: "none",
    },
  };

  const defaultProps = {
    label: "Last 7 days",
    values: ["Option 1", "Option 2", "Option 3"],
  };
  return (
    <select style={styles.Dropdown} defaultValue="">
      <option value="" disabled hidden>
        {props.label ?? defaultProps.label}
      </option>
      {(props.values ?? defaultProps.values).map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default StatisticsContainer;
