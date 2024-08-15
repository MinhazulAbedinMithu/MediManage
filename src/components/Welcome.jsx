import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  Screen: {
    backgroundColor: '#ffffff',
  },
  ImageContainer: {
    top: '33px',
    left: '33px',
    width: '310px',
    height: '310px',
    borderRadius: '2px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  Text: {
    color: '#030303',
    fontSize: '32px',
    fontFamily: 'Roboto Mono',
    fontWeight: 600,
    lineHeight: '40px',
    textAlign: 'center',
  },
  SubText: {
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    fontWeight: 500,
    lineHeight: '20px',
    textAlign: 'center',
    paddingTop: "10px"
  },
  ButtonPrimary: {
    cursor: 'pointer',
    top: '539px',
    left: '24px',
    width: '327px',
    height: '48px',
    padding: '0px 8px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    boxShadow: '2px 2px 0px rgba(0,0,0,0.8)',
    backgroundColor: '#f82c7f',
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    fontWeight: 600,
    lineHeight: '18px',
    textTransform: 'uppercase',
    outline: 'none',
  },
  ButtonSecondary: {
    cursor: 'pointer',
    top: '595px',
    left: '24px',
    width: '327px',
    height: '48px',
    padding: '0px 8px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    boxShadow: '2px 2px 0px rgba(0,0,0,0.8)',
    backgroundColor: '#ffffff',
    color: '#030303',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    fontWeight: 600,
    lineHeight: '18px',
    textTransform: 'uppercase',
    outline: 'none',
  },
};
const defaultProps = {
    image: 'https://assets.api.uizard.io/api/cdn/stream/6ab5984e-83f6-4a1e-b941-529beac24a9b.png',
    text: 'MediManage',
    subText: 'Manage medication schedules',
    
  }

const Welcome = (props) => {

  return (
    <div style={styles.Screen} className='min-h-screen h-full flex flex-col items-center justify-around'>
      {/* {props.children} */}
      <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
    <div>
        <div style={styles.Text}>
        {props.text ?? defaultProps.text}
        </div>
        <div style={styles.SubText}>
        {props.subText ?? defaultProps.subText}
        </div>
    </div>
    <div className='flex flex-col items-center justify-end gap-4'>
        <Link to="/" onClick={() => props.setIsLogin(true)}><button style={styles.ButtonPrimary}>
            Get started
        </button></Link>
        <Link to="/login"><button style={styles.ButtonSecondary}>
            Create an account
        </button></Link>
    </div>
    </div>
  );
};

export default Welcome;