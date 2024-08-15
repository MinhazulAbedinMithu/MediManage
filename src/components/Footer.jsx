import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  Footer: {
    // top: '680px',
    // left: '0px',
    width: '375px',
    height: '66px',
    backgroundColor: '#ffffff',
    boxShadow: '2px -2px 10px rgba(3,3,3,0.1)',
  },
  Icon: {
    color: '#030303',
    fill: '#030303',
    fontSize: '30px',
    top: '697px',
    left: '258px',
    width: '30px',
    height: '30px',
  },
};

const Footer = (props) => {
  return (
    <div style={styles.Footer} className='flex fixed bottom-0 items-center justify-around'>
      <div>
        <Link to="/"><svg style={styles.Icon}  viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none">
            </path>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z">
            </path>
        </svg></Link>
      </div>
      <div>
        <svg style={styles.Icon}  viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none">
            </path>
            <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
            </path>
        </svg>
      </div>
    </div>
  );
};

export default Footer;