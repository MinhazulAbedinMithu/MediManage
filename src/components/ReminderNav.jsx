import React from 'react';

const ReminderNav = () => {
    const styles = {
        Header: {
          height: '64px',
          backgroundColor: '#f82c7f',
        },
        Text: {
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Roboto Mono',
    lineHeight: '32px',
    textAlign: 'center',
  },
      };
    return (
        <div style={styles.Header} className='flex items-center justify-center'>
            <p style={styles.Text}>MediManage</p>
        </div>
    );
};

export default ReminderNav;