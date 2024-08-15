import React from 'react';
import HomeTab from './HomeTab';
const styles = {
    Screen: {
      backgroundColor: '#ffffff',
    },
    Input: {
        top: '32px',
        left: '32px',
        width: '311px',
        height: '48px',
        padding: '0px 8px',
        border: '1px solid #030303',
        boxSizing: 'border-box',
        borderRadius: '2px',
        backgroundColor: 'rgba(230,230,230,0.6)',
        color: '#484848',
        fontSize: '14px',
        fontFamily: 'Roboto Mono',
        fontWeight: 500,
        lineHeight: '19px',
        outline: 'none',
      },
      Icon: {
        color: '#030303',
        fill: '#030303',
        fontSize: '14px',
        top: '19px',
        left: '20px',
        width: '14px',
        height: '14px',
        position: "absolute"
      },
  };

  const defaultProps = {
    text: '       Search medication',
  };

  const IconComponent = () => (
    <svg style={styles.Icon}  viewBox="0 0 512 512">
      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
      </path>
    </svg>
  );

const Home = () => {
    
  return (
    <div style={styles.Screen} className='flex flex-col items-center py-8'>
      <div className='relative'>
        <IconComponent/>
        <input style={styles.Input} placeholder={ defaultProps.text} />
      </div>
      {/* tab  */}
      <HomeTab/>
    </div>
  )
}

export default Home