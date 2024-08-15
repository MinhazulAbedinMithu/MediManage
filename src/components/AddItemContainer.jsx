import React, { useRef, useState } from "react";
import {cards} from "./data";

const styles = {
  Title: {
    color: "#030303",
    fontSize: "20px",
    fontFamily: "Roboto Mono",
    fontWeight: 600,
    lineHeight: "24px",
    marginTop: "14px",
  },
  Input: {
    top: "148px",
    left: "36px",
    width: "303px",
    height: "40px",
    padding: "0px 8px",
    border: "1px solid #030303",
    boxSizing: "border-box",
    borderRadius: "2px",
    backgroundColor: "rgba(230,230,230,0.6)",
    color: "#484848",
    fontSize: "16px",
    fontFamily: "Roboto Mono",
    lineHeight: "21px",
    outline: "none",
  },
  Card: {
    backgroundColor: "#ffffff",
    boxShadow: "2px 0px 10px rgba(3,3,3,0.1)",
  },
  SmallTitle: {
    color: "#000000",
    fontSize: "16px",
    fontFamily: "Roboto Mono",
    fontWeight: 700,
    lineHeight: "21px",
  },
  Text: {
    color: "#000000",
    fontSize: "14px",
    fontFamily: "Roboto Mono",
    lineHeight: "24px",
  },
  DoseBtn: {
    backgroundColor: "#f82c7f",
    borderRadius: "2px",
    color: "#030303",
    fontSize: "12px",
    fontFamily: "Roboto Mono",
    fontWeight: 500,
    lineHeight: "16px",
    textAlign: "center",
    padding: "4px",
  },
  DoseBtn2: {
    // backgroundColor: "#ffffff",
    boxShadow: "2px 0px 10px rgba(3,3,3,0.1)",
    color: "#000000",
    fontSize: "12px",
    fontFamily: "Roboto Mono",
    fontWeight: 500,
    lineHeight: "16px",
    textAlign: "center",
    // padding: "4px",
    // width: "89px"
  },
  ReminderText: {
    color: "#000000",
    fontSize: "14px",
    fontFamily: "Roboto Mono",
    lineHeight: "20px",
  },
  NotesInput: {
    width: '100%',
    height: "142px",
    padding: "0px 8px",
    border: "1px solid #030303",
    boxSizing: "border-box",
    borderRadius: "2px",
    backgroundColor: "rgba(230,230,230,0.6)",
    color: "#484848",
    fontSize: "16px",
    fontFamily: "Roboto Mono",
    lineHeight: "21px",
    outline: "none",
  },
  SaveBtn: {
  cursor: 'pointer',
  height: '56px',
  padding: '0px 8px',
  border: '1px solid #030303',
  boxSizing: 'border-box',
  boxShadow: '2px 2px 0px rgba(0,0,0,0.8)',
  backgroundColor: '#f82c7f',
  color: '#030303',
  fontSize: '16px',
  fontFamily: 'Roboto Mono',
  fontWeight: 700,
  lineHeight: '21px',
  textTransform: 'uppercase',
  outline: 'none',
  marginTop: '10px',
},
dateDisplay: {
    padding: '5px',
    cursor: 'pointer',
    position: 'relative', 
    zIndex: 1, 
  },
  hiddenInput: {
    position: 'absolute',
    right: '20px',
    opacity: 0,
    pointerEvents: 'none', 
  },
};

const tags = [
  { id: 1, name: "Blood" },
  { id: 2, name: "Diabete" },
  { id: 3, name: "Heart" },
  { id: 4, name: "Nutrition" },
  { id: 5, name: "Cholesterol" },
  { id: 6, name: "Pain" },
  { id: 7, name: "Mental" },
  { id: 8, name: "Sleep" },
];

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const AddItemContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    frequency: "",
    time: "",
    startDate: "Mar 24",
    endDate: "Nov 24",
    isDailyReminder: false,
    isWeeklyReminder: false,
    tags: [],
    notes: ""
  });

  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  
  const onChangeData = (e) => {
    const { name, value, type } = e.target;
    if(type === "month"){
      const [year, month] = value.split('-');
    const shortYear = year.slice(2); // Get last two digits of the year
    const shortMonth = monthNames[parseInt(month, 10) - 1]; // Get month short form

    setFormData({
      ...formData,
      [name]: `${shortMonth} ${shortYear}`,
    });
    }else{
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFocus = (ref) => {
    if (ref.current) {
      ref.current.showPicker(); // Open the date picker
    }
  };
  

  const onSubmitForm = (e) => {
    e.preventDefault()
    cards.push(formData)
    console.log({formData});
    
  }

  const handleTagClick = (e,tag) => {
    e.preventDefault()
    const tagExists = formData.tags.includes(tag.name);
    const newTags = tagExists
        ? formData.tags.filter(t => t !== tag.name)
        : [...formData.tags, tag.name];
    setFormData( { ...formData, tags: newTags});
  };
  
  

  return (
    <form className="flex flex-col gap-5 px-4 min-h-screen h-full" onSubmit={onSubmitForm}>
      <p style={styles.Title}>Medication Details</p>
      <div className="flex flex-col gap-6 p-4" style={styles.Card}>
        <input style={styles.Input} placeholder="Medication Name" name="name" value={formData?.name} onChange={onChangeData} />
        <input style={styles.Input} placeholder="Frequency" name="frequency" value={formData?.frequency} onChange={onChangeData} />
      </div>
      <div className="flex flex-col gap-6 p-4" style={styles.Card}>
        <div className="flex justify-between items-center">
          <p style={styles.SmallTitle}>Daily dose reminder</p>
          <Switch isToggled={formData.isDailyReminder} handleChange={() => setFormData({...formData, isDailyReminder: !formData.isDailyReminder})} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p style={styles.Text}>Time</p>
            <div className="flex gap-4">
              <button style={styles.DoseBtn}>{Number(formData.time?.split(":")[0]) > 11 ? "Evening" : "Morning"}</button>
              {/* <button style={styles.DoseBtn2}>8:00 AM</button> */}
              <input type="time" name="time" id="time" style={styles.DoseBtn2} onChange={onChangeData} />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p style={styles.Text}>Duration</p>
            <div className="flex gap-4">
              {/* <button style={styles.DoseBtn}>Dec 20</button> */}
              {/* <button style={styles.DoseBtn2}>Dec 27</button> */}
              <div style={{ position: 'relative' }}>
            <input
              type="month"
              name="startDate"
              ref={startDateRef}
              onChange={onChangeData}
              style={styles.hiddenInput}
            />
            <div
              style={styles.dateDisplay}
              onClick={() => handleFocus(startDateRef)}
            >
              {formData.startDate || 'Select Start Date'}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <input
              type="month"
              name="endDate"
              ref={endDateRef}
              onChange={onChangeData}
              style={styles.hiddenInput}
            />
            <div
              style={styles.dateDisplay}
              onClick={() => handleFocus(endDateRef)}
            >
              {formData.endDate || 'Select End Date'}
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4" style={styles.Card}>
        <div className="flex justify-between items-center">
          <p style={styles.ReminderText}>Weekly refill reminder</p>
          <Switch isToggled={formData.isWeeklyReminder} handleChange={() => setFormData({...formData, isWeeklyReminder: !formData.isWeeklyReminder})} />
        </div>
        <p className="mt-3 mb-5" style={styles.SmallTitle}>
          Prescription Tags
        </p>
        <div className="grid grid-cols-4 gap-4">
          {tags.map((tag) => (
            <button key={tag.id} style={{...styles.DoseBtn2,  backgroundColor: formData.tags.includes(tag.name) ? '#f82c7f' : 'white'}} className={`truncate`} onClick={(e) => handleTagClick(e,tag)}>
              {tag.name}
            </button>
          ))}
        </div>
      </div>
      <input style={styles.NotesInput} placeholder="Additional Notes" onChange={onChangeData} />
      <button style={styles.SaveBtn}>Save Changes</button>
    </form>
  );
};

const Switch = ({isToggled, handleChange}) => {
  // const [isToggled, setIsToggled] = useState(false);

  // const onClick = () => {
  //   setIsToggled(!isToggled);
  // };

  const styles = {
    Container: {
      cursor: "pointer",
      display: "block",
      position: "relative",
      width: "40px",
      height: "20px",
      pointerEvents: "auto",
      borderRadius: "40px",
      boxShadow: "2px 2px 4px rgba(3, 3, 3, 0.1)",
      backgroundColor: "rgba(255, 255, 255, 1)",
      border: 0,
    },
    Toggle: {
      display: "block",
      position: "absolute",
      top: "50%",
      left: "3px",
      width: "calc(50% - 6px)",
      height: "calc(100% - 6px)",
      transform: "translate(0%, -50%)",
      fontSize: "14px",
      transition: "left 0.3s ease",
      borderRadius: "40px",
      backgroundColor: "rgba(248, 44, 127, 1)",
    },
    Input: {
      position: "absolute",
      opacity: 0,
      visibility: "hidden",
      width: "1px",
      height: "1px",
      pointerEvents: "none",
    },
  };

  return (
    <div style={styles.Container} onClick={handleChange}>
      <div
        style={{
          ...styles.Toggle,
          left: isToggled ? "calc(50% + 3px)" : "3px",
        }}
      />
      <input type="checkbox" style={styles.Input} />
    </div>
  );
};

export default AddItemContainer;