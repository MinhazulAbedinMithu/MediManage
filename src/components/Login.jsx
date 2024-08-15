import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  Screen: {
    backgroundColor: '#ffffff',
  },
  ImageContainer: {
    top: '20px',
    left: '42px',
    width: '290px',
    height: '290px',
    borderRadius: '2px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  Text: {
    color: '#030303',
    fontSize: '40px',
    fontFamily: 'Roboto Mono',
    fontWeight: 600,
    lineHeight: '52px',
    textAlign: 'center',
  },
  Label: {
    color: '#000000',
    fontSize: '14px',
    fontFamily: 'Roboto Mono',
    lineHeight: '18px',
  },
  Input: {
    top: '418px',
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
    lineHeight: '19px',
    outline: 'none',
  },
  BottomLink: {
    color: '#000000',
    fontSize: '12px',
    fontFamily: 'Roboto Mono',
    fontWeight: 300,
    lineHeight: '16px',
    textAlign: 'right',
  },
  Button: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '595px',
    left: '279px',
    width: '48px',
    height: '48px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    boxShadow: '2px 2px 0px rgba(0,0,0,0.8)',
    color: '#030303',
    backgroundColor: '#f82c7f',
    outline: 'none',
  },
  Icon: {
    color: '#030303',
    fill: '#030303',
    width: '18px',
    height: '18px',
    fontSize: '18px',
  },
  
};

const IconComponent = () => (
    <svg style={styles.Icon}  viewBox="0 0 448 512">
      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
      </path>
    </svg>
  );
const defaultProps = {
    image: 'https://assets.api.uizard.io/api/cdn/stream/38f779eb-2135-44dd-b50d-c771790b0707.png',
    heading: 'MediManage',
    form: [
        {label: "Email", placeholder: "Username"},
        {label: "Password", placeholder: "Password"}
    ],
    IconComponent,
  }

const Login = (props) => {
  return (
    <div style={styles.Screen} className='min-h-screen h-full flex flex-col items-center justify-around'>
      {/* {props.children} */}
      <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
    <div>
    <div style={styles.Text}>
      {props.text ?? defaultProps.heading}
    </div>
    </div>
    <form action="" className='flex flex-col gap-2 pb-4'>
        <div className='flex flex-col gap-3'>
            <div style={styles.Label}>
            {props.text ?? defaultProps.form[0].label}
            </div>
            <input style={styles.Input} placeholder={props.text ?? defaultProps.form[0].placeholder} type='text' />
        </div>
        <div className='flex flex-col gap-3'>
            <div style={styles.Label}>
            {props.text ?? defaultProps.form[1].label}
            </div>
            <input style={styles.Input} placeholder={props.text ?? defaultProps.form[1].placeholder} type='password' />
        </div>
        <div className='text-end'>
            <Link to="/" style={styles.BottomLink}>Manage medication</Link>
        </div>
        <div className='flex justify-end pt-6'>
            <button type='submit' style={styles.Button}>
                {
                    props.IconComponent 
                    ? <props.IconComponent style={styles.Icon} /> 
                    : <defaultProps.IconComponent />
                }
            </button>
        </div>
    </form>
    </div>
  );
};

export default Login;