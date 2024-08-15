import React from "react";
import ReminderFooter from "../components/ReminderFooter";
import ReminderNav from "../components/ReminderNav";
import ReminderCont from "../components/ReminderCont";

const Reminder = () => {
  return (
    <div>
      <ReminderNav />
      <ReminderCont />
      <ReminderFooter />
    </div>
  );
};

export default Reminder;
