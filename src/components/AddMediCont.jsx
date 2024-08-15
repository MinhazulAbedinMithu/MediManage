import React, { useState } from "react";
import { medications } from "./data";
import { useNavigate } from "react-router-dom";

const AddMediCont = () => {
  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    frequency: "",
    timing: ""
  });

  const navigate = useNavigate();


  const onChangeData = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    medications.push({
      id: crypto.randomUUID(),
      title: formData.name,
      dose: formData.dosage,
      time: formData.timing
    })
    console.log({formData});
    navigate("/medication")
  }
  
  return (
    <form onSubmit={onSubmitForm}>
    <div className="grid grid-cols-1 gap-4 p-4">
      <div>
        <p style={styles.Title}>Medication Name</p>
        <input style={styles.Input} placeholder="Enter medication name" name="name" onChange={onChangeData} value={formData.name} />
      </div>
      <div>
        <p style={styles.Title}>Dosage</p>
        <input style={styles.Input} placeholder="Enter dosage" name="dosage" onChange={onChangeData} value={formData.dosage} />
      </div>
      <div>
        <p style={styles.Title}>Frequency</p>
        <input style={styles.Input} placeholder="Enter frequency" name="frequency" onChange={onChangeData} value={formData.frequency} />
      </div>
      <div>
        <p style={styles.Title}>Timing</p>
        <input style={styles.Input} placeholder="Enter timing" name="timing" onChange={onChangeData} value={formData.timing} />
      </div>
      </div>
      <div className='fixed bottom-0 w-full px-4 py-1'>
  <button style={styles.Button} type="submit">Save</button>
  </div>
    </form>
  );
};

export default AddMediCont;

const styles = {
  Title: {
    color: "#030303",
    fontSize: "14px",
    fontFamily: "Roboto Mono",
    lineHeight: "20px",
  },
  Input: {
    width: "100%",
    height: "38px",
    padding: "0px 8px",
    border: "1px solid #030303",
    boxSizing: "border-box",
    borderRadius: "2px",
    backgroundColor: "#e6e6e6",
    color: "#94a3b8",
    fontSize: "14px",
    fontFamily: "Roboto Mono",
    lineHeight: "38px",
    outline: "none",
  },
  Button: {
      cursor: 'pointer',
      width: '100%',
      height: '48px',
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
