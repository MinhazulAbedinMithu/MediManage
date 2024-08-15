import React from 'react';
import MedicationNav from '../components/MedicationNav';
import MedicationFooter from '../components/MedicationFooter';
import MedicationContainer from '../components/MedicationContainer';

const Medication = () => {
    return (
        <div>
            <MedicationNav />
            <MedicationContainer />
            <MedicationFooter />
        </div>
    );
};

export default Medication;