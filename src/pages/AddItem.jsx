import React from "react";
import Footer from "../components/Footer";
import AddItemNav from "../components/AddItemNav";
import AddItemContainer from "../components/AddItemContainer";

const AddItem = () => {
  return (
    <div>
      <AddItemNav />
      <div className='pb-24'>
      <AddItemContainer />
      </div>
      <Footer />
    </div>
  );
};

export default AddItem;
