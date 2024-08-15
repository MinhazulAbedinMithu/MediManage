import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './pages/Homepage';
import AddItem from './pages/AddItem';
import Notifications from './pages/Notifications';
import Statistics from './pages/Statistics';
import Profile from './pages/Profile';
import Medication from './pages/Medication';
import AddMedication from './pages/AddMedication';
import Reminder from './pages/Reminder';
import CaregiverLogin from './pages/CaregiverLogin';
import CaregiverDash from './pages/CaregiverDash';
import Adherence from './pages/Adherence';

function App() {
  return (
    <Router>
      <div className='min-h-screen h-full w-full'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/medication" element={<Medication />} />
          <Route path="/add-medication" element={<AddMedication />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/caregiver-login" element={<CaregiverLogin />} />
          <Route path="/caregiver-dash" element={<CaregiverDash />} />
          <Route path="/adherence" element={<Adherence />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
