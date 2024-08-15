import React from 'react';
import Footer from '../components/Footer';
import NotificationsNav from '../components/NotificationsNav';
import NotificationCards from '../components/NotificationCards';

const Notifications = () => {
    return (
        <div>
        <NotificationsNav />
        <div className='px-4 pt-2 pb-24'>
        <NotificationCards />
        </div>
            <Footer />
        </div>
    );
};

export default Notifications;